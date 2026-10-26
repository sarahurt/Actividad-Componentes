import { StatusBadge } from '@/shared/components/ui/status-badge';
import { UserAvatar } from '@/shared/components/ui/user-avatar';
import { CatalogItem } from './_components/catalog-item';
import { ActionButtonDemo } from './_components/action-button-demo';
import { AlertBannerDemo } from './_components/alert-banner-demo';

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
      <h1 className="text-2xl font-bold sm:text-3xl">Componentes con daisyUI</h1>

      <section className="space-y-6" aria-labelledby="nivel-1">
        <h2 id="nivel-1" className="border-b border-[#cecfd4] pb-2 text-xl font-bold text-primary sm:text-2xl">
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
        <h2 id="nivel-2" className="border-b border-[#cecfd4] pb-2 text-xl font-bold text-primary sm:text-2xl">
          Nivel 2: Moléculas
        </h2>
        {/* Aquí van los 4 componentes del Nivel 2 */}
      </section>

      <section className="space-y-6" aria-labelledby="nivel-3">
        <h2 id="nivel-3" className="border-b border-[#cecfd4] pb-2 text-xl font-bold text-primary sm:text-2xl">
          Nivel 3: Organismos
        </h2>
        {/* Aquí van los 4 componentes del Nivel 3 */}
      </section>
    </main>
  );
}
