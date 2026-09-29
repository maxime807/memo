import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, UploadCloud, CheckCircle2 } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export function UploadModal() {
  const { isUploadOpen, setUploadOpen, addPhotos } = useApp();
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClose = () => {
    if (isUploading) return;
    setUploadOpen(false);
    setProgress(0);
  };

  const simulateUpload = (files: FileList | File[]) => {
    if (files.length === 0) return;
    
    setIsUploading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            const now = new Date();
            const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
            
            const newUploadedPhotos = Array.from(files).map((file, i) => ({
              id: `upload-${Date.now()}-${i}`,
              url: URL.createObjectURL(file),
              title: file.name.replace(/\.[^/.]+$/, '').toUpperCase(),
              author: 'Invité',
              time: timeStr,
              aspectRatio: 1,
            }));
            
            addPhotos(newUploadedPhotos);
            setIsUploading(false);
            setUploadOpen(false);
            setProgress(0);
          }, 400);
          return 100;
        }
        return p + 20;
      });
    }, 120);
  };

  return (
    <AnimatePresence>
      {isUploadOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop sombre fluide */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute inset-0 bg-black/50 backdrop-blur-md"
            style={{ willChange: 'opacity' }}
            onClick={handleClose}
          />

          {/* Boîte Modale blanche 100% opaque */}
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white w-full max-w-lg shadow-2xl p-6 md:p-8 relative border border-borderline z-10 select-none"
            style={{ willChange: 'transform, opacity' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modale */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-editorial text-2xl md:text-3xl font-bold uppercase tracking-tightest text-ink">
                  DÉPOSER DES PHOTOS
                </h3>
                <p className="text-[11px] uppercase tracking-wider text-subtle mt-0.5">
                  Partage instantané sans inscription
                </p>
              </div>
              <button
                onClick={handleClose}
                disabled={isUploading}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-canvas transition-colors cursor-pointer disabled:opacity-40"
              >
                <X size={18} />
              </button>
            </div>

            {/* Corps Modale */}
            {!isUploading ? (
              <div
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={(e) => { e.preventDefault(); setIsDragging(false); simulateUpload(e.dataTransfer.files); }}
                onClick={() => fileInputRef.current?.click()}
                className={`
                  border-2 border-dashed p-10 md:p-12 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200
                  ${isDragging ? 'border-ink bg-card' : 'border-borderline bg-card/60 hover:border-ink hover:bg-card'}
                `}
              >
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={(e) => e.target.files && simulateUpload(e.target.files)}
                />
                <div className="w-12 h-12 bg-white border border-borderline rounded-full flex items-center justify-center mb-3 text-ink shadow-sm">
                  <UploadCloud size={22} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink mb-1">
                  GLISSEZ VOS PHOTOS ICI
                </p>
                <p className="text-[11px] text-subtle uppercase">
                  ou cliquez pour explorer vos fichiers
                </p>
              </div>
            ) : (
              <div className="py-10 flex flex-col items-center text-center">
                {progress < 100 ? (
                  <>
                    <div className="w-12 h-12 border-2 border-borderline border-t-ink rounded-full animate-spin mb-4" />
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                      ENVOI DES PHOTOS... {progress}%
                    </p>
                    <div className="w-full h-1.5 bg-card overflow-hidden border border-borderline">
                      <div
                        className="h-full bg-ink transition-all duration-120"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </>
                ) : (
                  <motion.div
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center text-ink"
                  >
                    <CheckCircle2 size={48} className="mb-3 text-ink" />
                    <p className="text-sm font-semibold uppercase tracking-wider">
                      PHOTOS AJOUTÉES À L'ALBUM !
                    </p>
                  </motion.div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
