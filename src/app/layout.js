'use client';
import { SessionProvider } from 'next-auth/react';
import './globals.css';

// export const metadata = {
//   title: 'Pandora',
//   description: 'Sistema de Gestión de Planes de Resultados de los Profesores',
// };

export default function RootLayout({ children, session }) {
  return (
    <html lang="es">
      <body>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
