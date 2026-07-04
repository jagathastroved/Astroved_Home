import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Moon, Flame } from 'lucide-react';
import { scrollToSection } from '../../utils/scroll';
import ScrollFloat from '../ui/ScrollFloat';

const DOSHAS = [
  {
    id: 'pitru',
    title: 'Pitru Dosha & Tarpanam',
    desc: "Liberate your forefathers and clear inherited karmic debt, performed in your family's name on the most powerful Amavasya (new moon) powertimes.",
    cta: 'Resolve Pitru Dosha',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1000',
    icon: Moon,
    badge: 'Ancestral Lineage'
  },
  {
    id: 'naga',
    title: 'Naga Dosha Remedies',
    desc: 'Honour the serpent deities, or Naga, to clear blocks to progeny, health and prosperity.',
    cta: 'Clear Naga Dosha',
    image: 'https://images.unsplash.com/photo-1582500057220-a61250325d7b?auto=format&fit=crop&q=80&w=1000',
    icon: Flame,
    badge: 'Karmic Cleansing'
  }
];

export function AncestralHealing() {
  return (
    <section className="py-12 md:py-16 px-6 max-w-7xl mx-auto z-10" id="ancestral-healing">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-8 relative z-10">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-600 dark:text-amber-500 block mb-3 font-semibold">
          Karma Resolution
        </span>
        <ScrollFloat containerClassName="font-sans text-4xl md:text-5xl font-medium text-midnight dark:text-cream leading-tight tracking-wide mb-6">
          Ancestral & Karmic Healing
        </ScrollFloat>
        <p className="font-body text-gray-600 dark:text-gray-400 leading-relaxed text-base max-w-2xl mx-auto">
          In Vedic philosophy, sudden delays in your finances, career, or relationships are often not planetary transits, but ancestral energetic loops. Unresolved patterns flow down the lineage until actively cleared.
        </p>
      </div>

      {/* 2-Column Dosha Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        {DOSHAS.map((dosha, idx) => (
          <motion.div
            key={dosha.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            className="group relative h-auto md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-black/5 dark:border-white/5 cursor-pointer flex flex-col bg-[#0a0e17]"
            onClick={() => scrollToSection('birth-form')}
          >
            {/* Background Image (Stacked on mobile, Absolute on desktop) */}
            <div className="relative h-[250px] md:absolute md:inset-0 md:h-full z-0 overflow-hidden shrink-0">
              <img
                src={dosha.image}
                alt={dosha.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
              />
              {/* Gradients only needed on desktop since mobile text is below the image */}
              <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-0 opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="hidden md:block absolute inset-0 bg-amber-900/20 mix-blend-overlay z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col flex-1 justify-between p-8 md:p-10 md:h-full bg-[#0a0e17] md:bg-transparent">
              {/* Badge & Icon */}
              <div className="flex justify-between items-start transform md:translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 mb-8 md:mb-0">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 md:bg-white/20 backdrop-blur-md border border-white/20 md:border-white/30 text-white text-[10px] font-mono uppercase tracking-[0.2em] font-semibold shadow-sm">
                  {dosha.badge}
                </span>
                <div className="w-12 h-12 rounded-full bg-white/5 md:bg-white/10 backdrop-blur-md border border-white/10 md:border-white/20 flex items-center justify-center text-white">
                  <dosha.icon className="w-5 h-5" />
                </div>
              </div>

              {/* Text & CTA */}
              <div className="mt-auto transform md:translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out">
                <h4 className="font-sans text-3xl md:text-4xl text-amber-500 md:text-white tracking-wide leading-tight mb-4 group-hover:text-xl md:text-2xl transition-colors duration-300">
                  {dosha.title}
                </h4>
                <p className="font-body text-cream/80 leading-relaxed text-sm md:text-base mb-8 max-w-md md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {dosha.desc}
                </p>

                <div className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest font-bold text-white relative overflow-hidden group/cta">
                  <span className="relative z-10 flex items-center gap-2">
                    {dosha.cta}
                    <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500 transform origin-left scale-x-0 group-hover/cta:scale-x-100 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
