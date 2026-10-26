interface UserAvatarProps {
  name: string;
  role: string;
  program?: string;
  avatarUrl: string;
  isOnline?: boolean;
  locationText?: string;
  size?: 'sm' | 'md' | 'lg';
}

// Diccionario interno: tamaño -> ancho de la foto y tamaño del texto de iniciales
const sizeClasses = {
  sm: 'w-10 text-sm',
  md: 'w-14 text-lg',
  lg: 'w-20 text-2xl',
};

/**
 * Avatar con anillo Azul Icesi, indicador de presencia, nombre, rol y ubicación.
 * Server Component: solo muestra datos, no necesita 'use client'.
 */
export function UserAvatar({
  name,
  role,
  program,
  avatarUrl,
  isOnline = false,
  locationText,
  size = 'md',
}: UserAvatarProps) {
  // Fallback tipográfico: iniciales del nombre si no hay foto
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div className="flex items-center gap-4">
      <div className={`avatar ${isOnline ? 'online' : 'offline'}`}>
        <div
          className={`${sizeClasses[size]} rounded-full ring-2 ring-primary ring-offset-base-100 ring-offset-2`}
        >
          {avatarUrl ? (
            <img src={avatarUrl} alt={`Fotografía de perfil de ${name}`} />
          ) : (
            <span
              className="flex h-full w-full items-center justify-center bg-primary font-bold text-primary-content"
              aria-label={`Iniciales de ${name}`}
            >
              {initials}
            </span>
          )}
        </div>
      </div>

      <div className="min-w-0">
        {/* Nombre con el badge de rol al lado */}
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-bold text-base-content">{name}</p>
          <span className="badge badge-primary badge-xs font-semibold uppercase">{role}</span>
        </div>
        {program && <p className="text-xs text-base-content/70">{program}</p>}
        {locationText && (
          <p
            className={`mt-1 flex items-center gap-1.5 text-xs font-medium ${
              isOnline ? 'text-success' : 'text-base-content/50'
            }`}
          >
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-current" />
            {isOnline ? 'Disponible en' : 'Desconectado ·'} {locationText}
          </p>
        )}
      </div>
    </div>
  );
}
