'use client';

import { useState } from 'react';
import { FacultyProfileCard } from '@/features/faculty/components/faculty-profile-card';

/**
 * Demo del perfil docente: maneja el clic de "Contactar" con useState.
 */
export function FacultyProfileDemo() {
  // Guarda si ya se hizo clic en "Contactar"
  const [contacted, setContacted] = useState(false);

  return (
    <div className="mx-auto w-full max-w-xl space-y-3">
      <FacultyProfileCard
        fullName="Kevin Rodríguez"
        academicRole="Profesor de Hora Cátedra"
        department="Departamento de Computación y Sistemas Inteligentes"
        avatarUrl="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=160"
        onContactClick={() => setContacted(true)}
        tabs={[
          {
            id: 'asignaturas',
            label: 'Asignaturas',
            content: (
              <ul className="space-y-2">
                <li className="flex justify-between gap-2">
                  <span>Desarrollo de Entornos Digitales Web</span>
                  <span className="badge badge-soft badge-primary badge-sm">09798</span>
                </li>
                <li className="flex justify-between gap-2">
                  <span>Computación en Internet III</span>
                  <span className="badge badge-soft badge-primary badge-sm">09811</span>
                </li>
              </ul>
            ),
          },
          {
            id: 'horarios',
            label: 'Horarios',
            content: (
              <ul className="space-y-2">
                <li className="flex justify-between gap-2">
                  <span>Lunes</span>
                  <span className="text-base-content/70">2:00 – 4:00 p.m. · Edificio L</span>
                </li>
                <li className="flex justify-between gap-2">
                  <span>Jueves</span>
                  <span className="text-base-content/70">10:00 – 11:00 a.m. · Virtual</span>
                </li>
              </ul>
            ),
          },
          {
            id: 'publicaciones',
            label: 'Publicaciones',
            content: (
              <ul className="list-disc space-y-1 pl-5">
                <li>Arquitecturas por features en Next.js (2026)</li>
                <li>Diseño de APIs seguras con NestJS (2025)</li>
              </ul>
            ),
          },
        ]}
      />
      {contacted && (
        <p className="text-center text-sm text-base-content/70">Abriendo el formulario de contacto…</p>
      )}
    </div>
  );
}
