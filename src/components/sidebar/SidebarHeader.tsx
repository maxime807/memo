import { LiveClock } from './LiveClock';

interface SidebarHeaderProps {
  activeTab: 'info' | 'message';
  setActiveTab: (tab: 'info' | 'message') => void;
}

export function SidebarHeader({ activeTab, setActiveTab }: SidebarHeaderProps) {
  return (
    <div className="h-[56px] sm:h-[64px] lg:h-[75px] px-4 sm:px-5 lg:px-8 flex items-center justify-between border-b border-borderline shrink-0 bg-surface">
      <LiveClock />
      <div className="flex items-center gap-4 sm:gap-6 text-xs font-semibold uppercase tracking-wider">
        <button
          onClick={() => setActiveTab('info')}
          className={`transition-colors py-2 relative cursor-pointer min-h-[44px] flex items-center ${
            activeTab === 'info' ? 'text-ink' : 'text-subtle hover:text-ink'
          }`}
        >
          Événement
          {activeTab === 'info' && (
            <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-ink" />
          )}
        </button>
        <button
          onClick={() => setActiveTab('message')}
          className={`transition-colors py-2 relative cursor-pointer min-h-[44px] flex items-center ${
            activeTab === 'message' ? 'text-ink' : 'text-subtle hover:text-ink'
          }`}
        >
          Message
          {activeTab === 'message' && (
            <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-ink" />
          )}
        </button>
      </div>
    </div>
  );
}
