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
  const header = [
    "No. Trabajador",
    "CI",
    "Nombre",
    "Departamento Recursos Humanos",
  ];
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
      IDPerson: 3710,
      CI: "96277013847",
      Name: "Rosaura Martinez Cuellar",
      DepartamentHR: "Fac. Ing. Informatica",
    },
  ];

  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [effect, setEffect] = useState(false);

  const uptLastUpdate = () => {
    setEffect(true);
    setLastUpdate(Date.now());
    setEffect(false);
  };
  const date = () => {
    const value = Date(lastUpdate).split(" ");
    return `${value[2]}/${value[1]}/${value[3]} (${value[4]})`;
  };

  return (
    <main className="container mx-auto flex flex-col">
      <div className={`flex`}>
        <div
          className={`ml-auto drawer-content flex flex-row items-center justify-end py-2`}
        >
          <p className="text-green-500 mr-4">
            Última actualizacion: <span>{date()}</span>
          </p>
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

      <div className="w-full py-4">
        <Table
          title={`Personal del Departamento Seleccionado`}
          header={header}
          body={prueba}
          checked
          number
          view
          edit
          remove
          editRm
          search
        />
      </div>
      <div className="w-full py-8">
        <Table
          title="Colaboradores del Departamento Seleccionado"
          header={header}
          body={prueba}
          checked
          number
          view
          edit
          remove
          search
        />
      </div>
      <div className="alert alert-success">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Bienvenido, esta es la página de inicio!</span>
      </div>
    </main>
  );
}
