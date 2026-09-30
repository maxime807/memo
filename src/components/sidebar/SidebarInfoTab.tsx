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
      className="p-4 sm:p-5 md:p-4 lg:p-6 xl:p-8 flex flex-col justify-between flex-1 overflow-y-auto no-scrollbar"
    >
      <div>
        {/* Cover image : vignette compacte sur mobile, portrait éditorial progressif sur tablette et desktop */}
        <div className="flex md:block items-center gap-3.5 mb-3.5 md:mb-5 lg:mb-8">
          <div className="w-14 h-18 md:w-[140px] lg:w-[180px] xl:w-[210px] md:h-auto md:aspect-[4/5] shrink-0 overflow-hidden bg-card border border-borderline">
            <img
              src={eventConfig.coverImage}
              alt="Couverture Événement"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:hidden">
            <span className="text-xs font-semibold uppercase tracking-wider text-subtle block mb-0.5">
              {eventConfig.date} · {eventConfig.location}
            </span>
            <h1 className="font-editorial text-2xl font-bold tracking-tightest leading-[0.95] uppercase text-ink">
              {eventConfig.title} {eventConfig.subtitle}
            </h1>
          </div>
        </div>

        {/* Titre éditorial grand format visible sur desktop et tablette */}
        <div className="hidden md:block mb-4 lg:mb-6">
          <h1 className="font-editorial text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold tracking-tightest leading-[0.95] uppercase text-ink">
            {eventConfig.title}<br />{eventConfig.subtitle}
          </h1>
        </div>

        {/* Description de l'événement */}
        <p className="text-xs lg:text-[13px] leading-relaxed tracking-normal uppercase text-ink/90 font-medium max-w-full lg:max-w-[340px] mb-4 md:mb-5 lg:mb-8">
          {eventConfig.description}
        </p>
      </div>

      {/* Action principale forte : Déposer des photos (Choix 1) */}
      <div className="pt-2 md:pt-4">
        <button
          onClick={() => setUploadOpen(true)}
          className="w-full bg-ink text-surface uppercase font-semibold text-xs tracking-wider py-3 md:py-3.5 px-4 md:px-5 flex items-center justify-between hover:bg-ink/85 transition-colors cursor-pointer"
        >
          <span>DÉPOSER DES PHOTOS</span>
          <span className="text-base font-light">+</span>
        </button>
      </div>
    </motion.div>
  );
}
