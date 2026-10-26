import Link from 'next/link';

interface CourseCardProps {
  courseCode: string;
  title: string;
  instructor: string;
  room: string;
  credits: number;
  progressPercentage: number;
  courseUrl: string;
  syllabusUrl?: string;
}

/**
 * Tarjeta de asignatura para la grilla del catálogo.
 * Server Component: solo muestra datos y navega con <Link>.
 */
export function CourseCard({
  courseCode,
  title,
  instructor,
  room,
  credits,
  progressPercentage,
  courseUrl,
  syllabusUrl,
}: CourseCardProps) {
  // Normalizamos el progreso para que siempre quede entre 0 y 100
  const progress = Math.min(100, Math.max(0, Math.round(progressPercentage)));

  return (
    <article className="card bg-base-100 shadow-sm border border-[#cecfd4] w-full overflow-hidden">
      {/* Cabecera con el degradado institucional Azul -> Morado */}
      <header className="bg-gradient-to-r from-[#5454e9] to-[#865cf0] px-6 py-4 text-primary-content">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-sm font-semibold tracking-wide">{courseCode}</span>
          <span className="badge badge-outline badge-sm text-primary-content">
            {credits} {credits === 1 ? 'crédito' : 'créditos'}
          </span>
        </div>
      </header>

      <div className="card-body gap-3">
        <h3 className="card-title text-base-content">{title}</h3>

        <dl className="grid grid-cols-1 gap-1 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-base-content/60">Docente</dt>
            <dd className="font-medium">{instructor}</dd>
          </div>
          <div>
            <dt className="text-base-content/60">Salón</dt>
            <dd className="font-medium">{room}</dd>
          </div>
        </dl>

        <div>
          <div className="mb-1 flex items-center justify-between text-xs text-base-content/70">
            <span>Avance del semestre</span>
            <span className="font-semibold text-primary">{progress}%</span>
          </div>
          <progress
            className="progress progress-primary w-full"
            value={progress}
            max={100}
            aria-label={`Avance del semestre en ${title}: ${progress}%`}
          />
        </div>

        <div className="card-actions mt-2 justify-end">
          {syllabusUrl && (
            <Link href={syllabusUrl} className="btn btn-sm btn-ghost">
              Ver sílabo
            </Link>
          )}
          <Link href={courseUrl} className="btn btn-sm btn-primary">
            Entrar al Aula
          </Link>
        </div>
      </div>
    </article>
  );
}
