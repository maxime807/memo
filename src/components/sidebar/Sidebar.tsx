import { useState } from 'react';
import { SidebarHeader } from './SidebarHeader';
import { SidebarInfoTab } from './SidebarInfoTab';
import { SidebarContactTab } from './SidebarContactTab';
import { SidebarFooter } from './SidebarFooter';

export function Sidebar() {
  const [activeTab, setActiveTab] = useState<'info' | 'message'>('info');

  return (
    <aside className="w-full md:w-[440px] md:h-full flex flex-col shrink-0">
      {/* Carte principale */}
      <div className="bg-surface flex-1 flex flex-col overflow-hidden relative border border-borderline/80">
        <SidebarHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'info' ? <SidebarInfoTab /> : <SidebarContactTab />}
      </div>

      {/* Barre inférieure */}
      <SidebarFooter />
    </aside>
  );
}
