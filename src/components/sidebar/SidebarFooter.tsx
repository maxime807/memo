import { useApp } from '@/context/AppContext';

export function SidebarFooter() {
  const { photos } = useApp();

  const handleDownloadAll = () => {
    alert(`Téléchargement des ${photos.length} photos en cours (archive HD zip simulée)...`);
  };

  return (
    <div className="bg-surface px-4 sm:px-5 lg:px-8 py-3 lg:py-4 flex items-center justify-between border-t border-borderline shrink-0 md:mt-2 lg:mt-2.5">
      <div className="flex items-center gap-4 sm:gap-6 text-[11px] font-semibold tracking-wider uppercase text-ink">
        <span className="underline decoration-ink/40 underline-offset-4 cursor-default">
          {photos.length} PHOTOS
        </span>
        <button
          onClick={handleDownloadAll}
          className="underline decoration-ink/40 underline-offset-4 cursor-pointer hover:text-subtle transition-colors uppercase"
        >
          TÉLÉCHARGER TOUT
        </button>
      </div>
    </div>
  );
}
