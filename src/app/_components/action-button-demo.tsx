'use client';

import { useState } from 'react';
import { ActionButton } from '@/shared/components/ui/action-button';

/**
 * Demo del ActionButton: aquí vive el estado de carga (useState),
 * por eso este archivo sí lleva 'use client'.
 */
export function ActionButtonDemo() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <ActionButton
        label={isLoading ? 'Descargando...' : 'Descargar sílabo'}
        badgeText="PDF"
        isLoading={isLoading}
        onClick={handleDownload}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        }
      />
      <ActionButton label="Secundario" variant="secondary" size="sm" />
      <ActionButton label="Contorno" variant="outline" size="sm" />
      <ActionButton label="Fantasma" variant="ghost" size="sm" />
    </div>
  );
}
