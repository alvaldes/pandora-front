"use client";

import { SwipeableEdge } from "@/app/components/SwipeableEdge";
import { useState } from "react";

const HomeLayout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  let facultyActive = localStorage.getItem("faculty");
  let departmentActive = localStorage.getItem("department");
  let checkedActive = localStorage.getItem("checked");
  let nameActive = localStorage.getItem("personName");
  let idActive = localStorage.getItem("id");

  const [selects, setSelects] = useState({
    faculty: facultyActive !== "undefined" ? facultyActive : "",
    department: departmentActive !== "undefined" ? departmentActive : "",
    checked: checkedActive !== "undefined" ? checkedActive.match("true") : true,
    personName: nameActive !== "undefined" ? nameActive : "",
    id: idActive !== "undefined" ? idActive : "",
  });

  const selectUpdate = ({ target }) => {
    setSelects({
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    });
    localStorage.removeItem(`${target.name}`);
    localStorage.setItem(
      `${target.name}`,
      target.type === "checkbox" ? target.checked : target.value
    );
  };

  return (
    <section className="bg-base-200 min-h-screen text-base-content">
      <div
        className={`fixed inset-0 z-9 bg-black bg-opacity-50 transition-opacity ${
          isDrawerOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleDrawer}
      ></div>
      {children}
      <SwipeableEdge
        selectActive={selects}
        facultyList={["prueba 1", "prueba 2", "prueba 3"]}
        departmentList={["prueba 1", "prueba 2", "prueba 3"]}
        selectOnChange={selectUpdate}
        toggleDrawer={toggleDrawer}
        isDrawerOpen={isDrawerOpen}
      />
    </section>
  );
};

export default HomeLayout;
