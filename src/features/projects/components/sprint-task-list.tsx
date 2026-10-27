'use client';

import { useState } from 'react';

interface SprintTask {
  description: string;
  isDone: boolean;
}

interface SprintTaskListProps {
  tasks: SprintTask[];
}

/**
 * Lista de tareas de un sprint que se pueden marcar y desmarcar.
 * Lleva 'use client' porque guarda qué tareas están hechas con useState.
 * El acordeón que la contiene sigue siendo Server Component.
 */
export function SprintTaskList({ tasks }: SprintTaskListProps) {
  // Estado inicial: el isDone que viene de los datos de cada tarea
  const [doneTasks, setDoneTasks] = useState(tasks.map((task) => task.isDone));

  // Marca o desmarca la tarea en la posición index
  const toggleTask = (index: number) => {
    setDoneTasks(doneTasks.map((isDone, i) => (i === index ? !isDone : isDone)));
  };

  return (
    <ul className="space-y-2 text-sm">
      {tasks.map((task, index) => {
        const isDone = doneTasks[index];

        return (
          <li key={`${task.description}-${index}`}>
            <label className="flex cursor-pointer items-start gap-2">
              {/* Checkbox nativo oculto visualmente pero accesible con teclado */}
              <input
                type="checkbox"
                className="peer sr-only"
                checked={isDone}
                onChange={() => toggleTask(index)}
              />
              <span
                aria-hidden="true"
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-primary ${
                  isDone
                    ? 'bg-success text-success-content'
                    : 'border border-[#cecfd4] text-base-content/40'
                }`}
              >
                {isDone ? '✓' : ''}
              </span>
              <span className={isDone ? 'text-base-content/60 line-through' : ''}>
                {task.description}
              </span>
            </label>
          </li>
        );
      })}
    </ul>
  );
}
