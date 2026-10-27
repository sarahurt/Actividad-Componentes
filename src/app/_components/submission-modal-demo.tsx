'use client';

import { useState } from 'react';
import { ActionButton } from '@/shared/components/ui/action-button';
import { SubmissionConfirmModal } from '@/shared/components/ui/submission-confirm-modal';

/**
 * Demo del modal: aquí vive el estado isOpen y la respuesta del usuario.
 */
export function SubmissionModalDemo() {
  // Controla si el modal está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);
  // Guarda el mensaje que se muestra después de confirmar o cancelar
  const [result, setResult] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Este botón abre el modal */}
      <ActionButton label="Enviar entrega del Taller 3" onClick={() => setIsOpen(true)} />
      {result && <p className="text-sm text-base-content/70">{result}</p>}
      <SubmissionConfirmModal
        isOpen={isOpen}
        assignmentName="taller3-componentes-daisyui.zip"
        onConfirm={() => {
          setIsOpen(false);
          setResult('Entrega enviada correctamente.');
        }}
        onCancel={() => {
          setIsOpen(false);
          setResult('Envío cancelado.');
        }}
      />
    </div>
  );
}
