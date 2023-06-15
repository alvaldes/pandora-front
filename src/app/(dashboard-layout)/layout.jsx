// 'use client';
import { Suspense } from 'react';
import '../globals.css';
import { MenuLeft } from './components/MenuLeft';
import { Navbar } from './components/Navbar';

export default function DashboardLayout({ children, session }) {
  return (
    <body classNameName="bg-base-300 min-h-screen">
      <header>
        <Navbar />
      </header>
      <div className="flex lg:flex-row flex-col">
        <div className="flex-none">
          <MenuLeft />
        </div>
        <div className="grow">
          {children}
        </div>
      </div>
    </body>
  );
}