"use client";
import { useState } from "react";
import Collaborator from "./page";

function CollaboratorLayout({ children }) {
  const [tabIndex, setTabIndex] = useState(0);
  const [list0, setList0] = useState([
    { ID: 15, 0: "hola", 1: "Active", 2: "Inactive" },
    { ID: 16, 0: "mundo", 1: "Inactive", 2: "Active" },
  ]);
  const [list1, setList1] = useState([
    { ID: 15, 0: "hola1", 1: "Inactive", 2: "Active" },
    { ID: 16, 0: "mundo1", 1: "Active", 2: "Inactive" },
  ]);
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
        toggleItems={[
          {
            0: "Estado 1",
            1: (index, index1, state) => {
              let tem = tabIndex ? list1 : list0;
              tem[index][index1] = state === "Active" ? "Inactive" : "Active";
              tabIndex ? setList1(tem) : setList0(tem);
            },
          },
          {
            0: "Estado 2",
            1: (index, index1, state) => {
              const tem = tabIndex ? list1 : list0;
              tem[index][index1] = state === "Active" ? "Inactive" : "Active";
              tabIndex ? setList1(tem) : setList0(tem);
            },
          },
          ,
        ]}
      />
    </div>
  );
}

export default CollaboratorLayout;
