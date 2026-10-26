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
      <header>
        <h1 className="text-2xl font-bold sm:text-3xl">Componentes con daisyUI</h1>
        <p className="mt-1 text-sm text-base-content/70">
          Actividad semana 12 · Tailwind CSS v4 + daisyUI 5 · Tema institucional icesi
        </p>
      </header>

      <section className="space-y-6" aria-labelledby="nivel-1">
        <h2 id="nivel-1" className="border-b border-[#cecfd4] pb-2 text-xl font-bold text-primary sm:text-2xl">
          Nivel 1: Átomos
        </h2>
        <CatalogItem number="01" name="Botón de Acción con Estado de Carga y Badge">
          <ActionButtonDemo />
        </CatalogItem>

        <CatalogItem number="02" name="Insignia de Estado Tonal con Indicador Luminoso">
          <div className="flex flex-wrap gap-2">
            <StatusBadge status="active" label="Activo" />
            <StatusBadge status="pending" label="En revisión" />
            <StatusBadge status="danger" label="Vencido" />
            <StatusBadge status="neutral" label="Archivado" hasPulse={false} />
          </div>
        </CatalogItem>

        <CatalogItem number="03" name="Banner de Alerta Informativa Institucional">
          <AlertBannerDemo />
        </CatalogItem>

        <CatalogItem number="04" name="Avatar de Usuario con Anillo de Presencia y Rol">
          <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap">
            <UserAvatar
              name="Kevin Rodríguez"
              role="Docente"
              program="Diseño de Medios Interactivos"
              avatarUrl="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=160"
              isOnline
              locationText="Edificio L · 302"
            />
            <UserAvatar
              name="Valentina Rivas"
              role="Monitora"
              avatarUrl=""
              locationText="Laboratorio 2"
              size="sm"
            />
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
