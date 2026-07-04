import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { scrollToSection } from '../../utils/scroll';
import ScrollFloat from '../ui/ScrollFloat';

export function AncestralHealing() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto z-10" id="ancestral-healing">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left Large Image with Ken-Burns slow zoom (Image intact) */}
        <div className="h-[450px] md:h-[550px] rounded-[2.5rem] overflow-hidden relative shadow-2xl group border border-black/5 dark:border-white/5">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1200"
              alt="Ancestral Homage"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute bottom-8 left-8 right-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono uppercase tracking-[0.2em] font-semibold mb-3">
              Dharma Lineage
            </span>
            <h4 className="font-ui text-3xl text-white tracking-wide leading-tight">
              The Karma of Inherited Time
            </h4>
          </div>
        </div>

        {/* Right Text Panel (Premium Redesign) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-20 space-y-8"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-600 dark:text-amber-500 block mb-3 font-semibold">
              Karma Resolution
            </span>
            <ScrollFloat containerClassName="font-ui text-4xl font-medium text-midnight dark:text-cream leading-tight tracking-wide">
              Ancestral Pitru Healing.
            </ScrollFloat>
          </div>

          <p className="font-body text-gray-600 dark:text-gray-400 leading-relaxed text-base">
            In Vedic philosophy, sudden delays in your finances, career, or relationships are often not planetary transits, but ancestral energetic loops. Unresolved patterns of our ancestors flow down the lineage until actively cleared.
          </p>

          <div className="border-t border-black/5 dark:border-white/10 pt-8 space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 dark:bg-amber-500/20 flex-shrink-0 flex items-center justify-center text-amber-600 dark:text-amber-400 mt-1">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-ui text-lg text-midnight dark:text-cream font-medium">Food Tarpanam Offerings</h4>
                <p className="font-body text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                  Monthly feeding programs conducted precisely on auspicious Amavasya (New Moon) coordinates.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 dark:bg-amber-500/20 flex-shrink-0 flex items-center justify-center text-amber-600 dark:text-amber-400 mt-1">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-ui text-lg text-midnight dark:text-cream font-medium">Lineage Node Remedies</h4>
                <p className="font-body text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                  Stabilizing rituals targeting Rahu-Ketu alignments related specifically to historical family lines.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={() => scrollToSection('birth-form')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-midnight dark:bg-white text-white dark:text-midnight hover:bg-amber-600 dark:hover:bg-amber-400 hover:text-white font-ui text-sm tracking-widest uppercase font-bold transition-all shadow-md flex items-center justify-center gap-3 group/btn"
            >
              Assess Ancestral Karma
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
