'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Esta es la pagina de Inicio
      {/* <Link className='' href={""} */}
      {session?.accessToken ? (
        <>
          <button onClick={() => signOut()}>
            {console.log({ session })}
            Cerrar Sesión: {session.user.name}
          </button>
        </>
      ) : (
        <button onClick={() => signIn()}>Iniciar Sesión</button>
      )}
    </main>
  );
}
