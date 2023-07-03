'use client';
import { useState } from 'react';
//import { MenuLeft } from '../components/MenuLeft';
import { Modal } from '../components/Modal';
import { Navbar } from '../components/Navbar';
import { SettingSelects } from '../components/SettingSelect';
import { Sidebar } from '../components/Sidebar';
import '../globals.css';

export default function DashboardLayout({ children, session }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <section className="bg-base-200 min-h-screen text-base-content">
      <header>
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      </header>

      <Modal btnCLoseX id="SETTING">
        <div className="text-center border-b-2 border-primary p-2 mb-6">
          <h3 className="font-bold text-lg uppercase">Ajustes</h3>
        </div>
        <SettingSelects
          facultyList={['prueba 1', 'prueba 2', 'prueba 3']}
          departmentList={['prueba 1', 'prueba 2', 'prueba 3']}
        />
      </Modal>

      <div className="flex lg:flex-row flex-col">
        {/* <MenuLeft /> */}
        {/* Backdrop */}
        <div
          className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity lg:hidden ${
            isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={toggleSidebar}
        ></div>
        <Sidebar isSidebarOpen={isSidebarOpen}></Sidebar>
        <div className={`grow px-2 mx-auto`}>{children}</div>
      </div>
    </section>
  );
}
