import { useState } from 'react';
import { motion } from 'framer-motion';

export function SidebarContactTab() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="p-6 md:p-8 flex flex-col justify-between flex-1 overflow-y-auto no-scrollbar"
    >
      <div>
        <h2 className="font-editorial text-2xl font-bold tracking-tightest uppercase text-ink mb-2">
          LAISSER UN MOT
        </h2>
        <p className="text-xs leading-relaxed uppercase text-subtle font-medium mb-6">
          Partagez une pensée ou un remerciement pour cet événement.
        </p>

        {submitted ? (
          <div className="p-4 bg-canvas text-ink text-xs font-medium uppercase tracking-wider border border-borderline">
            Merci ! Votre message a été transmis.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-ink/70 mb-1">
                Prénom / Nom
              </label>
              <input
                required
                type="text"
                placeholder="Votre nom"
                className="w-full bg-transparent border-b border-borderline focus:border-ink py-2 text-xs outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-ink/70 mb-1">
                Message
              </label>
              <textarea
                required
                rows={4}
                placeholder="Votre mot pour l'album..."
                className="w-full bg-transparent border-b border-borderline focus:border-ink py-2 text-xs outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="mt-4 inline-block text-xs font-semibold uppercase tracking-wider text-ink border-b border-ink pb-1 hover:opacity-60 transition-opacity text-left cursor-pointer"
            >
              ENVOYER LE MOT &rarr;
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
}
