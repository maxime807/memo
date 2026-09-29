import { Photo } from '@/context/AppContext';

interface GalleryItemProps {
  photo: Photo;
  onClick: () => void;
}

export function GalleryItem({ photo, onClick }: GalleryItemProps) {
  return (
    <div
      className="group flex flex-col cursor-pointer mb-5 select-none"
      onClick={onClick}
    >
      {/* Conteneur image */}
      <div className="relative overflow-hidden bg-card border border-borderline/60">
        <img
          src={photo.url}
          alt={photo.title}
          loading="lazy"
          className="w-full h-auto object-cover transform transition-transform duration-500 ease-out group-hover:scale-[1.025]"
        />

        {/* Pastille '+' discrète au survol style Owen */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="w-10 h-10 rounded-full bg-surface text-ink flex items-center justify-center shadow-lg font-light text-xl">
            +
          </div>
        </div>
      </div>

      {/* Légende fidèle et épurée (Titre/Auteur à gauche, Heure à droite) */}
      <div className="mt-2.5 flex items-center justify-between text-[11px] font-medium uppercase tracking-wider">
        <span className="text-ink font-semibold truncate max-w-[65%]">{photo.title}</span>
        <div className="flex items-center gap-1.5 text-subtle shrink-0">
          <span>{photo.author}</span>
          <span className="w-1 h-1 rounded-full bg-subtle/40" />
          <span>{photo.time}</span>
        </div>
      </div>
    </div>
  );
}
