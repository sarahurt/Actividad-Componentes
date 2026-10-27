'use client';

import { useEffect } from 'react';

interface SubmissionConfirmModalProps {
  isOpen: boolean;
  assignmentName: string;
  warningMessage?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const MODAL_ID = 'submission_confirm_modal';

/**
 * Modal de confirmación de entrega con <dialog> nativo + clase modal de daisyUI.
 * Necesita 'use client' porque usa useEffect y el método showModal() del navegador.
 */
export function SubmissionConfirmModal({
  isOpen,
  assignmentName,
  warningMessage = 'Una vez enviada, la entrega no se puede reemplazar ni editar.',
  onConfirm,
  onCancel,
}: SubmissionConfirmModalProps) {
  // Sincroniza la prop isOpen con el estado nativo del <dialog>
  useEffect(() => {
    const modal = document.getElementById(MODAL_ID) as HTMLDialogElement | null;
    if (!modal) return;

    if (isOpen && !modal.open) {
      modal.showModal();
    } else if (!isOpen && modal.open) {
      modal.close();
    }
  }, [isOpen]);

  return (
    <dialog
      id={MODAL_ID}
      className="modal"
      aria-labelledby={`${MODAL_ID}_title`}
      // La tecla Escape dispara el evento cancel: avisamos al componente padre
      onCancel={(e) => {
        e.preventDefault();
        onCancel();
      }}
    >
      <div className="modal-box bg-base-100 border border-[#cecfd4] shadow-xl">
        <div className="flex items-start gap-4">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </span>
          <div className="min-w-0">
            <h3 id={`${MODAL_ID}_title`} className="text-lg font-bold text-base-content">
              ¿Confirmar entrega definitiva?
            </h3>
            <p className="mt-2 text-sm text-base-content/70">
              Vas a enviar <span className="font-semibold text-base-content break-words">{assignmentName}</span>.
            </p>
            <p className="mt-1 text-sm text-base-content/70">{warningMessage}</p>
          </div>
        </div>

        <div className="modal-action">
          {/* Cancelar: avisa al padre para que cierre el modal */}
          <button type="button" onClick={onCancel} className="btn btn-sm btn-ghost">
            Cancelar
          </button>
          {/* Enviar: avisa al padre que el usuario confirmó la entrega */}
          <button type="button" onClick={onConfirm} className="btn btn-sm btn-primary" autoFocus>
            Enviar definitivamente
          </button>
        </div>
      </div>

      {/* Fondo interactivo: clic afuera cancela */}
      <div className="modal-backdrop">
        <button type="button" onClick={onCancel} aria-label="Cerrar">
          cerrar
        </button>
      </div>
    </dialog>
  );
}
