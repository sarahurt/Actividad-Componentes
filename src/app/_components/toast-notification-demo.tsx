'use client';

import { useState } from 'react';
import { ActionButton } from '@/shared/components/ui/action-button';
import { ToastNotification } from '@/shared/components/ui/toast-notification';

/**
 * Demo del Toast: el estado (mostrar/ocultar) y el temporizador viven aquí.
 */
export function ToastNotificationDemo() {
  const [isVisible, setIsVisible] = useState(false);

  const showToast = () => {
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 5000);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <ActionButton label="Enviar entrega del laboratorio" onClick={showToast} />
      <p className="text-xs text-base-content/60">La notificación aparece arriba a la derecha.</p>
      {isVisible && (
        <ToastNotification
          title="Entrega recibida"
          message="Tu laboratorio fue confirmado. Commit: 7f3a9c2"
          onClose={() => setIsVisible(false)}
        />
      )}
    </div>
  );
}
