import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import ScrollFloat from '../ui/ScrollFloat';
import { TESTIMONIALS } from '../../utils/data';

const BRAND_IMAGES = [
  'https://images.unsplash.com/photo-1542838779-119c636f4618?auto=format&fit=crop&q=80&w=800'
];

export function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 md:py-16 max-w-7xl mx-auto px-6 relative z-10" id="trust-platform">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left Column - Company Branding (4 Image Slices) */}
        <div className="relative h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-black/5 dark:border-white/5 group flex">
          {BRAND_IMAGES.map((src, idx) => (
            <div key={idx} className={`flex-1 relative overflow-hidden ${idx !== BRAND_IMAGES.length - 1 ? 'border-r border-white/20 dark:border-white/10' : ''}`}>
              <img
                src={src}
                alt="Vedic Service"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s] ease-out"
              />
            </div>
          ))}

          {/* Gradient Overlay & Text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="font-mono text-xs text-white/90 uppercase tracking-widest font-semibold">
              Authentic Vedic services, trusted since 2000
            </p>
          </div>
        </div>

        {/* Right Column - Trust Heading & Current Feedback */}
        <div className="space-y-10">

          {/* Trust Headers */}
          <div className="space-y-4">
            <ScrollFloat containerClassName="font-sans text-4xl md:text-5xl text-midnight dark:text-cream leading-tight">
              Trusted by millions, for over <span className="text-amber-600 dark:text-amber-500 italic">25 years.</span>
            </ScrollFloat>
            <p className="font-body text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg max-w-lg">
              Since 2000, AstroVed has brought simple, authentic astrology and spiritual guidance to seekers in 150+ countries.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="font-body text-sm text-midnight dark:text-cream font-medium">
                4.8 <span className="text-gray-500 dark:text-gray-400 font-normal">average rating · 12,000+ verified reviews</span>
              </p>
            </div>
          </div>

          {/* Premium Testimonials Feedback Card */}
          <div className="rounded-[2rem] bg-white/60 dark:bg-[#110c1c]/60 backdrop-blur-xl border border-black/5 dark:border-white/5 p-8 md:p-10 relative overflow-hidden shadow-xl">

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
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-black/5 dark:border-white/10 relative z-10">

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
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 text-midnight dark:text-cream hover:bg-amber-500 hover:text-white hover:border-amber-500 active:scale-95 transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTestimonial((prev) => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0))}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 text-midnight dark:text-cream hover:bg-amber-500 hover:text-white hover:border-amber-500 active:scale-95 transition-all"
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
