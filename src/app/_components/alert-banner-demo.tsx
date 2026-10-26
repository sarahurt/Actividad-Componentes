'use client';

import { useState } from 'react';
import { AlertBanner } from '@/shared/components/ui/alert-banner';

/**
 * Demo del AlertBanner: maneja el clic del botón de acción con useState.
 */
export function AlertBannerDemo() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="space-y-3">
      <AlertBanner
        title="Matrícula abierta para 2027-1"
        description="Revisa tu turno de inscripción y confirma tus asignaturas antes del 15 de noviembre."
        actionLabel="Ver calendario"
        onActionClick={() => setClicked(true)}
      />
      <AlertBanner
        type="warning"
        title="Mantenimiento programado"
        description="La plataforma no estará disponible el sábado de 2:00 a 4:00 a.m."
      />
      {clicked && (
        <p className="text-sm text-base-content/70">Abriendo el calendario académico…</p>
      )}
    </div>
  );
}
