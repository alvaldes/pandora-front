'use client';
import { SwipeableEdge } from '@/app/components/SwipeableEdge';
import { TableHome } from '@/app/components/TableHome';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { LuRefreshCw } from 'react-icons/lu';

export default function Home() {
  const router = useRouter();

  const getProfile = async () => {
    const response = await axios.get('/api/profile');
    console.log(response);
  };

  const logout = async () => {
    const response = await axios.post('/api/auth/logout');
    if (result.status == 200) {
      router.push('/');
    }
  };
  const prueba = [{
    "IDPerson": 3733,
    "CI": "82052607258",
    "Name": "Diana Perez Armayor",
    "DepartamentHR": "Fac. Ing. Industrial",
  }]

  return (
    <main className="container mx-auto flex flex-col">
      <div className={`flex`}>
        <div className={`ml-auto drawer-content flex flex-row items-center justify-end py-2`}>
          <p className="text-green-500 mr-4">Última actualizacion: <span>{`12:00`}</span></p>
          <button className={`btn btn-ghost btn-circle drawer-button lg:swap lg:swap-rotate text-xl btn-sm`}>
            <LuRefreshCw />
          </button>
        </div>
      </div>
      <div class="text-center">
        {/*<button 
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" 
          type="button"
          data-drawer-target="drawer-swipe" 
          data-drawer-show="drawer-swipe" 
          data-drawer-placement="right" 
          data-drawer-edge="true" 
          data-drawer-edge-offset="right-[60px]" 
          aria-controls="drawer-swipe"
          >
          Show swipeable drawer
        </button>*/}
      </div>
      <div className="w-full py-4">
        <h1 className="text-xl">Personal del Departamento Seleccionado</h1>
        <TableHome data={prueba} />
      </div>
      <div className="w-full py-4">
        <h1 className="text-xl">Colaboradores del Departamento Seleccionado</h1>
        <TableHome data={prueba} />
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
      <SwipeableEdge />
    </main>
  );
}
