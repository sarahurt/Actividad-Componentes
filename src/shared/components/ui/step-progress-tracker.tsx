interface StepItem {
  label: string;
  isCompleted: boolean;
  isCurrent?: boolean;
  stepNumber?: number | string;
}

interface StepProgressTrackerProps {
  steps: StepItem[];
}

/**
 * Línea de tiempo de hitos o sprints.
 * Server Component: daisyUI dibuja los conectores entre pasos con CSS.
 */
export function StepProgressTracker({ steps }: StepProgressTrackerProps) {
  // Con más de 4 hitos, en móvil se apilan en vertical
  const orientation = steps.length > 4 ? 'steps-vertical md:steps-horizontal' : 'steps-horizontal';

  return (
    <ul className={`steps ${orientation} w-full`} aria-label="Progreso de entregas">
      {steps.map((step, index) => {
        const isActive = step.isCompleted || step.isCurrent;
        const stateText = step.isCompleted ? 'completado' : step.isCurrent ? 'en curso' : 'pendiente';

        return (
          <li
            key={`${step.label}-${index}`}
            className={`step text-xs sm:text-sm ${isActive ? 'step-primary' : ''} ${step.isCurrent ? 'font-semibold text-primary' : ''}`}
            data-content={step.isCompleted ? '✓' : (step.stepNumber ?? index + 1)}
            aria-current={step.isCurrent ? 'step' : undefined}
          >
            {step.label}
            <span className="sr-only"> ({stateText})</span>
          </li>
        );
      })}
    </ul>
  );
}
