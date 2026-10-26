type BadgeStatus = 'active' | 'pending' | 'danger' | 'neutral';

interface StatusBadgeProps {
  status: BadgeStatus;
  label: string;
  hasPulse?: boolean;
  className?: string;
}

// Diccionario interno: estado semántico -> color tonal del tema icesi
const statusClasses = {
  active: 'badge-success', // Verde Icesi
  pending: 'badge-secondary', // Morado Icesi (en revisión)
  danger: 'badge-accent', // Naranja Icesi
  neutral: 'badge-neutral',
};

/**
 * Insignia de estado en forma de píldora tonal con punto luminoso.
 * Componente 100% visual: Server Component, sin 'use client'.
 */
export function StatusBadge({ status, label, hasPulse = true, className = '' }: StatusBadgeProps) {
  return (
    <span
      className={`badge badge-soft ${statusClasses[status]} inline-flex items-center gap-2 rounded-full border border-current/20 px-3 py-3 text-xs font-semibold ${className}`}
    >
      <span
        aria-hidden="true"
        className={`w-2 h-2 rounded-full bg-current ${hasPulse ? 'animate-pulse' : ''}`}
      />
      {label}
    </span>
  );
}
