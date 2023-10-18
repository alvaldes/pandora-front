"use client";
import { useState } from "react";
import Collaborator from "./page";

function CollaboratorLayout({ children }) {
  const [tabIndex, setTabIndex] = useState(0);
  const [list0, setList0] = useState([
    { ID: 15, "datos de prueba": "hola", "Estado 1": "Inactive" },
    { ID: 16, "datos de prueba": "mundo", "Estado 1": "Inactive" },
  ]);
  const [list1, setList1] = useState([
    { ID: 17, "datos de prueba": "hola1", "Estado 1": "Active" },
    { ID: 18, "datos de prueba": "mundo1", "Estado 1": "Active" },
  ]);

  const actionActiveInactive = (index, stateItem, stateValue) => {
    if (stateValue) {
      let temp = list0.filter((__, _index) => index == _index);
      setList0((old) => old.filter((__, _index) => index != _index));
      temp[0][stateItem] = "Active";
      setList1((old) => [...old, ...temp].sort((a, b) => a.ID - b.ID));
    } else {
      let temp = list1.filter((__, _index) => index == _index);
      setList1((old) => old.filter((__, _index) => index != _index));
      temp[0][stateItem] = "Inactive";
      setList0((old) => [...old, ...temp].sort((a, b) => a.ID - b.ID));
    }
  };

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
        header={["datos de prueba", "Estado 1"]}
        search={() => {}}
        //checked
        view
        toggleItems={[
          {
            0: "Estado 1",
            1: actionActiveInactive,
            2: false,
          },
        ]}
      />
    </div>
  );
}

export default CollaboratorLayout;
