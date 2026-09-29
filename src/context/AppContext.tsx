import { createContext, useContext, useState, ReactNode } from 'react';
import { eventConfig } from '@/config';

export type Photo = {
  id: string;
  url: string;
  downloadUrl?: string;
  title: string;
  author: string;
  time: string;
  aspectRatio: number;
};

interface AppContextState {
  photos: Photo[];
  isUploadOpen: boolean;
  setUploadOpen: (open: boolean) => void;
  lightboxPhotoId: string | null;
  setLightboxPhotoId: (id: string | null) => void;
  addPhotos: (newPhotos: Photo[]) => void;
}

const AppContext = createContext<AppContextState | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [photos, setPhotos] = useState<Photo[]>(eventConfig.initialPhotos);
  const [isUploadOpen, setUploadOpen] = useState(false);
  const [lightboxPhotoId, setLightboxPhotoId] = useState<string | null>(null);

  const addPhotos = (newPhotos: Photo[]) => {
    setPhotos((prev) => [...newPhotos, ...prev]);
  };

  return (
    <AppContext.Provider
      value={{
        photos,
        isUploadOpen,
        setUploadOpen,
        lightboxPhotoId,
        setLightboxPhotoId,
        addPhotos,
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
