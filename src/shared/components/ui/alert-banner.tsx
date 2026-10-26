interface AlertBannerProps {
  title: string;
  description: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  actionLabel?: string;
  onActionClick?: () => void;
}

// Diccionario interno: tipo de alerta -> clase semántica de daisyUI
const typeClasses = {
  info: 'alert-info',
  success: 'alert-success',
  warning: 'alert-warning',
  error: 'alert-error',
};

// Color del botón de acción según el tipo (azul para info, como el resto del banner)
const actionClasses = {
  info: 'btn-info',
  success: 'btn-success',
  warning: 'btn-warning',
  error: 'btn-error',
};

// Trazo SVG del icono según el tipo de alerta
const iconPaths = {
  info: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  success: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  warning:
    'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
  error: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
};

/**
 * Banner de aviso institucional.
 * No tiene estado propio, por lo que se mantiene sin 'use client'.
 */
export function AlertBanner({
  title,
  description,
  type = 'info',
  actionLabel,
  onActionClick,
}: AlertBannerProps) {
  return (
    <div
      role="alert"
      aria-live="polite"
      className={`alert alert-soft ${typeClasses[type]} alert-vertical sm:alert-horizontal w-full rounded-2xl border border-current/30 px-5 py-4 text-left`}
    >
      {/* Icono dentro de un contenedor tonal redondeado */}
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-current/10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPaths[type]} />
        </svg>
      </span>
      <div>
        {/* Título en color base para cumplir contraste WCAG AA (el amarillo sobre blanco no lo cumple) */}
        <h3 className="font-bold text-base-content">{title}</h3>
        <p className="text-xs text-base-content/70">{description}</p>
      </div>
      {actionLabel && (
        <button type="button" onClick={onActionClick} className={`btn btn-xs btn-outline ${actionClasses[type]} bg-base-100`}>
          {actionLabel}
        </button>
      )}
    </div>
  );
}
