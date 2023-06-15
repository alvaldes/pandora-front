'use client';
import ThemeToggle from '@/app/components/ThemeToggle';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

const LoginPage = () => {
  const router = useRouter();
  const username = useRef('');
  const password = useRef('');
  // const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const OnSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post('/api/auth/login', {
      username: username.current,
      password: password.current,
    });
    if (result.status == 200) {
      router.push('/');
    }
  };

  return (
    <section className="bg-base-300">
      <div className="flex">
        <ThemeToggle properties="absolute top-2 right-5 h-14 w-14"></ThemeToggle>
      </div>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 text-primary-content">
        <Link
          href="/inicio"
          className="flex items-center mb-6 text-2xl font-semibold"
        >
          <Image
            className="w-8 h-8 mr-2"
            src="/pandora.png"
            alt="logo"
            width={300}
            height={300}
          />
          Pandora
        </Link>
        <div className="card w-full bg-base-100 md:mt-0 sm:max-w-md xl:p-0">
          <div className="card-body p-6 space-y-4 md:space-y-6 sm:p-8">
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={OnSubmit}
            >
              <div className="form-control w-full max-w-x">
                <label className="label" htmlFor="username">
                  <span className="label-text">Usuario*</span>
                </label>
                <input
                  type="text"
                  placeholder="acpandora"
                  onChange={(e) => (username.current = e.target.value)}
                  name="username"
                  id="username"
                  className="input input-bordered w-full"
                  required={true}
                />
              </div>
              <div>
                <label className="label" htmlFor="password">
                  <span className="label-text">Contraseña*</span>
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => (password.current = e.target.value)}
                  name="password"
                  id="password"
                  className="input input-bordered w-full"
                  required={true}
                />
                {/* <button onClick={togglePasswordVisiblity}>
                  {passwordShown ? 'Hide' : 'Show'}
                </button> */}
              </div>
              <label className="cursor-pointer label justify-start w-fit">
                <input
                  type="checkbox"
                  className="checkbox checkbox-accent checkbox-sm"
                  id="remember"
                  aria-describedby="remember"
                />
                <span className="label-text text-base pl-3">Remember me</span>
              </label>
              <div className="card-actions">
                <button type="submit" className="btn btn-primary w-full">
                  Iniciar Sesión
                </button>
              </div>
              <p className="text-center text-sm font-light text-primary-content text-opacity-50">
                En caso de problemas contacte a:{' '}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  soporte.cujae.edu.cu
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
