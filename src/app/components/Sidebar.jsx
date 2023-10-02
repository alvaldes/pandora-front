'use client';
import Link from 'next/link';
import {
  LuAlignEndHorizontal,
  LuFolderCheck,
  LuFolderCog,
  LuFolderKey,
  LuFolderTree,
  LuFolders,
  LuHome,
} from 'react-icons/lu';
import { SidebarDropdown } from './SidebarDropdown';
import { SidebarItem } from './SidebarItem';

export const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div
      className={`fixed inset-y-14 left-0 z-20 flex-shrink-0 w-64 bg-base-300 border-r-2
      border-base-200 shadow-lg lg:left-16 rounded-tr-3xl rounded-br-3xl md:w-72 lg:static lg:w-96
      lg:h-[calc(85vh)] transform transition-all ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:hidden'
      }`}
    >
      <nav aria-label="Main" className="flex flex-col h-full py-5">
        {/* <!-- Links --> */}
        <div className="flex-1 px-4 space-y-2 overflow-hidden hover:overflow-auto">
          <SidebarItem to="/inicio" label="Inicio">
            <LuHome />
          </SidebarItem>
          <SidebarItem to="" label="Estrategias">
            <LuAlignEndHorizontal />
          </SidebarItem>
          <SidebarItem to="" label="Áreas de Resultados Claves">
            <LuFolderKey />
          </SidebarItem>
          <SidebarItem to="" label="Organización">
            <LuFolderTree />
          </SidebarItem>
          <SidebarItem to="" label="Control">
            <LuFolderCheck />
          </SidebarItem>
          <SidebarItem to="" label="Reporte">
            <LuFolders />
          </SidebarItem>
          {/* todo: make a dropdaw menu */}
          <SidebarDropdown
            label={'Configuraciones'}
            icon="LuFolderCog"
            toList={['/config/user_role']}
          >
            <SidebarItem to={''} label="Acesores" />
            <SidebarItem to={'/config/colaboradores'} label="Colaboradores del Departamento" />
            <SidebarItem to={''} label="Jefe de Disciplinja del Departamento" />
            <SidebarItem
              to={'/config/user_role'}
              label="Gestión Roles Usuarios"
            />
            <SidebarItem to={''} label="Colectivo de Carrera" />
            <SidebarItem to={''} label="Colectivo de Año" />
          </SidebarDropdown>
        </div>
      </nav>
    </div>
  );
};
