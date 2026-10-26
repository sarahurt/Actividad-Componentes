interface StudentTableRowProps {
  studentId: string;
  studentCode: string;
  fullName: string;
  program: string;
  avatarUrl: string;
  status: 'active' | 'inactive' | 'graduated';
  onViewGradesClick?: () => void;
}

// Diccionario interno: estado del estudiante -> clase del badge y texto visible
const statusBadges = {
  active: { className: 'badge-success', label: 'Activo' },
  inactive: { className: 'badge-neutral', label: 'Inactivo' },
  graduated: { className: 'badge-secondary', label: 'Egresado' },
};

/**
 * Fila de la tabla de directorio estudiantil.
 * Se renderiza como un <tr> puro para usarse dentro de un <tbody>.
 * No usa hooks, así que no necesita 'use client'.
 */
export function StudentTableRow({
  studentId,
  studentCode,
  fullName,
  program,
  avatarUrl,
  status,
  onViewGradesClick,
}: StudentTableRowProps) {
  const badge = statusBadges[status];

  return (
    <tr id={`student-${studentId}`} className="hover:bg-slate-50">
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-10 w-10 sm:h-12 sm:w-12">
              <img src={avatarUrl} alt={`Fotografía de ${fullName}`} />
            </div>
          </div>
          <div className="min-w-0">
            <p className="font-bold">{fullName}</p>
            <p className="font-mono text-xs text-base-content/60">{studentCode}</p>
            {/* En móvil el programa se muestra debajo del nombre */}
            <p className="text-xs text-base-content/70 sm:hidden">{program}</p>
          </div>
        </div>
      </td>
      <td className="hidden sm:table-cell">{program}</td>
      <td>
        <span className={`badge badge-sm ${badge.className}`}>{badge.label}</span>
      </td>
      <td className="text-right">
        <button
          type="button"
          onClick={onViewGradesClick}
          aria-label={`Ver notas de ${fullName}`}
          className="btn btn-ghost btn-xs text-primary"
        >
          Ver notas
        </button>
      </td>
    </tr>
  );
}
