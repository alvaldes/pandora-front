'use client';
import { Suspense, useState } from 'react';
import { MenuLeft } from '../components/MenuLeft';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import '../globals.css';

export default function DashboardLayout({ children, session }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <section className="bg-base-200 min-h-screen text-base-content">
      <header>
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      </header>
      <div className="flex lg:flex-row flex-col">
        {/* <MenuLeft /> */}
        {/* Backdrop */}
        <div
          className={`fixed inset-0 z-9 bg-black bg-opacity-50 transition-opacity lg:hidden ${
            isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={toggleSidebar}
        ></div>
        <Sidebar isSidebarOpen={isSidebarOpen}></Sidebar>
        <div className={`grow px-2 ${isSidebarOpen ? 'lg:px-2' : 'lg:px-32'}`}>
          {children}
        </div>
      </div>
    </section>
  );
}
