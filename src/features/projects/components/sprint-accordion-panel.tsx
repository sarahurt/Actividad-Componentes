import { SprintTaskList } from './sprint-task-list';

interface SprintTask {
  description: string;
  isDone: boolean;
}

interface SprintPhase {
  sprintNumber: number;
  title: string;
  status: 'completed' | 'in_progress' | 'pending';
  tasks: SprintTask[];
  isDefaultOpen?: boolean;
}

interface SprintAccordionPanelProps {
  sprints: SprintPhase[];
}

// Diccionario interno: estado del sprint -> clase del badge y texto visible
const statusBadges = {
  completed: { className: 'badge-success', label: 'Completado' }, // Verde Icesi
  in_progress: { className: 'badge-warning', label: 'En progreso' }, // Amarillo Icesi
  pending: { className: 'badge-outline', label: 'Pendiente' },
};

/**
 * Acordeón de sprints 100% CSS (radio inputs de daisyUI).
 * Server Component: abrir y cerrar no necesita JavaScript.
 * Solo la lista de tareas (SprintTaskList) es interactiva.
 */
export function SprintAccordionPanel({ sprints }: SprintAccordionPanelProps) {
  return (
    <div className="join join-vertical w-full bg-base-100">
      {sprints.map((sprint) => {
        const badge = statusBadges[sprint.status];
        const doneCount = sprint.tasks.filter((task) => task.isDone).length;

        return (
          <div
            key={sprint.sprintNumber}
            className="collapse collapse-arrow join-item border border-[#cecfd4]"
          >
            {/* Truco de daisyUI: un radio por sprint; al marcarlo se abre ese sprint y se cierran los demás (mismo name) */}
            <input
              type="radio"
              name="sprint-accordion"
              defaultChecked={sprint.isDefaultOpen}
              aria-label={`Sprint ${sprint.sprintNumber}: ${sprint.title}`}
            />
            <div className="collapse-title pr-10">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Sprint {sprint.sprintNumber}
                  </p>
                  <h3 className="font-bold text-base-content">{sprint.title}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-base-content/60">
                    {doneCount}/{sprint.tasks.length} tareas
                  </span>
                  <span className={`badge badge-sm ${badge.className}`}>{badge.label}</span>
                </div>
              </div>
            </div>
            <div className="collapse-content">
              <SprintTaskList tasks={sprint.tasks} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
