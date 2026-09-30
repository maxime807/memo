import { GalleryHeader } from './GalleryHeader';
import { GalleryGrid } from './GalleryGrid';

export function GalleryContainer() {
  return (
    <main className="bg-surface flex-1 md:h-full flex flex-col md:overflow-hidden relative border border-borderline/80 min-h-0">
      <GalleryHeader />
      <div 
        className="flex-1 md:overflow-y-auto no-scrollbar min-h-0"
        style={{ 
          overscrollBehavior: 'contain', 
          WebkitOverflowScrolling: 'touch',
          willChange: 'scroll-position',
          transform: 'translateZ(0)',
        }}
      >
        <GalleryGrid />
      </div>
    </main>
  );
}
