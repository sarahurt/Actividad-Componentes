interface CatalogItemProps {
  number: string;
  name: string;
  children: React.ReactNode;
}

/**
 * Bloque del catálogo: número y nombre del componente, y debajo el componente.
 * Server Component (solo estructura visual).
 */
export function CatalogItem({ number, name, children }: CatalogItemProps) {
  return (
    <article className="card bg-base-100 border border-[#cecfd4] shadow-sm">
      <div className="card-body gap-4">
        <h3 className="text-base font-semibold sm:text-lg [-webkit-text-stroke:0.45px]">
          {number}. {name}
        </h3>
        <div className="font-normal">{children}</div>
      </div>
    </article>
  );
}
