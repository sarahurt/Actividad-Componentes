interface ToastNotificationProps {
  title: string;
  message: string;
  variant?: 'success' | 'info' | 'warning' | 'error';
  onClose?: () => void;
}

// Borde de la alerta según la variante (fondo blanco con acento semántico)
const variantClasses = {
  success: 'alert-success',
  info: 'alert-info',
  warning: 'alert-warning',
  error: 'alert-error',
};

// Círculo del icono con el color de la variante
const iconCircleClasses = {
  success: 'bg-success text-success-content',
  info: 'bg-info text-info-content',
  warning: 'bg-warning text-warning-content',
  error: 'bg-error text-error-content',
};

const iconPaths = {
  success: 'M5 13l4 4L19 7',
  info: 'M12 8h.01M11 12h1v4h1',
  warning: 'M12 8v4m0 4h.01',
  error: 'M6 18L18 6M6 6l12 12',
};

/**
 * Notificación flotante (arriba a la derecha).
 * Es un componente controlado: quien lo usa decide si se muestra y
 * le pasa onClose. Como no usa hooks, no necesita 'use client'.
 */
export function ToastNotification({
  title,
  message,
  variant = 'success',
  onClose,
}: ToastNotificationProps) {
  return (
    <div className="toast toast-top toast-end z-50">
      <div
        role="status"
        aria-live="polite"
        className={`alert alert-outline ${variantClasses[variant]} bg-base-100 text-base-content shadow-md rounded-2xl max-w-sm whitespace-normal`}
      >
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${iconCircleClasses[variant]}`}
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d={iconPaths[variant]}
            />
          </svg>
        </span>
        <div className="min-w-0">
          <h3 className="font-bold">{title}</h3>
          <p className="text-xs text-base-content/70 break-words">{message}</p>
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar notificación"
            className="btn btn-xs btn-ghost btn-circle"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
