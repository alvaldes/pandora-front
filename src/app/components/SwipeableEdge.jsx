'use client';

import { useState } from "react";

export const SwipeableEdge = ({selectActive, selectOnChange, facultyList, departmentList}) => {
   /* drawer component */
   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
   return (
      <div id="drawer-swipe" className={`fixed h-screen overflow-y-auto bg-white top-20 right-0 p-4 pl-0 dark:bg-gray-800 transition-transform border-t border-gray-200 rounded-t-lg dark:border-gray-700 flex flex-row ${isDrawerOpen?"translate-x-0 right-0":"translate-x-full right-[30px]"}`} tabindex="-1" aria-labelledby="drawer-swipe-label">
          <button class="relative hover:bg-gray-50 dark:hover:bg-gray-700 w-[30px] -my-4 mr-2" onClick={toggleDrawer} type="button" data-drawer-target="drawer-swipe" data-drawer-show="drawer-swipe" data-drawer-placement="right" data-drawer-edge="true" data-drawer-edge-offset="right-[30px]" aria-controls="drawer-swipe">
            <span className="absolute w-8 h-1 -translate-y-1/2 bg-gray-300 rounded-lg left-0 top-1/2 dark:bg-gray-600 -rotate-90"></span>
          </button>
         <div className="flex flex-col gap-4">
            <div className="h-max">
               <h1 className="text-xl">Datos del Departamento con el que se va a Trabajar</h1>
               <div className="form-control w-full max-w-lg">
                  <label className="label">
                     <span className="label-text">Facultad:</span>
                  </label>
                  {facultyList?
                     <select className="select select-bordered" value={selectActive.faculty} onChange={selectOnChange} name="faculty">
                        {facultyList.map((val, index) => (<option key={index} value={val}>{val}</option>))}
                     </select>
                     : <p className="inline-block align-middle indent-[5px] uppercase">{selectActive.faculty}</p>
                  }
               </div>

               <div className="form-control w-full max-w-lg">
                  <label className="label">
                     <span className="label-text">Departamento:</span>
                  </label>
                  {departmentList?
                     <select className="select select-bordered" value={selectActive.department} onChange={selectOnChange} name="department">
                        {departmentList.map((val, index) => (<option key={index} value={val}>{val}</option>))}
                     </select>
                     : <p className="inline-block align-middle indent-[5px] uppercase">{selectActive.department}</p>
                  }
               </div>
            </div>

            <div className="p-4 relative">
               <span className="absolute w-full h-1 -translate-x-1/2 left-1/2 bg-gray-300 rounded-lg dark:bg-gray-600"></span>
            </div>

            <div className="h-max">
               <h1 className="text-xl">Plantilla del Departamento Seleccionado</h1>
               <h2 className="text-md">Filtrar por:</h2>
               <div className="form-control w-full max-w-lg">
                  <label className="label">
                     <span className="label-text">Identificación:</span>
                  </label>
                  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" value={selectActive.id} name="id" onChange={selectOnChange}/>
               </div>

               <div className="form-control w-full max-w-lg">
                  <label className="label">
                     <span className="label-text">Nombre:</span>
                  </label>
                  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" value={selectActive.personName} name="personName" onChange={selectOnChange}/>
               </div>

               <div className="form-control">
                  <label className="label cursor-pointer">
                     <span className="label-text">Ver personal activo</span> 
                     <input type="checkbox" checked={selectActive.checked} className="checkbox checkbox-primary" name="checked" onChange={selectOnChange} />
                  </label>
               </div>
               <button className="btn btn-block">Buscar</button>
            </div>
         </div>
      </div>
   );
}

