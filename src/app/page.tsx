import { StatusBadge } from '@/shared/components/ui/status-badge';
import { UserAvatar } from '@/shared/components/ui/user-avatar';
import { StepProgressTracker } from '@/shared/components/ui/step-progress-tracker';
import { CourseCard } from '@/features/courses/components/course-card';
import { AcademicAppNavbar } from '@/shared/components/ui/academic-app-navbar';
import { SprintAccordionPanel } from '@/features/projects/components/sprint-accordion-panel';
import { CatalogItem } from './_components/catalog-item';
import { ActionButtonDemo } from './_components/action-button-demo';
import { AlertBannerDemo } from './_components/alert-banner-demo';
import { ToastNotificationDemo } from './_components/toast-notification-demo';
import { StudentTableDemo } from './_components/student-table-demo';
import { SubmissionModalDemo } from './_components/submission-modal-demo';
import { FacultyProfileDemo } from './_components/faculty-profile-demo';

export const metadata = {
  title: 'Catálogo de componentes',
};

/**
 * Página del catálogo: los componentes se organizan por nivel
 * (Átomos, Moléculas y Organismos), 4 por nivel.
 * Cada componente lleva su número, su nombre y debajo el componente.
 */
export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-5xl space-y-12 px-4 py-8">
      <h1 className="text-2xl font-bold sm:text-3xl [-webkit-text-stroke:0.8px]">Componentes con daisyUI</h1>

      <section className="space-y-6" aria-labelledby="nivel-1">
        <h2 id="nivel-1" className="border-b border-[#cecfd4] pb-2 text-xl font-bold text-primary sm:text-2xl [-webkit-text-stroke:0.7px]">
          Nivel 1: Átomos
        </h2>

        <CatalogItem number="01" name="Botón de Acción con Estado de Carga y Badge">
          <ActionButtonDemo />
        </CatalogItem>

        <CatalogItem number="02" name="Insignia de Estado Tonal con Indicador Luminoso">
          <div className="flex flex-wrap justify-center gap-2">
            <StatusBadge status="active" label="Matriculado Activo" />
            <StatusBadge status="pending" label="En Revisión Previa" />
            <StatusBadge status="danger" label="Requisito Pendiente" />
          </div>
        </CatalogItem>

        <CatalogItem number="03" name="Banner de Alerta Informativa Institucional">
          <AlertBannerDemo />
        </CatalogItem>

        <CatalogItem number="04" name="Avatar de Usuario con Anillo de Presencia y Rol">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <div className="rounded-2xl border border-[#cecfd4] bg-base-100 px-6 py-4 shadow-sm">
              <UserAvatar
                name="Valeria Cifuentes"
                role="Monitora"
                program="Ingeniería Telemática y TIC · 6to Semestre"
                avatarUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160"
                isOnline
                locationText="Sala 3, Edificio L"
              />
            </div>
            <div className="rounded-2xl border border-[#cecfd4] bg-base-100 px-6 py-4 shadow-sm">
              <UserAvatar
                name="Kevin Rodríguez"
                role="Docente"
                program="Diseño de Medios Interactivos"
                avatarUrl=""
                locationText="Edificio D"
              />
            </div>
          </div>
        </CatalogItem>
      </section>

      <section className="space-y-6" aria-labelledby="nivel-2">
        <h2 id="nivel-2" className="border-b border-[#cecfd4] pb-2 text-xl font-bold text-primary sm:text-2xl [-webkit-text-stroke:0.7px]">
          Nivel 2: Moléculas
        </h2>
        <CatalogItem number="08" name="Tarjeta de Asignatura con Barra de Progreso">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <CourseCard
              courseCode="09798"
              title="Desarrollo de Entornos Digitales Web"
              instructor="Kevin Rodríguez"
              room="Edificio L · 302"
              credits={3}
              progressPercentage={68}
              courseUrl="/cursos/entornos-web"
              syllabusUrl="/cursos/entornos-web/silabo"
            />
            <CourseCard
              courseCode="09512"
              title="Diseño de Interacción"
              instructor="Laura Méndez"
              room="Edificio D · 104"
              credits={4}
              progressPercentage={45}
              courseUrl="/cursos/interaccion"
            />
          </div>
        </CatalogItem>

        <CatalogItem number="10" name="Notificación Flotante Estilo Toast Institucional">
          <ToastNotificationDemo />
        </CatalogItem>

        <CatalogItem number="12" name="Fila de Directorio Estudiantil con Menú de Acciones">
          <StudentTableDemo />
        </CatalogItem>

        <CatalogItem number="13" name="Rastreador de Hitos de Entrega por Pasos">
          <StepProgressTracker
            steps={[
              { label: 'Propuesta', isCompleted: true },
              { label: 'Prototipo', isCompleted: true },
              { label: 'Sprint 1', isCompleted: false, isCurrent: true },
              { label: 'Sprint 2', isCompleted: false },
              { label: 'Entrega final', isCompleted: false },
            ]}
          />
        </CatalogItem>
      </section>

      <section className="space-y-6" aria-labelledby="nivel-3">
        <h2 id="nivel-3" className="border-b border-[#cecfd4] pb-2 text-xl font-bold text-primary sm:text-2xl [-webkit-text-stroke:0.7px]">
          Nivel 3: Organismos
        </h2>
        <CatalogItem number="16" name="Barra de Navegación de Aplicación con Menú de Usuario">
          <AcademicAppNavbar
            brandName="Portal Académico Icesi"
            user={{
              name: 'Valeria Cifuentes',
              avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96',
              notificationsCount: 3,
              currentTerm: 'Periodo 2026-2',
            }}
          />
        </CatalogItem>

        <CatalogItem number="18" name="Diálogo Modal de Confirmación de Entrega">
          <SubmissionModalDemo />
        </CatalogItem>

        <CatalogItem number="19" name="Tarjeta de Perfil Docente con Pestañas y Horarios">
          <FacultyProfileDemo />
        </CatalogItem>

        <CatalogItem number="20" name="Tablero de Entregables de Sprint en Acordeón Colapsable">
          <SprintAccordionPanel
            sprints={[
              {
                sprintNumber: 1,
                title: 'Estructura por features y tema icesi',
                status: 'completed',
                tasks: [
                  { description: 'Configurar Tailwind v4 y daisyUI 5', isDone: true },
                  { description: 'Crear el tema institucional icesi', isDone: true },
                ],
              },
              {
                sprintNumber: 2,
                title: 'Componentes átomos y moléculas',
                status: 'in_progress',
                isDefaultOpen: true,
                tasks: [
                  { description: 'ActionButton con estado de carga', isDone: true },
                  { description: 'CourseCard con barra de progreso', isDone: true },
                  { description: 'Toast de confirmación de entrega', isDone: false },
                ],
              },
              {
                sprintNumber: 3,
                title: 'Organismos e integración con Login',
                status: 'pending',
                tasks: [
                  { description: 'Navbar con menú de usuario', isDone: false },
                  { description: 'Modal de confirmación de entrega', isDone: false },
                ],
              },
            ]}
          />
        </CatalogItem>
      </section>
    </main>
  );
}
