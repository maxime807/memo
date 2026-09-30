import { Photo } from '@/context/AppContext';

interface GalleryItemProps {
  photo: Photo;
  onClick: () => void;
}

export function GalleryItem({ photo, onClick }: GalleryItemProps) {
  return (
    <div
      className="group flex flex-col cursor-pointer mb-3.5 sm:mb-4 lg:mb-5 xl:mb-6 select-none"
      onClick={onClick}
    >
      {/* Conteneur avec ratio réservé et containment matériel strict pour défilement 60/120fps */}
      <div
        className="relative overflow-hidden bg-[#dedad2] border border-borderline/80 w-full"
        style={{ 
          aspectRatio: photo.aspectRatio,
          contain: 'paint layout',
        }}
      >
        {/* Image affichée sans latence d'opacité, pré-décodée en mémoire */}
        <img
          src={photo.url}
          alt={photo.title}
          loading="eager"
          decoding="sync"
          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.025]"
        />

        {/* Pastille '+' au survol fidèle à Owen */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="w-10 h-10 rounded-full bg-surface text-ink flex items-center justify-center shadow-lg font-light text-xl">
            +
          </div>
        </div>
      </div>

      {/* Légende épurée Memō */}
      <div className="mt-2 sm:mt-2.5 flex items-center justify-between text-[10px] sm:text-[11px] font-medium uppercase tracking-wider">
        <span className="text-ink font-semibold truncate max-w-[55%] sm:max-w-[65%]">{photo.title}</span>
        <div className="flex items-center gap-1 sm:gap-1.5 text-subtle shrink-0 text-[9px] sm:text-[11px]">
          <span className="truncate max-w-[45px] sm:max-w-none">{photo.author}</span>
          <span className="w-1 h-1 rounded-full bg-subtle/40" />
          <span>{photo.time}</span>
        </div>
      </div>
    </div>
  );
}
