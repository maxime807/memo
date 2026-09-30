import { Sidebar } from '@/components/sidebar/Sidebar';
import { GalleryContainer } from '@/components/gallery/GalleryContainer';
import { FloatingActionButton } from '@/components/ui/FloatingActionButton';
import { Lightbox } from '@/components/sections/Lightbox';
import { UploadModal } from '@/components/sections/UploadModal';
import { NoiseOverlay } from '@/components/common/NoiseOverlay';
import { MemoPreloader } from '@/components/ui/MemoPreloader';

export default function App() {
  return (
    <>
      <MemoPreloader />
      <div className="relative min-h-screen md:h-screen w-full bg-canvas p-2.5 sm:p-3 md:p-3.5 lg:p-4 xl:p-5 flex flex-col md:flex-row gap-2.5 md:gap-3 lg:gap-4 overflow-y-auto md:overflow-hidden select-none">
        {/* Texture Noise subtile d'origine */}
        <NoiseOverlay />

        {/* Colonne Gauche : Sidebar éditoriale avec tabs, bio, clock */}
        <Sidebar />

        {/* Colonne Droite : Galerie Masonry 2 colonnes avec scroll interne */}
        <GalleryContainer />

        {/* Composants d'interaction & Overlays */}
        <FloatingActionButton />
        <Lightbox />
        <UploadModal />
      </div>
    </>
  );
}
