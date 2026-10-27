import Link from 'next/link';

interface UserSessionData {
  name: string;
  avatarUrl: string;
  notificationsCount: number;
  currentTerm: string;
}

interface AcademicAppNavbarProps {
  brandName: string;
  user: UserSessionData;
}

/**
 * Barra de navegación principal del portal.
 * Server Component: el menú del usuario se abre con foco (tabIndex) usando
 * el dropdown de daisyUI, así que no necesita JavaScript en el cliente.
 */
export function AcademicAppNavbar({ brandName, user }: AcademicAppNavbarProps) {
  return (
    <header className="navbar bg-base-100 border-b border-[#cecfd4] rounded-box px-2 sm:px-4">
      <nav className="navbar-start gap-2 sm:gap-3" aria-label="Portal">
        {/* El logo lleva a la página de inicio (/) */}
        <Link href="/" className="btn btn-ghost px-2" aria-label={`Ir al inicio de ${brandName}`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-lg font-bold text-primary-content">
            I
          </span>
          <span className="hidden flex-col items-start leading-tight sm:flex">
            <span className="font-bold text-primary">{brandName}</span>
            <span className="text-xs font-normal text-base-content/60">{user.currentTerm}</span>
          </span>
        </Link>
        {/* En móvil solo se muestra el período académico como badge */}
        <span className="badge badge-outline badge-sm sm:hidden">{user.currentTerm}</span>
      </nav>

      <div className="navbar-end gap-1 sm:gap-2">
        {/* La campana lleva a la página de notificaciones */}
        <Link
          href="/notificaciones"
          className="btn btn-ghost btn-circle"
          aria-label={`Notificaciones: ${user.notificationsCount} sin leer`}
        >
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            {user.notificationsCount > 0 && (
              <span className="badge badge-xs badge-secondary indicator-item">
                {user.notificationsCount > 9 ? '9+' : user.notificationsCount}
              </span>
            )}
          </div>
        </Link>

        {/* Menú del usuario: se abre al hacer clic en el avatar (tabIndex le da foco) y se cierra al hacer clic afuera */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar online"
            aria-label={`Menú de ${user.name}`}
          >
            <div className="w-9 rounded-full">
              <img src={user.avatarUrl} alt={`Fotografía de perfil de ${user.name}`} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-lg border border-base-200"
          >
            <li className="menu-title">{user.name}</li>
            {/* Opciones del menú: cada una lleva a su página */}
            <li>
              <Link href="/perfil">Mi Cuenta</Link>
            </li>
            <li>
              <Link href="/preferencias">Preferencias</Link>
            </li>
            <div className="divider my-1"></div>
            <li>
              {/* Cerrar sesión lleva de vuelta al login */}
              <Link href="/login" className="text-error">
                Cerrar Sesión
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
