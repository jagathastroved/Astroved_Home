import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';

const FAQ_DATA = [
  {
    id: 1,
    q: "What is the difference between a 'Building' and a 'Waiting' phase?",
    a: "A Building phase is a great time to start new projects and expand. A Waiting phase is a time to rest, reflect, and fix old problems. Pushing too hard during a Waiting phase can lead to burnout."
  },
  {
    id: 2,
    q: "Are the remote temple rituals real?",
    a: "Yes. All rituals are performed physically at real temples by our certified priests. You will receive photos, videos, and the sacred ashes in the mail."
  },
  {
    id: 3,
    q: "How does the astrological calculation work?",
    a: "We use your exact birth details (date, time, and place) to calculate your unique star positions. We then use modern AI to explain these complex star charts in simple, easy-to-understand language."
  },
  {
    id: 4,
    q: "Why is my Vedic sign different from my Western sign?",
    a: "Western astrology is based on seasons, while Vedic astrology looks at the actual physical stars in the sky right now. Because of the Earth's tilt, your Vedic sign is usually one sign behind your Western sign."
  },
  {
    id: 5,
    q: "What is a Nakshatra?",
    a: "In Vedic astrology, the sky is divided into 27 'Nakshatras' (star clusters) instead of just 12 signs. Your Nakshatra gives a much deeper look into your mind and personality."
  },
  {
    id: 6,
    q: "Are my personal details safe?",
    a: "Absolutely. We never sell or share your birth details or personal information. Your data is kept entirely private and secure."
  }
];

export function FAQ() {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto z-10 relative overflow-hidden" id="faq-section">

      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[300px] bg-purple-500/5 dark:bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="text-center max-w-3xl mx-auto mb-8 relative z-10">
        <span className="font-2xl uppercase tracking-[0.25em] text-purple-600 dark:text-purple-400 font-bold block mb-3">
          Common Questions
        </span>
        <h2 className="font-sans text-4xl sm:text-5xl text-midnight dark:text-cream leading-tight">
          Frequently Asked <em className="text-amber-600 dark:text-amber-400 italic">Questions.</em>
        </h2>
        <p className="font-body text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-6 leading-relaxed max-w-lg mx-auto">
          Find simple answers about our astrological readings and services.
        </p>
      </div>

      {/* 1-column stacked layout (One by One) */}
      <div className="max-w-3xl mx-auto space-y-4 relative z-10">
        {FAQ_DATA.map((item) => {
          const isOpen = openFaqId === item.id;
          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                ? 'border-amber-500/30 bg-white dark:bg-[#1a1f3c] shadow-lg shadow-amber-500/5'
                : 'border-black/5 dark:border-white/5 bg-white dark:bg-[#110c1c] hover:border-amber-500/20 hover:bg-gray-50 dark:hover:bg-[#1a1f3c]'
                }`}
            >
              <button
                onClick={() => setOpenFaqId(isOpen ? null : item.id)}
                className="w-full px-6 py-6 text-left flex items-center justify-between gap-6 group"
              >
                <span className={`font-sans text-sm sm:text-base tracking-wide font-medium transition-colors ${isOpen ? 'text-amber-700 dark:text-amber-400' : 'text-midnight dark:text-cream'}`}>
                  {item.q}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 rotate-45' : 'bg-black/5 dark:bg-white/5 text-gray-400 group-hover:bg-amber-500/10 group-hover:text-amber-500'}`}>
                  <Plus className="w-4 h-4" />
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-black/5 dark:border-white/5">
                      <p className="font-body text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                        {item.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

    </section>
  );
}
