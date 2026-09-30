import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Download, X } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export function Lightbox() {
  const { photos, lightboxPhotoId, setLightboxPhotoId } = useApp();

  const currentIndex = photos.findIndex((p) => p.id === lightboxPhotoId);
  const currentPhoto = currentIndex !== -1 ? photos[currentIndex] : null;

  const handleClose = () => setLightboxPhotoId(null);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex < photos.length - 1) {
      setLightboxPhotoId(photos[currentIndex + 1].id);
    }
  }, [currentIndex, photos, setLightboxPhotoId]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex > 0) {
      setLightboxPhotoId(photos[currentIndex - 1].id);
    }
  }, [currentIndex, photos, setLightboxPhotoId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!currentPhoto) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPhoto, handleNext, handlePrev]);

  return (
    <AnimatePresence>
      {currentPhoto && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* 1. Backdrop sombre sans flash GPU */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute inset-0 bg-black/65 backdrop-blur-md"
            style={{ willChange: 'opacity' }}
            onClick={handleClose}
          />

          {/* 2. Conteneur photo au centre avec transition fluide */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white p-2.5 pb-4 max-w-[92vw] max-h-[92vh] flex flex-col shadow-2xl border border-borderline z-10 select-none"
            style={{ willChange: 'transform, opacity' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton Fermer circulaire */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 sm:-top-3 sm:-right-3 md:-right-12 md:top-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-ink flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform cursor-pointer z-30 border border-borderline"
              aria-label="Fermer"
            >
              <X size={16} />
            </button>

            {/* Navigation Précédent */}
            {currentIndex > 0 && (
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:-left-4 md:-left-12 lg:-left-14 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 text-ink flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform cursor-pointer z-30 border border-borderline"
                aria-label="Précédent"
              >
                <ChevronLeft size={20} />
              </button>
            )}

            {/* Navigation Suivant */}
            {currentIndex < photos.length - 1 && (
              <button
                onClick={handleNext}
                className="absolute right-2 sm:-right-4 md:-right-12 lg:-right-14 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 text-ink flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform cursor-pointer z-30 border border-borderline"
                aria-label="Suivant"
              >
                <ChevronRight size={20} />
              </button>
            )}

            {/* Image HD */}
            <div className="relative overflow-hidden flex items-center justify-center bg-card">
              <img
                key={currentPhoto.id}
                src={currentPhoto.fullUrl || currentPhoto.url}
                alt={currentPhoto.title}
                decoding="sync"
                className="max-h-[76vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Légende de la photo */}
            <div className="mt-3 px-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-ink">
              <span className="truncate max-w-[50%]">{currentPhoto.title}</span>
              <div className="flex items-center gap-4 text-subtle">
                <span>{currentPhoto.author} • {currentPhoto.time}</span>
                <a
                  href={currentPhoto.downloadUrl || currentPhoto.url}
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink hover:opacity-60 transition-opacity flex items-center gap-1 cursor-pointer"
                >
                  <Download size={14} />
                  <span>HD</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
