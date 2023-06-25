"use client";

//import { useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export const SwipeableEdge = ({
  selectActive,
  selectOnChange,
  facultyList,
  departmentList,
  isDrawerOpen,
  toggleDrawer,
}) => {
  return (
    <div
      id="drawer-swipe"
      className={`fixed z-9 lg:h-[calc(85vh)] overflow-y-auto lg:top-20 right-0 p-4 pl-0 transition-transform rounded-t-lg flex flex-row ${
        isDrawerOpen
          ? "translate-x-0 right-0 bg-base-100 border-t border-gray-200 top-20"
          : "translate-x-full right-[30px] h-[60px] top-1/2"
      }`}
      tabIndex={-1}
      aria-labelledby="drawer-swipe-label"
    >
      <div>
        <button
          className={`relative hover:bg-base-300 mr-2 ${
            isDrawerOpen
              ? "h-full w-[30px] -my-4"
              : "w-[60px] h-[60px] -translate-y-1/2 left-0 top-1/2 border-2 border-primary-content hover:border-primary hover:text-primary rounded-full px-1"
          }`}
          onClick={toggleDrawer}
          type="button"
          data-drawer-target="drawer-swipe"
          data-drawer-show="drawer-swipe"
          data-drawer-placement="right"
          data-drawer-edge="true"
          data-drawer-edge-offset="right-[30px]"
          aria-controls="drawer-swipe"
          data-drawer-backdrop="true"
        >
          {/*<span className="absolute w-8 h-1 -translate-y-1/2 bg-gray-300 rounded-lg left-0 top-1/2 dark:bg-gray-600 -rotate-90"></span>*/}
          {isDrawerOpen ? (
            <LuChevronRight className="w-[25px] h-[25px]" />
          ) : (
            <LuChevronLeft className="w-[25px] h-[25px]" />
          )}
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <div className="h-max">
          <h1 className="text-lg">
            Datos del Departamento con el que se va a Trabajar
          </h1>
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text text-base text-sm">Facultad:</span>
            </label>
            {facultyList ? (
              <select
                className="select select-bordered text-sm"
                value={selectActive.faculty}
                onChange={selectOnChange}
                name="faculty"
              >
                {facultyList.map((val, index) => (
                  <option key={index} value={val} className="text-sm">
                    {val}
                  </option>
                ))}
              </select>
            ) : (
              <p className="inline-block align-middle indent-[5px] text-sm">
                {selectActive.faculty}
              </p>
            )}
          </div>

          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text text-base text-sm">
                Departamento:
              </span>
            </label>
            {departmentList ? (
              <select
                className="select select-bordered text-sm"
                value={selectActive.department}
                onChange={selectOnChange}
                name="department"
              >
                {departmentList.map((val, index) => (
                  <option key={index} value={val} className="text-sm">
                    {val}
                  </option>
                ))}
              </select>
            ) : (
              <p className="inline-block align-middle indent-[5px] text-sm">
                {selectActive.department}
              </p>
            )}
          </div>
        </div>

        <div className="p-4 relative">
          <span className="absolute w-full h-[1px] -translate-x-1/2 left-1/2 bg-gray-300 rounded-lg"></span>
        </div>

        <div className="h-max">
          <h1 className="text-lg">Plantilla del Departamento Seleccionado</h1>
          <h2 className="text-base">Filtrar por:</h2>
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text text-base text-sm">
                Identificación:
              </span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-lg text-sm"
              value={selectActive.id}
              name="id"
              onChange={selectOnChange}
            />
          </div>

          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text text-base text-sm">Nombre:</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-lg text-sm"
              value={selectActive.personName}
              name="personName"
              onChange={selectOnChange}
            />
          </div>

          <div className="form-control">
            <label className="label cursor-pointer w-fit">
              <input
                type="checkbox"
                checked={selectActive.checked}
                className="checkbox checkbox-accent checkbox-sm"
                name="checked"
                onChange={selectOnChange}
              />
              <span className="label-text text-base text-base text-sm pl-3">
                Ver personal activo
              </span>
            </label>
          </div>
          <button className="btn btn-primary btn-block">Buscar</button>
        </div>
      </div>
    </div>
  );
};
