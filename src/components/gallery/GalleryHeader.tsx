import { useApp } from '@/context/AppContext';
import { eventConfig } from '@/config';

export function GalleryHeader() {
  const { photos, setUploadOpen } = useApp();

  return (
    <div className="h-[56px] sm:h-[64px] lg:h-[75px] px-4 sm:px-5 lg:px-8 flex items-center justify-between border-b border-borderline shrink-0 bg-surface">
      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
        <h2 className="font-editorial text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tightest uppercase text-ink truncate">
          {eventConfig.currentFolder}
        </h2>
        <span className="text-xs font-semibold text-subtle tracking-wider shrink-0">
          ({photos.length})
        </span>
      </div>
      <button
        onClick={() => setUploadOpen(true)}
        className="text-xs font-semibold uppercase tracking-wider text-ink border border-ink/40 px-3 sm:px-3.5 py-1.5 min-h-[38px] flex items-center hover:bg-ink hover:text-surface transition-colors cursor-pointer shrink-0 ml-3"
      >
        + AJOUTER
      </button>
    </div>
  );
}
