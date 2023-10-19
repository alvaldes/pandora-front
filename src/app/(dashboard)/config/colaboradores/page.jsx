"use client";
import { useEffect, useState } from "react";
import { Table } from "@/app/components/Table/Table";
import axios from "axios";

export default function Collaborator({ id = "", list = [], ...other }) {
  const [tabIndex, setTabIndex] = useState(0);
  const [list0, setList0] = useState([
    { ID: 15, "datos de prueba": "hola", "Es colaborador": "Inactive" },
    { ID: 16, "datos de prueba": "mundo", "Es colaborador": "Inactive" },
  ]);

  const actionActiveInactive = (index, stateItem, stateValue) => {};
  const [isLoading, setIsLoading] = useState(true);
  const [collaboratorData, setCollaboratorData] = useState([]);

  const collaboratorHeader = [
    "Persona",
    "Departamento",
    "Fecha Creacion",
    "Creado por",
    "Fecha Modificacion",
    "Modificado por",
    "Es colaborador",
  ];

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
            "Es colaborador": "Active",
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
    <div className="flex flex-col gap-4 py-4">
      <div className="flex flex-col items-center">
        <div className="tabs">
          <button
            onClick={() => setTabIndex(0)}
            className={`tab tab-lifted ${
              tabIndex == 0 &&
              "tab-active text-primary-content bg-[hsl(var(--pf)/1)!important]"
            }`}
          >
            Lista General
          </button>
          <button
            onClick={() => setTabIndex(1)}
            className={`tab tab-lifted ${
              tabIndex == 1 &&
              "tab-active text-primary-content bg-[hsl(var(--pf)/1)!important]"
            }`}
          >
            Colaboradores
          </button>
        </div>
      </div>
      <Table
        id="Dp"
        body={tabIndex ? collaboratorData : list0}
        title="Colaboradores del Departamento"
        header={
          tabIndex ? collaboratorHeader : ["datos de prueba", "Es colaborador"]
        }
        search={() => {}}
        number={1}
        //checked
        view
        toggleItems={[
          {
            0: "Es colaborador",
            1: actionActiveInactive,
            2: false,
          },
        ]}
      />
    </div>
  );
}
