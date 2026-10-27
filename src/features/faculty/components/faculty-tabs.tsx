'use client';

import { useState } from 'react';

interface FacultyTabContent {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface FacultyTabsProps {
  tabs: FacultyTabContent[];
}

/**
 * Sub-panel de pestañas del perfil docente.
 * Lleva 'use client' porque guarda la pestaña activa con useState.
 * El contenido de cada pestaña llega ya renderizado desde el servidor.
 */
export function FacultyTabs({ tabs }: FacultyTabsProps) {
  // Guarda cuál pestaña está abierta (empieza con la primera)
  const [activeId, setActiveId] = useState(tabs[0]?.id ?? '');
  const activeTab = tabs.find((tab) => tab.id === activeId);

  return (
    <div className="space-y-4">
      <div role="tablist" className="tabs tabs-box bg-slate-100 rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={tab.id === activeId}
            // Al hacer clic, esta pestaña pasa a ser la activa
            onClick={() => setActiveId(tab.id)}
            className={`tab flex-1 text-xs sm:text-sm ${tab.id === activeId ? 'tab-active text-primary font-semibold' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="text-sm">
        {activeTab?.content}
      </div>
    </div>
  );
}
