'use client';

import { useState } from 'react';
import { AlertBanner } from '@/shared/components/ui/alert-banner';

/**
 * Demo del AlertBanner: maneja el clic del botón de acción con useState.
 */
export function AlertBannerDemo() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="mx-auto w-full max-w-xl space-y-3">
      <AlertBanner
        title="Periodo de Adición y Cancelación"
        description="Recuerda que el sistema Banner cerrará la inscripción el viernes a las 18:00 hrs."
        actionLabel="Ver Calendario"
        // Al hacer clic en "Ver Calendario" se muestra el mensaje de abajo
        onActionClick={() => setClicked(true)}
      />
      {clicked && (
        <p className="text-center text-sm text-base-content/70">Abriendo el calendario académico…</p>
      )}
    </div>
  );
}
