import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import ScrollFloat from '../ui/ScrollFloat';
import { TESTIMONIALS } from '../../utils/data';
import { astro_service } from '../../assets/astroved_service/index';

const BRAND_IMAGES = [astro_service];

export function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-6 md:py-8 md:py-16 max-w-7xl mx-auto px-6 relative z-10" id="trust-platform">
      <div className="flex flex-col gap-12 items-center">

        {/* Top Section - Full Graphic */}
        <div className="w-full relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-black/5 dark:border-amber-500/40 dark:shadow-[0_0_15px_rgba(245,158,11,0.2)] group">
          <img
            src={BRAND_IMAGES[0]}
            alt="Vedic Service"
            className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-[2s] ease-out"
          />
          <div className="absolute inset-0 pointer-events-none rounded-[2.5rem] ring-1 ring-inset ring-white/10" />
        </div>

        {/* Bottom Section - Premium Testimonials Feedback Card */}
        <div className="w-full max-w-4xl space-y-6">
          <div className="text-center space-y-2 mb-8">
            <h3 className="font-sans text-2xl md:text-3xl text-midnight dark:text-cream font-bold">What Our Users Say</h3>
            <p className="text-gray-500 dark:text-gray-400">Real stories from our global community</p>
          </div>

          {/* Premium Testimonials Feedback Card */}
          <div className="rounded-[2rem] bg-white dark:bg-[#110c1c] border border-black/5 dark:border-amber-500/40 dark:shadow-[0_0_15px_rgba(245,158,11,0.2)] p-8 md:p-10 relative overflow-hidden shadow-xl">

            {/* Soft background glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-[50px] pointer-events-none" />

            <div className="min-h-[160px] relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="space-y-6 flex flex-col h-full"
                >
                  <blockquote className="font-body text-lg text-midnight dark:text-cream leading-relaxed italic flex-grow">
                    "{TESTIMONIALS[activeTestimonial].quote}"
                  </blockquote>

                  <div>
                    <h4 className="font-sans text-sm text-midnight dark:text-cream uppercase tracking-widest font-bold">
                      {TESTIMONIALS[activeTestimonial].name}
                    </h4>
                    <p className="font-mono text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-1">
                      {TESTIMONIALS[activeTestimonial].role} · {TESTIMONIALS[activeTestimonial].stats}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-black/5 dark:border-amber-500/40 dark:shadow-[0_0_15px_rgba(245,158,11,0.2)] relative z-10">

              <div className="flex items-center gap-1.5">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className="p-1"
                  >
                    <span className={`block h-[3px] rounded-full transition-all duration-300 ${activeTestimonial === idx ? 'bg-amber-500 w-6' : 'bg-black/10 dark:bg-white/10 w-2 hover:bg-amber-500/50'}`} />
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTestimonial((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS.length - 1))}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 dark:border-amber-500/40 dark:shadow-[0_0_15px_rgba(245,158,11,0.2)] text-midnight dark:text-cream hover:bg-amber-500 hover:text-white hover:border-amber-500 active:scale-95 transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTestimonial((prev) => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0))}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 dark:border-amber-500/40 dark:shadow-[0_0_15px_rgba(245,158,11,0.2)] text-midnight dark:text-cream hover:bg-amber-500 hover:text-white hover:border-amber-500 active:scale-95 transition-all"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
