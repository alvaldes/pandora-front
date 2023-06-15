'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { UserItem } from './UserItem';

export const Navbar = () => {
  const [isSideMenu, setIsSideMenu] = useState();

  const updateSideMenu = () => {
    setIsSideMenu(!document.getElementById('my-drawer-2').checked);
  };

  return (
    <div className="navbar text-base-content bg-base-300 px-4">
      <div className="drawer-content flex flex-col items-center justify-center h-8 w-8">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost btn-circle drawer-button lg:swap lg:swap-rotate"
          onClick={updateSideMenu}
        >
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" checked={isSideMenu} className="hidden" />

          {/* hamburger icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 swap-off fill-current"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>

          {/* close icon */}
          <svg
            className="h-5 w-5 swap-on fill-current lg:block hidden"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
      <div className="flex-1">
        <Link href={'/'} className="pl-7 text-xl font-light flex self-center">
          <Image
            className="object-cover w-7 h-7"
            width={100}
            height={100}
            src="/pandora.png"
            alt="user-logo"
          />
          Pandora
        </Link>
      </div>
      <div className="flex-none">
        <UserItem className="dropdown dropdown-end" />
      </div>
    </div>
  );
};
