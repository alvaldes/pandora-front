"use client";

import { SwipeableEdge } from "@/app/components/SwipeableEdge";
import { useEffect, useState } from "react";

const HomeLayout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const [selects, setSelects] = useState(
    JSON.parse(localStorage.getItem("ITEM_SETTING")) || {
      FACULTY: "",
      DEPARTMENT: "",
      IS_ACTIVE: true,
      NAME: "",
      ID: "",
    }
  );
  const [search, setSearch] = useState(
    JSON.parse(sessionStorage.getItem("ITEM_SEARCH")) || {
      IS_ACTIVE: true,
      NAME: "",
      ID: "",
    }
  );
  const selectUpdate = ({ target }) => {
    setSelects({
      ...selects,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    });
  };
  const searchUpdate = ({ target }) => {
    setSearch({
      ...search,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    });
  };

  /**
   * Local Storage (useEffect)
   * Updating data in storage of selected values in setting state
   */
  useEffect(() => {
    localStorage.setItem("ITEM_SETTING", JSON.stringify({ ...selects }));
  }, [selects]);

  /**
   * Session Storage (useEffect)
   * Updating data of the values in storage only in actual sitting.
   */
  useEffect(() => {
    sessionStorage.setItem("ITEM_SEARCH", JSON.stringify({ ...search }));
  }, [search]);
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
        searchSessionOnChange={searchUpdate}
        searchSessionData={search}
      />
    </section>
  );
};

export default HomeLayout;
