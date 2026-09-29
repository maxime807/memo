import { Plus } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export function FloatingActionButton() {
  const { setUploadOpen } = useApp();

  return (
    <button
      onClick={() => setUploadOpen(true)}
      className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-ink text-surface rounded-full flex items-center justify-center shadow-2xl z-40 active:scale-95 transition-transform cursor-pointer"
      aria-label="Déposer des photos"
    >
      <Plus size={24} />
    </button>
  );
}
