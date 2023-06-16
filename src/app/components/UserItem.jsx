'use client';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { themeChange } from 'theme-change';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const UserItem = ({ className }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const router = useRouter();

  const getProfile = async () => {
    const response = await axios.get('/api/profile');
    console.log(response);
  };

  const logout = async (e) => {
    e.preventDefault();
    const result = await axios.post('/api/auth/logout');
    if (result.status == 200) {
      router.push('/');
    }
  };

  useEffect(() => {
    const storeTheme = localStorage.getItem('theme');
    themeChange(false);
    setIsDarkTheme(storeTheme == 'dark');
  }, []);

  return (
    <div className={className}>
      <label
        tabindex="0"
        className="btn btn-ghost btn-circle avatar ring ring-primary ring-offset-base-100 ring-offset-0"
      >
        <div className="w-10 rounded-full">
          <Image
            className="object-cover"
            width={100}
            height={100}
            src="/profile.png"
            alt="user-logo"
          />
        </div>
      </label>
      <ul
        tabindex="0"
        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link href="" className="justify-between">
            Perfil
            <span className="badge">inf</span>
          </Link>
        </li>
        <li>
          <Link href="">Ajustes</Link>
        </li>
        <li>
          <label className="label cursor-pointer">
            <span className="">Tema Oscuro</span>
            <input
              type="checkbox"
              className="toggle toggle-sm"
              data-toggle-theme="dark,cupcake"
              data-act-class="ACTIVECLASS"
              onChange={() => setIsDarkTheme((prev) => !prev)}
              checked={isDarkTheme}
            />
          </label>
        </li>
        <li className="h-0.5"></li>
        <button onClick={logout} className="btn btn-outline btn-sm btn-error">
          Cerrar Sesión
        </button>
      </ul>
    </div>
  );
};
