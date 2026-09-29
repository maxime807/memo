import { useApp } from '@/context/AppContext';
import { eventConfig } from '@/config';
import { motion } from 'framer-motion';

export function SidebarInfoTab() {
  const { setUploadOpen } = useApp();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="p-6 md:p-8 flex flex-col justify-between flex-1 overflow-y-auto no-scrollbar"
    >
      <div>
        {/* Photo de couverture de l'événement */}
        <div className="w-[180px] md:w-[210px] aspect-[4/5] overflow-hidden mb-8 bg-card border border-borderline">
          <img
            src={eventConfig.coverImage}
            alt="Couverture Événement"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Titre éditorial exact format Owen */}
        <div className="mb-6">
          <h1 className="font-editorial text-5xl md:text-[62px] font-bold tracking-tightest leading-[0.95] uppercase text-ink">
            {eventConfig.title}<br />{eventConfig.subtitle}
          </h1>
        </div>

        {/* Description de l'événement */}
        <p className="text-xs md:text-[13px] leading-relaxed tracking-normal uppercase text-ink/90 font-medium max-w-[340px] mb-8">
          {eventConfig.description}
        </p>
      </div>

      {/* Action principale sans superflu */}
      <div className="pt-4">
        <button
          onClick={() => setUploadOpen(true)}
          className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-wider text-ink hover:opacity-60 transition-opacity border-b border-ink pb-1 cursor-pointer"
        >
          DÉPOSER DES PHOTOS &rarr;
        </button>
      </div>
    </motion.div>
  );
}
