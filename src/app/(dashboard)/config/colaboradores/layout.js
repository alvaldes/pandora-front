"use client";
import { useState } from "react";
import Collaborator from "./page";

function CollaboratorLayout({ children }) {
  const [tabIndex, setTabIndex] = useState(0);
  const list0 = [
    { ID: 15, 0: "hola", 1: "Active", 2: "Inactive" },
    { ID: 16, 0: "mundo", 1: "Inactive", 2: "Active" },
  ];
  const list1 = [
    { ID: 15, 0: "hola1", 1: "Inactive", 2: "Active" },
    { ID: 16, 0: "mundo1", 1: "Active", 2: "Inactive" },
  ];
  return (
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
      <Collaborator
        id="Dp"
        list={tabIndex ? list1 : list0}
        title="Prueba"
        header={["datos de prueba", "Estado 1", "Estado 2"]}
        search={() => {}}
        checked
        view
        toggleItems={["Estado 1", "Estado 2"]}
      />
    </div>
  );
}

export default CollaboratorLayout;
