'use client';

import { SwipeableEdge } from '@/app/components/SwipeableEdge';
import { useEffect, useState } from 'react';

const ConfigLayout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <section className="bg-base-200 text-base-content">
      <div
        className={`fixed inset-0 z-10 bg-black bg-opacity-50 transition-opacity ${
          isDrawerOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleDrawer}
      ></div>
      {children}
      <SwipeableEdge
        //selectActive={selects}
        //facultyList={["prueba 1", "prueba 2", "prueba 3"]}
        //departmentList={["prueba 1", "prueba 2", "prueba 3"]}
        //selectOnChange={selectUpdate}
        toggleDrawer={toggleDrawer}
        isDrawerOpen={isDrawerOpen}
      />
    </section>
  );
};

export default ConfigLayout;
