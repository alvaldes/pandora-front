'use client';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

export const SwipeableEdge = ({
  //selectActive,
  searchSessionData,
  //selectOnChange,
  searchSessionOnChange,
  //facultyList,
  //departmentList,
  isDrawerOpen,
  toggleDrawer,
}) => {
  return (
    <div
      id="drawer-swipe"
      className={`fixed z-10 lg:h-[calc(85vh)] overflow-y-auto lg:top-20 right-0 transition-transform rounded-s-lg flex flex-row ${
        (isDrawerOpen &&
          'translate-x-0 right-0 bg-base-100 border-t border-neutral-700 top-20') ||
        'translate-x-full right-[30px] h-[60px] top-1/2'
      }`}
      tabIndex={-1}
      aria-labelledby="drawer-swipe-label"
    >
      <div>
        <button
          className={`relative hover:bg-base-300 mr-2 bg-gray-800 bg-opacity-30 ${
            (isDrawerOpen && 'h-full w-[30px]') ||
            'w-[60px] h-[60px] -translate-y-1/2 left-0 top-1/2 border-2 border-primary-content hover:border-primary hover:text-primary rounded-full px-1'
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
          {(isDrawerOpen && (
            <LuChevronRight className="w-[25px] h-[25px]" />
          )) || <LuChevronLeft className="w-[25px] h-[25px]" />}
        </button>
      </div>
      <div className="flex flex-col gap-4  p-4 pl-0">
        {/*<div className="h-max">
          <h1 className="text-lg">
            Datos del Departamento con el que se va a Trabajar
          </h1>
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text text-base text-sm">Facultad:</span>
            </label>
            {(facultyList && (
              <select
                className="select select-bordered text-sm"
                value={selectActive?.FACULTY}
                onChange={selectOnChange}
                name="FACULTY"
              >
                {facultyList.map((val, index) => (
                  <option key={index} value={val} className="text-sm">
                    {val}
                  </option>
                ))}
              </select>
            )) || (
              <p className="inline-block align-middle indent-[5px] text-sm">
                {selectActive?.FACULTY}
              </p>
            )}
          </div>

          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text text-base text-sm">
                Departamento:
              </span>
            </label>
            {(departmentList && (
              <select
                className="select select-bordered text-sm"
                value={selectActive?.DEPARTMENT}
                onChange={selectOnChange}
                name="DEPARTMENT"
              >
                {departmentList.map((val, index) => (
                  <option key={index} value={val} className="text-sm">
                    {val}
                  </option>
                ))}
              </select>
            )) || (
              <p className="inline-block align-middle indent-[5px] text-sm">
                {selectActive?.DEPARTMENT}
              </p>
            )}
          </div>
        </div>*/}

        {/*<div className="p-4 relative">
          <span className="absolute w-full h-[1px] -translate-x-1/2 left-1/2 bg-gray-300 rounded-lg"></span>
        </div>*/}

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
              value={searchSessionData?.ID}
              name="ID"
              onChange={searchSessionOnChange}
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
              value={searchSessionData?.NAME}
              name="NAME"
              onChange={searchSessionOnChange}
            />
          </div>

          <div className="form-control">
            <label className="label cursor-pointer w-fit">
              <input
                type="checkbox"
                checked={searchSessionData?.IS_ACTIVE}
                className="checkbox checkbox-accent checkbox-sm"
                name="IS_ACTIVE"
                onChange={searchSessionOnChange}
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
