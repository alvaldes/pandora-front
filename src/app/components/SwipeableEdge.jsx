'use client';
export const SwipeableEdge = () => {
   /* drawer component */
   const isopen = () => {document.getElementById("drawer-swipe").classList.replace('translate-x-full','translate-x-0')&&document.getElementById("drawer-swipe").classList.replace('right-[30px]','right-0')?null:document.getElementById("drawer-swipe").classList.replace('translate-x-0','translate-x-full')&&document.getElementById("drawer-swipe").classList.replace('right-0','right-[30px]');}
   return (
      <div id="drawer-swipe" className="fixed h-screen overflow-y-auto bg-white top-20 right-0 p-4 pl-0 dark:bg-gray-800 transition-transform translate-x-full border-t border-gray-200 rounded-t-lg dark:border-gray-700 right-[30px] flex flex-row" tabindex="-1" aria-labelledby="drawer-swipe-label">
          <button class="relative hover:bg-gray-50 dark:hover:bg-gray-700 w-[30px] -my-4" onClick={isopen} type="button" data-drawer-target="drawer-swipe" data-drawer-show="drawer-swipe" data-drawer-placement="right" data-drawer-edge="true" data-drawer-edge-offset="right-[30px]" aria-controls="drawer-swipe">
            <span className="absolute w-8 h-1 -translate-y-1/2 bg-gray-300 rounded-lg left-0 top-1/2 dark:bg-gray-600 -rotate-90"></span>
          </button>
         {/*<div className="relative cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 w-[30px] -my-4" data-drawer-toggle="drawer-swipe" onClick={isopen}>
            <span className="absolute w-8 h-1 -translate-y-1/2 bg-gray-300 rounded-lg left-0 top-1/2 dark:bg-gray-600 -rotate-90"></span>
         </div>*/}
         <div className="flex flex-col gap-4">
            <div className="h-max">
               <h1 className="text-xl">Datos del Departamento con el que se va a Trabajar</h1>
               <div className="form-control w-full max-w-lg">
                  <label className="label">
                     <span className="label-text">Facultad:</span>
                  </label>
                  <select className="select select-bordered">
                     <option disabled selected>default</option>
                  </select>
               </div>

               <div className="form-control w-full max-w-lg">
                  <label className="label">
                     <span className="label-text">Departamento:</span>
                  </label>
                  <select className="select select-bordered">
                     <option disabled selected>default</option>
                  </select>
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
                  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" onChange={()=>{}}/>
               </div>

               <div className="form-control w-full max-w-lg">
                  <label className="label">
                     <span className="label-text">Nombre:</span>
                  </label>
                  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" onChange={()=>{}}/>
               </div>

               <div className="form-control">
                  <label className="label cursor-pointer">
                     <span className="label-text">Ver personal activo</span> 
                     <input type="checkbox" checked="checked" className="checkbox checkbox-primary" />
                  </label>
               </div>
               <button className="btn btn-block">Buscar</button>
            </div>
         </div>
      </div>
   );
}

