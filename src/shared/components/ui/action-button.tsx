interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: React.ReactNode;
  badgeText?: string;
  isLoading?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

// Diccionarios internos: cada valor de la prop se traduce a clases semánticas de daisyUI
const variantClasses = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outline: 'btn-outline btn-primary',
  ghost: 'btn-ghost',
};

const sizeClasses = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
};

/**
 * Botón base reutilizable con icono, badge informativo y estado de carga.
 * No usa hooks ni estado propio, por eso no necesita 'use client':
 * el componente que lo use es quien maneja el onClick y el isLoading.
 */
export function ActionButton({
  label,
  icon,
  badgeText,
  isLoading = false,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled,
  className = '',
  ...props
}: ActionButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      className={`btn ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {isLoading ? (
        <span className="loading loading-spinner loading-xs" aria-hidden="true" />
      ) : (
        icon
      )}
      <span>{label}</span>
      {badgeText && <span className="badge badge-secondary badge-sm">{badgeText}</span>}
    </button>
  );
}
