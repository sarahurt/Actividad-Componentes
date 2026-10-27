import { FacultyTabs } from './faculty-tabs';

interface FacultyTabContent {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface FacultyProfileCardProps {
  fullName: string;
  academicRole: string;
  department: string;
  avatarUrl: string;
  tabs: FacultyTabContent[];
  onContactClick?: () => void;
}

/**
 * Tarjeta de presentación del docente.
 * La tarjeta exterior no usa hooks; solo el panel de pestañas (FacultyTabs) es cliente.
 */
export function FacultyProfileCard({
  fullName,
  academicRole,
  department,
  avatarUrl,
  tabs,
  onContactClick,
}: FacultyProfileCardProps) {
  return (
    <article className="card bg-base-100 border border-[#cecfd4] rounded-2xl shadow-sm w-full">
      <div className="card-body gap-5">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
          <div className="avatar">
            <div className="w-20 rounded-full ring-2 ring-primary ring-offset-base-100 ring-offset-2">
              <img src={avatarUrl} alt={`Fotografía de perfil de ${fullName}`} />
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-bold text-base-content">{fullName}</h3>
            <p className="text-sm font-semibold text-primary">{academicRole}</p>
            <p className="text-xs text-base-content/60">{department}</p>
          </div>
          {/* El botón "Contactar" solo aparece si se le pasa la función onContactClick */}
          {onContactClick && (
            <button
              type="button"
              onClick={onContactClick}
              className="btn btn-xs btn-outline btn-primary"
            >
              Contactar
            </button>
          )}
        </div>

        <FacultyTabs tabs={tabs} />
      </div>
    </article>
  );
}
