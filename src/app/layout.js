// 'use client';
import './globals.css';

export const metadata = {
  title: 'Pandora',
  description: 'Sistema de Gestión de Planes de Resultados de los Profesores',
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="es" data-theme="dark">
      <body className="bg-base-100">{children}</body>
    </html>
  );
}
