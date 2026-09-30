import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, UploadCloud, FileImage, Trash2, ArrowUpRight } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export function UploadModal() {
  const { isUploadOpen, setUploadOpen } = useApp();
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClose = () => {
    setUploadOpen(false);
    setSelectedFiles([]);
    setIsDragging(false);
  };

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const newFiles = Array.from(files).filter((file) => file.type.startsWith('image/'));
    if (newFiles.length === 0) return;

    // Prise en charge des fichiers sélectionnés sans persistance locale ni doublon
    setSelectedFiles((prev) => [...prev, ...newFiles]);

    // =========================================================================
    // TODO (Apprenants) : Connecter l'upload à Supabase Storage
    // =========================================================================
    // C'est ici que vous déclencherez l'envoi réel vers votre bucket Supabase Storage :
    //
    // const uploadToSupabase = async (file: File) => {
    //   const filePath = `events/${Date.now()}-${file.name}`;
    //   const { data, error } = await supabase.storage.from('photos').upload(filePath, file);
    //   if (error) console.error('Erreur Supabase:', error);
    //   return data;
    // };
    // =========================================================================
    console.log('[Supabase Storage - Starter] Fichiers prêts pour upload :', newFiles);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleRemoveFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUploadSubmit = () => {
    // Point d'entrée pour les apprenants lors du clic sur le bouton de soumission
    console.log('[Supabase Storage] Déclenchement upload pour', selectedFiles);
    // Exemple d'action après upload :
    // await uploadFilesToSupabase(selectedFiles);
    // handleClose();
  };

  return (
    <AnimatePresence>
      {isUploadOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop sombre */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute inset-0 bg-black/50 backdrop-blur-md"
            style={{ willChange: 'opacity' }}
            onClick={handleClose}
          />

          {/* Boîte Modale blanche */}
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
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-canvas transition-colors cursor-pointer"
                aria-label="Fermer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Zone de Glisser-Déposer */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`
                border-2 border-dashed p-8 md:p-10 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200
                ${isDragging ? 'border-ink bg-card' : 'border-borderline bg-card/60 hover:border-ink hover:bg-card'}
              `}
            >
              <input
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => {
                  handleFiles(e.target.files);
                  e.target.value = '';
                }}
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

            {/* Liste des fichiers prêts pour Supabase Storage */}
            {selectedFiles.length > 0 && (
              <div className="mt-5 border-t border-borderline/80 pt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-ink">
                    Fichiers sélectionnés ({selectedFiles.length})
                  </span>
                  <button
                    onClick={() => setSelectedFiles([])}
                    className="text-[10px] uppercase tracking-wider text-subtle hover:text-ink transition-colors cursor-pointer"
                  >
                    Tout vider
                  </button>
                </div>

                <div className="max-h-36 overflow-y-auto space-y-1.5 pr-1 no-scrollbar">
                  {selectedFiles.map((file, idx) => (
                    <div
                      key={`${file.name}-${idx}`}
                      className="flex items-center justify-between p-2 bg-canvas/70 border border-borderline/60 text-xs"
                    >
                      <div className="flex items-center gap-2 truncate max-w-[80%]">
                        <FileImage size={14} className="text-subtle shrink-0" />
                        <span className="truncate font-mono text-[11px]">{file.name}</span>
                        <span className="text-[10px] text-subtle shrink-0">
                          ({(file.size / 1024).toFixed(0)} Ko)
                        </span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveFile(idx);
                        }}
                        className="text-subtle hover:text-ink p-1 cursor-pointer"
                        aria-label="Supprimer"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Bouton d'action prêt pour Supabase */}
                <button
                  onClick={handleUploadSubmit}
                  className="mt-4 w-full py-3 bg-ink text-surface font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  <span>Uploader avec Supabase Storage</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
