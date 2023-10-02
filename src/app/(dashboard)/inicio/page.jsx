"use client";
import { Table } from "@/app/components/Table";
import axios from "axios";
//import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LuRefreshCw } from "react-icons/lu";

export default function Home() {
  //const router = useRouter();

  /*const getProfile = async () => {
    const response = await axios.get('/api/profile');
    console.log(response);
  };

  const logout = async () => {
    const response = await axios.post('/api/auth/logout');
    if (response.status == 200) {
      router.push('/');
    }
  };*/
  const [filter, setFilter] = useState({
    pDpto: {
      search: "",
    },
    cDpto: {
      search: "",
    },
  });
  const onChangeFilter = (id, { target }) => {
    const name = target?.attributes?.name ?? target?.name;
    const value = target?.value ?? target?.attributes?.value;
    setFilter((old) => ({
      ...old,
      [id]: {
        [name?.value || name]: value?.value || value,
      },
    }));
  };

  const header = ["No. Trabajador", "CI", "Nombre", "Dpto Recursos Humanos"];
  const prueba = [
    {
      ID: 3128,
      IDJob: 3733,
      CI: "82052607258",
      Name: "Diana Perez Armayor",
      DepartamentHR: "Fac. Ing. Industrial",
    },
    {
      ID: 3129,
      IDJob: 3710,
      CI: "96277013847",
      Name: "Rosaura Martinez Cuellar",
      DepartamentHR: "Fac. Ing. Informatica",
    },
  ];

  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [effect, setEffect] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [collaboratorData, setCollaboratorData] = useState([]);

  const collaboratorHeader = [
    "Persona",
    "Departamento",
    "Fecha Creacion",
    "Creado por",
    "Fecha Modificacion",
    "Modificado por",
  ];

  const uptLastUpdate = () => {
    setEffect(true);
    setLastUpdate(Date.now());
    setEffect(false);
  };
  const date = () => {
    const value = Date(lastUpdate).split(" ");
    return `${value[2]}/${value[1]}/${value[3]} (${value[4]})`;
  };

  useEffect(() => {
    const loadAllUsers = async () => {
      const response = await axios.get("/api/academic/collaborator/138");
      if (response.status == 200) {
        const tableData = [];
        response.data.map((d, i) => {
          tableData[i] = {
            ID: d.idCollaborator,
            Persona: d.idPerson,
            Departamento: d.idDepartment,
            "Fecha Creacion": d.createdOn,
            "Creado por": d.createdBy,
            "Fecha Modificacion": d.modifiedOn,
            "Modificado por": d.modifiedBy,
          };
        });
        setCollaboratorData(tableData);
        setIsLoading(false);
      }
    };
    loadAllUsers();
  }, []);
  return isLoading ? (
    <div className="flex justify-center align-center my-60">
      <span className="loading loading-dots text-neutral loading-lg h-[calc(85vh)"></span>
    </div>
  ) : (
    <main className="container mx-auto flex flex-col">
      <div className={`flex`}>
        <div
          className={`ml-auto drawer-content flex flex-row items-center justify-end py-2`}
        >
          <p className="text-green-500 mr-4">
            Última actualizacion: <span>{date()}</span>
          </p>
          <div
            className="lg:tooltip lg:tooltip-bottom"
            data-tip="Actualizar Datos"
          >
            <button
              className={`${
                effect && "animate-spin"
              } btn btn-ghost btn-circle drawer-button lg:swap lg:swap-rotate text-xl btn-sm`}
              onClick={uptLastUpdate}
            >
              <LuRefreshCw />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full py-4">
        <Table
          header={header}
          checked
          view
          edit
          remove
          search={onChangeFilter}
          number
          title="Personal del Departamento Seleccionado"
          id="pDpto"
        >
          {/* always put the id, it must match the variable intended for the search, and it is used to create the info modal, etc. */}
          {prueba
            ?.filter((item) =>
              //ID in position 0 always
              Object.values(item).some((value) =>
                `${value}`
                  .toLowerCase()
                  .includes(filter.pDpto.search.toLowerCase())
              )
            )
            ?.map((item) => (
              <tr key={item.ID}>
                {Object.values(item)
                  .filter((__, index) => !(Object.keys(item)[index] === "ID"))
                  ?.map((value, index) => (
                    <td
                      key={index}
                      className="text-center"
                      name={Object.keys(item)[index + 1]}
                    >
                      {value}
                    </td>
                  ))}
              </tr>
            ))}
        </Table>
      </div>
      <div className="w-full py-8">
        <Table
          title="Colaboradores del Departamento Seleccionado"
          checked
          view
          edit
          remove
          search={onChangeFilter}
          number
          id="cDpto"
          header={collaboratorHeader}
        >
          {collaboratorData
            ?.filter((item) =>
              Object.values(item).some((value) =>
                `${value}`
                  .toLowerCase()
                  .includes(filter.cDpto.search.toLowerCase())
              )
            )
            ?.map((item) => (
              <tr key={item.ID}>
                {Object.values(item)
                  .filter((__, index) => !(Object.keys(item)[index] === "ID"))
                  ?.map((value, index) => (
                    <td
                      key={index}
                      className="text-center"
                      name={Object.keys(item)[index + 1]}
                    >
                      {value}
                    </td>
                  ))}
              </tr>
            ))}
        </Table>
      </div>
    </main>
  );
}
