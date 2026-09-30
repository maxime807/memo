import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { eventConfig } from '@/config';

export type Photo = {
  id: string;
  url: string;
  fullUrl?: string;
  downloadUrl?: string;
  title: string;
  author: string;
  time: string;
  aspectRatio: number;
};

interface AppContextState {
  photos: Photo[];
  setPhotos: React.Dispatch<React.SetStateAction<Photo[]>>;
  isUploadOpen: boolean;
  setUploadOpen: (open: boolean) => void;
  lightboxPhotoId: string | null;
  setLightboxPhotoId: (id: string | null) => void;
}

const AppContext = createContext<AppContextState | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [photos, setPhotos] = useState<Photo[]>(eventConfig.initialPhotos);
  const [isUploadOpen, setUploadOpen] = useState(false);
  const [lightboxPhotoId, setLightboxPhotoId] = useState<string | null>(null);

  // Préchargement et décodage bitmap proactif en arrière-plan (zéro latence au scroll)
  useEffect(() => {
    photos.forEach((photo) => {
      const img = new Image();
      img.src = photo.url;
      if (typeof img.decode === 'function') {
        img.decode().catch(() => {});
      }
    });
  }, [photos]);

  return (
    <AppContext.Provider
      value={{
        photos,
        setPhotos,
        isUploadOpen,
        setUploadOpen,
        lightboxPhotoId,
        setLightboxPhotoId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
}
