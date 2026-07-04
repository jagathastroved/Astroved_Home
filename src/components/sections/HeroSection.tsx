import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Compass, ArrowRight } from 'lucide-react';
import { fadeUp, stagger } from '../../utils/animations';
import TextType from '../ui/TextType';
import CountUp from '../ui/CountUp';
import { scrollToSection } from '../../utils/scroll';
import { spiritual_journey, your_desnity } from '../../assets/Banner_image/index';

const BANNERS = [
  {
    id: 1,
    type: "original",
    bg: "bg-[#faf9f6] dark:bg-[#0b1120]"
  },
  {
    id: 3,
    type: "image",
    titlePrefix: "Discover Your ",
    titleHighlight: "Destiny",
    description: "Unlock the secrets of your Vedic birth chart. Get personalized daily horoscopes, exact planetary transits, and auspicious timing radars.",
    buttonText: "Read Chart",
    image: your_desnity,
    bg: "bg-indigo-50 dark:bg-[#111827]",
    accent: "text-indigo-600 dark:text-[#a78bfa]"
  },
  {
    id: 4,
    type: "image",
    titlePrefix: "Spiritual ",
    titleHighlight: "Journeys",
    description: "Join guided tours to ancient Indian temples and connect with your spirituality.",
    buttonText: "Explore Tours",
    image: spiritual_journey,
    bg: "bg-emerald-50 dark:bg-[#1b2f23]",
    accent: "text-emerald-600 dark:text-[#34d399]"
  }
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BANNERS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % BANNERS.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);

  const currentBanner = BANNERS[currentIndex];

  return (
    <section className={`relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] ${currentBanner.bg} overflow-hidden transition-colors duration-1000 min-h-[600px] flex items-center justify-center`} id="hero-section">

      {/* Subtle radial glow in background for image slides */}
      {currentBanner.type === 'image' && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/40 dark:from-white/10 via-transparent to-transparent opacity-50 transition-opacity duration-1000 pointer-events-none" />
      )}

      {/* Carousel Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 flex items-center justify-center border border-black/5 dark:border-white/10 transition-colors hidden md:flex"
      >
        <ChevronLeft className="w-5 h-5 text-midnight/70 dark:text-cream/70" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 flex items-center justify-center border border-black/5 dark:border-white/10 transition-colors hidden md:flex"
      >
        <ChevronRight className="w-5 h-5 text-midnight/70 dark:text-cream/70" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {BANNERS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex
              ? 'bg-midnight dark:bg-white w-6'
              : 'bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40 w-2'
              }`}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-16 lg:py-12 md:py-16">
        <AnimatePresence mode="wait">

          {currentBanner.type === 'original' ? (

            /* ORIGINAL HERO SLIDE */
            <motion.div
              key="original-slide"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col justify-center space-y-8 items-center text-center"
            >
              <motion.div variants={fadeUp} initial="hidden" animate="show" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-purple dark:text-saffron text-xs font-mono uppercase tracking-widest w-fit">
                <Compass className="w-3.5 h-3.5 animate-spin-slow" />
                Welcome to AstroVed
              </motion.div>

              <motion.h1
                variants={fadeUp} initial="hidden" animate="show"
                className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] text-midnight dark:text-cream tracking-tight"
              >
                Know Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-saffron to-gold font-sans">
                  <TextType
                    text={["Cosmic Timing", "Ancestral Karma", "Auspicious Moments", "Vedic Blueprint"]}
                    typingSpeed={60}
                    pauseDuration={2000}
                    showCursor={true}
                    cursorCharacter="|"
                    className="inline"
                  />
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp} initial="hidden" animate="show"
                className="font-body text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed font-light mx-auto"
              >
                Get expert astrological guidance and daily insights to navigate your life with confidence and clarity.
              </motion.p>

              <motion.div variants={fadeUp} initial="hidden" animate="show" className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 justify-center">
                <button
                  onClick={() => scrollToSection('timing-check')}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-purple to-indigo text-cream font-sans text-sm tracking-widest uppercase font-semibold border border-gold/30 hover:border-gold/60 transition-all shadow-[0_0_20px_rgba(212,175,55,0.15)] active:scale-95 text-center flex items-center justify-center gap-3 group"
                >
                  Get Started Free
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>

                <button
                  onClick={() => scrollToSection('guidance-services')}
                  className="px-6 py-4 rounded-full border border-midnight/10 dark:border-cream/10 text-midnight dark:text-cream font-sans text-sm tracking-widest uppercase font-semibold hover:bg-gold/5 hover:border-gold/20 transition-all text-center"
                >
                  How It Works &rarr;
                </button>
              </motion.div>

              <motion.div
                variants={fadeUp} initial="hidden" animate="show"
                className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-gold/10 w-full max-w-4xl mt-12"
              >
                <div className="flex flex-col">
                  <span className="font-sans text-2xl text-purple dark:text-saffron font-bold"><CountUp end={25} suffix="+" duration={2000} /></span>
                  <span className="font-sans text-xs text-gray-500 uppercase tracking-widest mt-1">Years Wisdom</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-2xl text-purple dark:text-saffron font-bold"><CountUp end={150} suffix="+" duration={2500} /></span>
                  <span className="font-sans text-xs text-gray-500 uppercase tracking-widest mt-1">Vedic Priests</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-2xl text-purple dark:text-saffron font-bold"><CountUp end={99.8} decimals={1} suffix="%" duration={3000} /></span>
                  <span className="font-sans text-xs text-gray-500 uppercase tracking-widest mt-1">Trust Score</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-2xl text-purple dark:text-saffron font-bold"><CountUp end={12} suffix="M+" duration={3500} /></span>
                  <span className="font-sans text-xs text-gray-500 uppercase tracking-widest mt-1">Moments Decoded</span>
                </div>
              </motion.div>
            </motion.div>

          ) : (

            /* IMAGE BANNER SLIDES */
            <motion.div
              key={`image-slide-${currentBanner.id}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-0 h-full"
            >
              <div className="flex flex-col justify-center space-y-6 text-left relative z-20 lg:pr-12">
                <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-midnight dark:text-white tracking-tight transition-colors duration-1000">
                  {currentBanner.titlePrefix}
                  <span className={currentBanner.accent}>{currentBanner.titleHighlight}</span>
                </h1>

                <p className="font-body text-base md:text-lg text-gray-800 dark:text-white/90 leading-relaxed font-medium max-w-lg transition-colors duration-1000">
                  {currentBanner.description}
                </p>

                <div className="pt-2">
                  <button className="px-8 py-3.5 rounded-lg bg-midnight text-white dark:bg-white dark:text-black font-sans text-sm font-bold shadow-lg hover:opacity-90 transition-all">
                    {currentBanner.buttonText}
                  </button>
                </div>
              </div>

              <div className="relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0 z-10 h-full">
                <img
                  src={currentBanner.image}
                  alt={currentBanner.titlePrefix}
                  className="object-cover max-h-[400px] md:max-h-[550px] w-full max-w-[450px] drop-shadow-2xl rounded-3xl"
                />
              </div>
            </motion.div>

          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
