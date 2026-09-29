import { useApp } from '@/context/AppContext';

export function GalleryHeader() {
  const { photos, setUploadOpen } = useApp();

  return (
    <div className="h-[75px] px-6 md:px-8 flex items-center justify-between border-b border-borderline shrink-0 bg-surface">
      <div className="flex items-center gap-3">
        <h2 className="font-editorial text-2xl md:text-3xl font-bold tracking-tightest uppercase text-ink">
          PHOTOS
        </h2>
        <span className="text-xs font-semibold text-subtle tracking-wider">
          ({photos.length})
        </span>
      </div>
      <button
        onClick={() => setUploadOpen(true)}
        className="text-xs font-semibold uppercase tracking-wider text-ink border border-ink/40 px-3.5 py-1.5 hover:bg-ink hover:text-surface transition-colors cursor-pointer"
      >
        + AJOUTER
      </button>
    </div>
  );
}
