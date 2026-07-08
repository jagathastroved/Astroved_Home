import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight, ArrowUpRight } from 'lucide-react';
import { scrollToSection } from '../../utils/scroll';
import { astroved_store, Community_Fire, Pilgrimage_Tours } from '../../assets/Auspicious_Involvements/index';

const actions = [
  {
    id: 1,
    title: "Vedic Fire Ritual",
    tagline: "PRIEST SERVICES",
    description: "Book authentic Vedic rituals conducted by experienced priests for prosperity, health, relationships, and protection.",
    cta: "ENROLL FREE INTAKE",
    image: Community_Fire,
    imagePosition: "object-[center_15%]",
    link: () => scrollToSection('birth-form'),
    isExternal: false
  },
  {
    id: 2,
    title: "Energized Products",
    tagline: "ASTROVED SHOP",
    description: "Spiritually energized products blessed through traditional rituals to attract positive energies into your life.",
    cta: "BROWSE SHOP",
    image: astroved_store,
    imagePosition: "object-[center_30%]",
    link: "https://www.astroved.com",
    isExternal: true
  },
  {
    id: 3,
    title: "Holy Temples",
    tagline: "PILGRIMAGE TOURS",
    description: "Experience spiritually guided pilgrimages to sacred temples with carefully planned devotional journeys.",
    cta: "VIEW TOURS",
    image: Pilgrimage_Tours,
    imagePosition: "object-[center_10%]",
    link: "https://www.astroved.com",
    isExternal: true
  }
];

export function AuspiciousActions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === actions.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? actions.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-4 md:py-6 px-6 max-w-7xl mx-auto z-10" id="auspicious-actions">
      <div className="max-w-3xl mx-auto text-center mb-6">
        <h2 className="font-sans text-4xl sm:text-5xl text-midnight dark:text-cream leading-tight mb-4">
          Personalized <em className="text-amber-600 dark:text-amber-400 italic">Solutions.</em>
        </h2>
      </div>

      <div 
        className="relative group px-0 touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Main Card */}
        <div className="overflow-hidden rounded-[2.5rem] bg-[#f8f9fa] dark:bg-[#0b0e14] border border-gray-100 dark:border-white/5 hover:border-[#b052ff]/30 hover:shadow-[0_0_40px_rgba(176,82,255,0.15)] transition-all duration-500 relative h-[580px] lg:h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full h-full absolute inset-0"
            >
              {(() => {
                const ev = actions[currentIndex];
                return (
                  <div className="group/card flex flex-col lg:flex-row h-full relative">
                    {/* Background Image (Desktop) */}
                    <div className="hidden lg:block absolute top-0 bottom-0 left-0 w-[55%] overflow-hidden pointer-events-none">
                      <img 
                        src={ev.image} 
                        alt={ev.title}
                        className={`w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-[1500ms] ease-out ${ev.imagePosition}`}
                        style={{
                          WebkitMaskImage: 'linear-gradient(to right, black 85%, transparent 100%)',
                          maskImage: 'linear-gradient(to right, black 85%, transparent 100%)'
                        }}
                      />
                    </div>

                    {/* Background Image (Mobile & Tablet) */}
                    <div className="lg:hidden absolute inset-0 w-full h-[45%] overflow-hidden pointer-events-none rounded-t-[2.5rem]">
                      <picture>
                        <source media="(min-width: 768px)" srcSet={ev.image} />
                        <img 
                          src={(ev as any).mobileImage || ev.image} 
                          alt={ev.title}
                          className={`w-full h-full object-cover ${ev.imagePosition}`}
                        />
                      </picture>
                      {/* Smooth solid transition instead of blur */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#f8f9fa] dark:from-[#0b0e14] to-transparent h-24 top-auto bottom-0"></div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-[45%] ml-auto px-6 pb-12 pt-[240px] sm:px-12 lg:p-16 flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-10 relative h-full lg:mt-0 lg:pt-0">
                      <div className="w-full">
                        <div className="flex items-center justify-center lg:justify-start mb-2">
                          <span className="font-serif font-bold tracking-[0.2em] text-sm lg:text-base text-[#b052ff] dark:text-[#b052ff] uppercase">
                            {ev.tagline}
                          </span>
                        </div>

                        <h3 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-midnight dark:text-white font-bold tracking-tight mb-4 leading-tight">
                          {ev.title}
                        </h3>

                        <p className="font-body text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-sm mx-auto lg:mx-0">
                          {ev.description}
                        </p>

                        {ev.isExternal ? (
                          <a 
                            href={ev.link as string}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#b052ff] hover:bg-[#9333ea] text-white font-semibold tracking-wide text-sm hover:scale-105 transition-transform shadow-lg"
                          >
                            {ev.cta} <ArrowUpRight className="w-4 h-4" />
                          </a>
                        ) : (
                          <button 
                            onClick={ev.link as () => void}
                            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#b052ff] hover:bg-[#9333ea] text-white font-semibold tracking-wide text-sm hover:scale-105 transition-transform shadow-lg"
                          >
                            {ev.cta} <ArrowRight className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 sm:px-4 md:-mx-6 pointer-events-none z-20">
          <button 
            onClick={prevSlide}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 hover:bg-white dark:bg-black/30 dark:hover:bg-black/50 backdrop-blur-md border border-gray-200 dark:border-white/10 flex items-center justify-center text-[#b052ff] dark:text-white transition-all hover:scale-110 pointer-events-auto shadow-lg"
            aria-label="Previous event"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 hover:bg-white dark:bg-black/30 dark:hover:bg-black/50 backdrop-blur-md border border-gray-200 dark:border-white/10 flex items-center justify-center text-[#b052ff] dark:text-white transition-all hover:scale-110 pointer-events-auto shadow-lg"
            aria-label="Next event"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Pagination Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-50 lg:bottom-8 lg:right-12 lg:left-auto lg:translate-x-0">
          {actions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-500 rounded-full ${
                idx === currentIndex 
                  ? 'w-6 h-1.5 bg-[#b052ff] dark:bg-[#b052ff] shadow-sm' 
                  : 'w-1.5 h-1.5 bg-gray-400 hover:bg-gray-500 dark:bg-white/40 dark:hover:bg-white/60 shadow-sm'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
