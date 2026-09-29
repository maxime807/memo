import { GalleryHeader } from './GalleryHeader';
import { GalleryGrid } from './GalleryGrid';

export function GalleryContainer() {
  return (
    <main className="bg-surface flex-1 h-full flex flex-col overflow-hidden relative border border-borderline/80">
      <GalleryHeader />
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <GalleryGrid />
      </div>
    </main>
  );
}
