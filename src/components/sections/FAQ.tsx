import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';

const FAQ_DATA = [
  {
    id: 1,
    q: "What is the difference between a 'Building' and a 'Waiting' phase?",
    a: "A Building phase is characterized by positive planetary transits (e.g. exalted Sun, beneficial Jupiter dasha) that fuel physical expansion and new initiatives. A Waiting phase is a Saturn-ruled Sade Sati or planetary retrograde requiring internal alignment, ancestral healing, debt clearing, and foundation-refinement. Rushing forward in a Waiting phase burns vital energy."
  },
  {
    id: 2,
    q: "Are the remote temple rituals performed genuinely?",
    a: "Yes. All rituals are performed physically at certified traditional South Indian temples under the official guidance of our AstroVed resident priests. Once complete, you receive the physical certified ashes, digital validation coordinates, and personal energy markers."
  },
  {
    id: 3,
    q: "How does the server-side Gemini 3.5 AI calculation work?",
    a: "The server takes your Name, Birth Date, and Birth Location, maps them against traditional Vedic Ephemeris planetary tables, and utilizes our fine-tuned Gemini model to translate advanced Sanskrit astronomical coordinates into understandable, actionable, and warm personal timing directives."
  },
  {
    id: 4,
    q: "Does my Western Sun sign match my Vedic Ascendant sign?",
    a: "Generally no. Western astrology uses the Tropical zodiac, which is based on seasons. Vedic astrology (Jyotish) uses the Sidereal zodiac, which tracks the actual physical locations of constellations in the sky, taking into account the Earth's precession. Your Vedic sign is often one full sign backward from your Western counterpart."
  },
  {
    id: 5,
    q: "What is Nakshatra alignment?",
    a: "While the standard Zodiac tracks 12 major sectors, Vedic astrology divides the sky into 27 lunar mansions called Nakshatras. Your natal Nakshatra reveals the deep emotional sub-conscious blueprint of your mind and governs your daily favorable hours."
  },
  {
    id: 6,
    q: "Are my personal details and birth chart protected?",
    a: "Absolutely. AstroVed adheres to standard data privacy directives. Your birth name, coordinates, and query inputs are encrypted server-side and never sold, shared, or compiled for marketing. They are cleared immediately upon session expiration."
  }
];

export function FAQ() {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto z-10 relative overflow-hidden" id="faq-section">
      
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[300px] bg-purple-500/5 dark:bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-purple-600 dark:text-purple-400 font-bold block mb-3">
          Intelligent Timing Clarification
        </span>
        <h2 className="font-ui text-4xl sm:text-5xl text-midnight dark:text-cream leading-tight">
          Frequently Inquired <em className="text-amber-600 dark:text-amber-400 italic">Topics.</em>
        </h2>
        <p className="font-body text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-6 leading-relaxed max-w-lg mx-auto">
          Find conceptual alignment regarding dashas, transits, and online consecrations.
        </p>
      </div>

      {/* 1-column stacked layout (One by One) */}
      <div className="max-w-3xl mx-auto space-y-4 relative z-10">
        {FAQ_DATA.map((item) => {
          const isOpen = openFaqId === item.id;
          return (
            <div 
              key={item.id} 
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen 
                  ? 'border-amber-500/30 bg-white/80 dark:bg-white/10 backdrop-blur-md shadow-lg shadow-amber-500/5' 
                  : 'border-black/5 dark:border-white/5 bg-white/40 dark:bg-white/5 backdrop-blur-md hover:border-amber-500/20 hover:bg-white/60 dark:hover:bg-white/10'
              }`}
            >
              <button
                onClick={() => setOpenFaqId(isOpen ? null : item.id)}
                className="w-full px-6 py-6 text-left flex items-center justify-between gap-6 group"
              >
                <span className={`font-ui text-sm sm:text-base tracking-wide font-medium transition-colors ${isOpen ? 'text-amber-700 dark:text-amber-400' : 'text-midnight dark:text-cream'}`}>
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
