import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Componentes daisyUI Icesi',
    default: 'Componentes daisyUI Icesi',
  },
  description: 'Biblioteca de componentes con Tailwind CSS v4 y daisyUI 5 para la Universidad Icesi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" data-theme="icesi">
      <body className="min-h-screen bg-base-200 text-base-content">{children}</body>
    </html>
  );
}
