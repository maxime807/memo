import { useApp } from '@/context/AppContext';
import { GalleryItem } from './GalleryItem';
import { useMemo } from 'react';

export function GalleryGrid() {
  const { photos, setLightboxPhotoId } = useApp();

  // Distribution 3 colonnes pour Desktop Large (≥ 1280px)
  const [col3_1, col3_2, col3_3] = useMemo(() => {
    const c1: typeof photos = [];
    const c2: typeof photos = [];
    const c3: typeof photos = [];
    photos.forEach((photo, index) => {
      if (index % 3 === 0) c1.push(photo);
      else if (index % 3 === 1) c2.push(photo);
      else c3.push(photo);
    });
    return [c1, c2, c3];
  }, [photos]);

  // Distribution 2 colonnes pour Mobile (< 768px) et Tablette Paysage (1024px - 1279px)
  const [col2_1, col2_2] = useMemo(() => {
    const left: typeof photos = [];
    const right: typeof photos = [];
    photos.forEach((photo, index) => {
      if (index % 2 === 0) left.push(photo);
      else right.push(photo);
    });
    return [left, right];
  }, [photos]);

  return (
    <>
      {/* 1. Mobile (< 768px) : Interface linéaire sous la sidebar avec galerie 2 colonnes */}
      <div className="grid grid-cols-2 md:hidden gap-2.5 sm:gap-3.5 p-2.5 sm:p-4 items-start">
        <div className="flex flex-col">
          {col2_1.map((photo) => (
            <GalleryItem
              key={photo.id}
              photo={photo}
              onClick={() => setLightboxPhotoId(photo.id)}
            />
          ))}
        </div>
        <div className="flex flex-col">
          {col2_2.map((photo) => (
            <GalleryItem
              key={photo.id}
              photo={photo}
              onClick={() => setLightboxPhotoId(photo.id)}
            />
          ))}
        </div>
      </div>

      {/* 2. Tablette Portrait (768px - 1023px) : Panneau de gauche + 1 colonne */}
      <div className="hidden md:flex lg:hidden flex-col p-4 md:p-6 w-full max-w-xl mx-auto items-start">
        {photos.map((photo) => (
          <GalleryItem
            key={photo.id}
            photo={photo}
            onClick={() => setLightboxPhotoId(photo.id)}
          />
        ))}
      </div>

      {/* 3. Tablette Paysage / Laptop (1024px - 1279px) : Panneau de gauche + 2 colonnes */}
      <div className="hidden lg:grid xl:hidden lg:grid-cols-2 gap-4 lg:gap-5 p-5 lg:p-6 items-start">
        <div className="flex flex-col">
          {col2_1.map((photo) => (
            <GalleryItem
              key={photo.id}
              photo={photo}
              onClick={() => setLightboxPhotoId(photo.id)}
            />
          ))}
        </div>
        <div className="flex flex-col">
          {col2_2.map((photo) => (
            <GalleryItem
              key={photo.id}
              photo={photo}
              onClick={() => setLightboxPhotoId(photo.id)}
            />
          ))}
        </div>
      </div>

      {/* 4. Desktop Large (≥ 1280px) : Panneau de gauche + 3 colonnes */}
      <div className="hidden xl:grid xl:grid-cols-3 gap-4 lg:gap-5 xl:gap-6 p-6 xl:p-8 items-start">
        <div className="flex flex-col">
          {col3_1.map((photo) => (
            <GalleryItem
              key={photo.id}
              photo={photo}
              onClick={() => setLightboxPhotoId(photo.id)}
            />
          ))}
        </div>
        <div className="flex flex-col">
          {col3_2.map((photo) => (
            <GalleryItem
              key={photo.id}
              photo={photo}
              onClick={() => setLightboxPhotoId(photo.id)}
            />
          ))}
        </div>
        <div className="flex flex-col">
          {col3_3.map((photo) => (
            <GalleryItem
              key={photo.id}
              photo={photo}
              onClick={() => setLightboxPhotoId(photo.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
