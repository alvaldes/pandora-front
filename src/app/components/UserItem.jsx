'use client';
import axios from 'axios';
import Link from 'next/link';
import { themeChange } from 'theme-change';
import { Modal } from '../components/Modal';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const UserItem = ({ className }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [user, setUser] = useState({
    id: 0,
    username: '',
    password: '',
    role: {
      id: 0,
      roleName: '',
    },
    email: '',
    ci: '',
    name: '',
    lastname: '',
    position: '',
    status: '',
  });
  const router = useRouter();

  const getProfile = async () => {
    const response = await axios.get('/api/profile');
    if (response.status == 200) {
      setUser(response.data);
    }
  };

  const logout = async (e) => {
    e.preventDefault();
    const result = await axios.post('/api/auth/logout');
    if (result.status == 200) {
      router.push('/auth/login');
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storeTheme = localStorage.getItem('theme');
      themeChange(false);
      setIsDarkTheme(storeTheme == 'cupcake' ? false : true);
    }
    getProfile();
  }, []);

  return (
    <div className={className}>
      <label
        tabIndex={0}
        className="btn btn-ghost btn-circle avatar placeholder ring ring-primary ring-offset-base-100 ring-offset-0"
      >
        <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
          <span className="text-2xl">{user.name.charAt(0)}</span>
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 fixed z-10"
      >
        <li>
          <button
            className="justify-between"
            onClick={() => window.MODAL_PROFILE.showModal()}
          >
            Ver Perfil
            <span className="badge badge-ghost">{user.username}</span>
          </button>
        </li>
        <li>
          <button onClick={() => window.MODAL_SETTING.showModal()}>
            Ajustes
          </button>
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

      <Modal btnCLoseX id="PROFILE">
        <div className="text-center border-b-2 border-primary p-2 mb-6">
          <h3 className="font-bold text-lg uppercase">MI Perfil</h3>
        </div>
        <div className="h-max border-2 border-primary rounded p-4 my-4">
          <div className="-mt-8">
            <h1 className="text-md border-x-2 border-primary rounded w-max bg-base-100 px-4">
              {`${user.name} ${user.lastname}`}
            </h1>
          </div>
          <label className="label justify-start">
            <span className="label-text text-base text-md">Usuario:</span>
            <span className="label-text text-base text-md font-medium ml-2">
              {user.username}
            </span>
          </label>

          <label className="label justify-start">
            <span className="label-text text-base text-md">Correo:</span>
            <span className="label-text text-base text-md font-medium ml-2">
              {user.email}
            </span>
          </label>

          <label className="label justify-start">
            <span className="label-text text-base text-md">Cargo:</span>
            <span className="label-text text-base text-md font-medium ml-2">
              {user.position}
            </span>
          </label>
        </div>
      </Modal>
    </div>
  );
};
