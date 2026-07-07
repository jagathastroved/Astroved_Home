import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { banner_1, banner_2, banner_3, banner_4 } from '../../assets/Banner_image/index';

interface BannerItem {
  id: number;
  type: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  image: string;
  bg: string;
  titlePrefixAccent?: string;
  accent: string;
  align: string;
  badge?: string;
  hugeText?: string;
  size?: 'small' | 'large' | string;
  imageWidth?: string;
}

const BANNERS: BannerItem[] = [
  {
    id: 1,
    type: "image",
    titlePrefix: "Personalized Solutions ",
    titleHighlight: "for Every Stage of Life",
    description: "Guidance. Remedies. Rituals. Peace of Mind.\nAll at AstroVed.",
    buttonText: "Explore Now",
    image: banner_1,
    bg: "bg-[#faf9f6] dark:bg-[#0b1120]",
    titlePrefixAccent: "text-white",
    accent: "text-white block mt-1",
    align: "left",
    imageWidth: "w-[95%] lg:w-[90%]"
  },
  {
    id: 2,
    type: "image",
    badge: "SPECIAL OFFER",
    titlePrefix: "Akshaya Tritiya Special",
    titleHighlight: "",
    hugeText: "FLAT 25% OFF",
    description: "on All Pujas & Religious Services",
    buttonText: "Book Now",
    image: banner_2,
    bg: "bg-purple-50 dark:bg-[#111827]",
    accent: "text-purple-600 dark:text-[#a855f7]",
    align: "left",
    imageWidth: "w-[95%] lg:w-[90%]"
  },
  {
    id: 3,
    type: "image",
    badge: "SPECIAL OFFER",
    titlePrefix: "Energized Products",
    titleHighlight: "",
    hugeText: "UP TO 20% OFF",
    description: "Bring Positivity. Invite Blessings.",
    buttonText: "Shop Now",
    image: banner_3,
    bg: "bg-slate-50 dark:bg-slate-900",
    accent: "text-amber-600 dark:text-amber-400",
    align: "left"
  },
  {
    id: 4,
    type: "image",
    badge: "SPECIAL OFFER",
    titlePrefix: "Pilgrimage Tours",
    titleHighlight: "",
    hugeText: "Save Up to ₹3,000",
    description: "on Spiritual Journeys",
    buttonText: "Explore Tours",
    image: banner_4,
    bg: "bg-slate-50 dark:bg-slate-900",
    accent: "text-purple-600 dark:text-[#a855f7]",
    align: "right"
  }
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextSlide();
    if (distance < -minSwipeDistance) prevSlide();
  };

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
    <div className="w-full">
      <section
        className={`relative w-full bg-[#0b1120] shadow-2xl overflow-hidden transition-colors duration-1000 min-h-[420px] md:min-h-[600px] flex items-end justify-center touch-pan-y pb-16 md:pb-24`}
        id="hero-section"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEndHandler}
      >

        {/* Background Image & Gradient Blend */}
        <AnimatePresence>
          {currentBanner.image && (
            <motion.div
              key={`bg-${currentBanner.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 z-0"
            >
              <div className="absolute inset-0 bg-[#0b1120]" />

              {/* Desktop Background Image (Side-by-side fade) */}
              <div className={`hidden md:flex absolute top-0 bottom-0 ${currentBanner.imageWidth || 'w-[80%] lg:w-[75%]'} ${currentBanner.align === 'right' ? 'left-0' : 'right-0'} items-center justify-end`}>
                <img
                  src={currentBanner.image}
                  alt={currentBanner.titlePrefix || 'Astroved Banner'}
                  className="w-full h-full object-cover"
                  style={{
                    WebkitMaskImage: `linear-gradient(to ${currentBanner.align === 'right' ? 'right' : 'left'}, black 65%, transparent 100%)`,
                    maskImage: `linear-gradient(to ${currentBanner.align === 'right' ? 'right' : 'left'}, black 65%, transparent 100%)`
                  }}
                />
              </div>

              {/* Mobile Background Image (Full background) */}
              <div className="md:hidden absolute inset-0 pointer-events-none">
                <img
                  src={currentBanner.image}
                  alt={currentBanner.titlePrefix || 'Astroved Banner'}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/60" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Carousel Arrows */}
        <button
          onClick={prevSlide}
          className="flex absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/20 hover:bg-black/40 items-center justify-center border border-white/20 backdrop-blur-sm transition-colors"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="flex absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/20 hover:bg-black/40 items-center justify-center border border-white/20 backdrop-blur-sm transition-colors"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {BANNERS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                ? 'bg-white w-6'
                : 'bg-white/20 hover:bg-white/40 w-2'
                }`}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-4 md:py-6">
          <AnimatePresence mode="wait">

            {/* IMAGE BANNER SLIDES */}
            <motion.div
              key={`image-slide-${currentBanner.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`flex flex-col justify-center space-y-4 md:space-y-6 relative z-20 h-full max-w-[95%] md:max-w-4xl mx-auto ${currentBanner.align === 'right' ? 'items-center md:items-end text-center md:text-right md:ml-auto md:mr-0' : currentBanner.align === 'left' ? 'items-center md:items-start text-center md:text-left md:mr-auto md:ml-0' : 'items-center text-center'}`}
            >
              {currentBanner.badge && (
                <span className="inline-block px-3 py-1 bg-gold/90 text-black text-xs font-bold uppercase tracking-wider rounded-sm mb-2">
                  {currentBanner.badge}
                </span>
              )}
              <h1 className={`font-sans font-bold leading-tight tracking-tight transition-colors duration-1000 ${currentBanner.titlePrefixAccent || 'text-white'} ${currentBanner.size === 'small' ? 'text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-2xl' : 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl lg:max-w-4xl'}`}>
                {currentBanner.titlePrefix}
                <span className={currentBanner.accent}>{currentBanner.titleHighlight}</span>
              </h1>

              {currentBanner.hugeText && (
                <div className={`font-sans font-bold tracking-tighter my-2 flex flex-wrap items-baseline gap-2 md:gap-3 lg:gap-4 uppercase drop-shadow-lg ${currentBanner.align === 'right' ? 'justify-center md:justify-end' : currentBanner.align === 'left' ? 'justify-center md:justify-start' : 'justify-center'}`}>
                  {currentBanner.hugeText.split(' ').map((word, i) => {
                    const isNumber = word.includes('%') || word.includes('₹') || !isNaN(parseInt(word));
                    return (
                      <span key={i} className={isNumber ? 'text-gold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl' : 'text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'}>
                        {word}
                      </span>
                    );
                  })}
                </div>
              )}

              <p className={`font-body text-sm md:text-lg lg:text-xl xl:text-2xl text-gray-200 leading-relaxed font-light drop-shadow-md ${currentBanner.size === 'small' ? 'max-w-xl' : 'max-w-2xl lg:max-w-3xl'}`}>
                {currentBanner.description}
              </p>

              <div className="pt-4">
                <button
                  className="px-6 py-3 md:px-8 md:py-4 rounded-full bg-gradient-to-r from-gold via-saffron to-gold text-black font-sans text-xs md:text-sm tracking-widest uppercase font-bold hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  {currentBanner.buttonText}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
