// 'use client';
import { Suspense } from 'react';
import { MenuLeft } from '../components/MenuLeft';
import { Navbar } from '../components/Navbar';
import '../globals.css';

export default function DashboardLayout({ children, session }) {
  return (
    <section className="bg-base-200 min-h-screen text-base-content">
      <header>
        <Navbar />
      </header>
      <div className="flex lg:flex-row flex-col">
        <div className="flex-none">
          <MenuLeft />
        </div>
        <div className="grow px-24">{children}</div>
      </div>
    </section>
  );
}
