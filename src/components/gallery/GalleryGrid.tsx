import { useApp } from '@/context/AppContext';
import { GalleryItem } from './GalleryItem';
import { useMemo } from 'react';

export function GalleryGrid() {
  const { photos, setLightboxPhotoId } = useApp();

  const [colLeft, colRight] = useMemo(() => {
    const left: typeof photos = [];
    const right: typeof photos = [];
    photos.forEach((photo, index) => {
      if (index % 2 === 0) left.push(photo);
      else right.push(photo);
    });
    return [left, right];
  }, [photos]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 p-5 md:p-8 items-start">
      <div className="flex flex-col">
        {colLeft.map((photo) => (
          <GalleryItem
            key={photo.id}
            photo={photo}
            onClick={() => setLightboxPhotoId(photo.id)}
          />
        ))}
      </div>
      <div className="flex flex-col">
        {colRight.map((photo) => (
          <GalleryItem
            key={photo.id}
            photo={photo}
            onClick={() => setLightboxPhotoId(photo.id)}
          />
        ))}
      </div>
    </div>
  );
}
