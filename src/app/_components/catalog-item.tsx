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
        <h3 className="flex items-center gap-3 text-base font-bold sm:text-lg">
          <span className="badge badge-primary font-mono">{number}</span>
          {name}
        </h3>
        <div>{children}</div>
      </div>
    </article>
  );
}
