import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import ScrollFloat from '../ui/ScrollFloat';
import { CountUp } from '../CountUp';
import { TESTIMONIALS } from '../../utils/data';

export function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 max-w-6xl mx-auto px-6 relative z-10" id="trust-platform">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left column - Very small, delicate stats */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-amber-600 dark:text-amber-500 font-bold block mb-1">
              Verified Lineage
            </span>
            <ScrollFloat containerClassName="font-ui text-2xl sm:text-3xl text-midnight dark:text-cream leading-tight">
              Unrivaled Vedic Fidelity
            </ScrollFloat>
            <p className="font-body text-xs text-gray-600 dark:text-gray-400 mt-2 leading-relaxed max-w-sm">
              Our platform marries the mathematical precision of astronomical ephemerides with centuries of authentic lineage study.
            </p>
          </div>

          <div className="space-y-4">
            <div className="border-l-[1.5px] border-amber-500/30 pl-4 py-0.5">
              <span className="text-2xl font-ui text-midnight dark:text-cream font-medium block leading-none mb-0.5">
                <CountUp to={200000} duration={2} suffix="+" />
              </span>
              <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest font-semibold">Active Seekers</span>
            </div>

            <div className="border-l-[1.5px] border-amber-500/30 pl-4 py-0.5">
              <span className="text-2xl font-ui text-midnight dark:text-cream font-medium block leading-none mb-0.5">
                <CountUp to={45} duration={1.5} suffix="k+" />
              </span>
              <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest font-semibold">Intentions Manifested</span>
            </div>

            <div className="border-l-[1.5px] border-amber-500/30 pl-4 py-0.5">
              <span className="text-2xl font-ui text-midnight dark:text-cream font-medium block leading-none mb-0.5">
                <CountUp to={99.8} from={90} duration={1.6} suffix="%" />
              </span>
              <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest font-semibold">Accuracy Rating</span>
            </div>
          </div>
        </div>

        {/* Right column - Small elegant card */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-white/60 dark:bg-[#110c1c]/60 backdrop-blur-md border border-black/5 dark:border-white/5 p-6 sm:p-8 relative overflow-hidden shadow-sm">
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-[40px] pointer-events-none" />
            
            <div className="min-h-[140px] relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="font-body text-sm sm:text-base text-midnight dark:text-cream leading-relaxed italic">
                    "{TESTIMONIALS[activeTestimonial].quote}"
                  </blockquote>

                  <div>
                    <h4 className="font-ui text-xs text-midnight dark:text-cream uppercase tracking-widest font-bold">
                      {TESTIMONIALS[activeTestimonial].name}
                    </h4>
                    <p className="font-mono text-[9px] text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                      {TESTIMONIALS[activeTestimonial].role} · {TESTIMONIALS[activeTestimonial].stats}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Tiny Controls */}
            <div className="flex items-center justify-between pt-4 mt-4 border-t border-black/5 dark:border-white/5 relative z-10">
              
              <div className="flex items-center gap-1">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className="p-1"
                  >
                    <span className={`block h-[3px] rounded-full transition-all duration-300 ${activeTestimonial === idx ? 'bg-amber-500 w-4' : 'bg-black/10 dark:bg-white/10 w-2 hover:bg-amber-500/50'}`} />
                  </button>
                ))}
              </div>

              <div className="flex gap-1.5">
                <button
                  onClick={() => setActiveTestimonial((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS.length - 1))}
                  className="w-7 h-7 flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 text-midnight dark:text-cream hover:bg-black/5 dark:hover:bg-white/5 active:scale-95 transition-all"
                >
                  <ArrowLeft className="w-3 h-3" />
                </button>
                <button
                  onClick={() => setActiveTestimonial((prev) => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0))}
                  className="w-7 h-7 flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 text-midnight dark:text-cream hover:bg-black/5 dark:hover:bg-white/5 active:scale-95 transition-all"
                >
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
