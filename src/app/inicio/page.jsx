'use client';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const getProfile = async () => {
    const response = await axios.get('/api/profile');
    console.log(response);
  };

  const logout = async () => {
    const response = await axios.post('/api/auth/logout');
    if (result.status == 200) {
      router.push('/');
    }
  };

  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-between p-24">
      <div className="alert alert-success">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Bienvenido, esta es la página de inicio!</span>
      </div>
      <div className="flex gap-8">
        <Link className="btn btn-primary" href={'/auth/login'}>
          Iniciar Sesión
        </Link>
        {true ? (
          <>
            <button className="btn btn-error" onClick={logout}>
              Cerrar Sesión
            </button>
          </>
        ) : (
          <Link className="btn btn-primary" href={'/auth/login'}>
            Iniciar Sesión
          </Link>
        )}
      </div>
    </main>
  );
}
