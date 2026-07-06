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
}

const BANNERS: BannerItem[] = [
  {
    id: 1,
    type: "image",
    titlePrefix: "Personalized Solutions ",
    titleHighlight: "for Every Stage of Life",
    description: "Guidance. Remedies. Rituals. Peace of Mind.\nAll at AstroVed.",
    buttonText: "Explore Now >",
    image: banner_1,
    bg: "bg-[#faf9f6] dark:bg-[#0b1120]",
    titlePrefixAccent: "text-gold",
    accent: "text-white block mt-1",
    align: "left"
  },
  {
    id: 2,
    type: "image",
    badge: "SPECIAL OFFER",
    titlePrefix: "Akshaya Tritiya Special",
    titleHighlight: "",
    hugeText: "FLAT 25% OFF",
    description: "on All Pujas & Religious Services",
    buttonText: "Book Now >",
    image: banner_2,
    bg: "bg-purple-50 dark:bg-[#111827]",
    accent: "text-purple-600 dark:text-[#a855f7]",
    align: "left"
  },
  {
    id: 3,
    type: "image",
    badge: "SPECIAL OFFER",
    titlePrefix: "Energized Products",
    titleHighlight: "",
    hugeText: "UP TO 20% OFF",
    description: "Bring Positivity. Invite Blessings.",
    buttonText: "Shop Now >",
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
    buttonText: "Explore Tours >",
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
    <div className="w-full px-4 sm:px-6 py-6 md:py-8 lg:py-10 max-w-[1400px] mx-auto">
      <section
        className={`relative w-full bg-[#0b1120] rounded-[2.5rem] md:rounded-[3rem] shadow-2xl overflow-hidden transition-colors duration-1000 min-h-[500px] md:min-h-[600px] flex items-center justify-center`}
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
            <div className={`absolute top-0 bottom-0 w-full md:w-[65%] lg:w-[60%] ${currentBanner.align === 'right' ? 'left-0' : 'right-0'}`}>
              <img 
                src={currentBanner.image} 
                alt={currentBanner.titlePrefix || 'Astroved Banner'} 
                className="w-full h-full object-cover"
                style={{
                  WebkitMaskImage: `linear-gradient(to ${currentBanner.align === 'right' ? 'right' : 'left'}, black 50%, transparent 100%)`,
                  maskImage: `linear-gradient(to ${currentBanner.align === 'right' ? 'right' : 'left'}, black 50%, transparent 100%)`
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Carousel Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center border border-white/10 transition-colors"
      >
        <ChevronLeft className="w-5 h-5 text-cream/70" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center border border-white/10 transition-colors"
      >
        <ChevronRight className="w-5 h-5 text-cream/70" />
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

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-10 lg:py-12 md:py-16">
        <AnimatePresence mode="wait">

          {/* IMAGE BANNER SLIDES */}
          <motion.div
            key={`image-slide-${currentBanner.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`flex flex-col justify-center space-y-6 relative z-20 h-full max-w-4xl ${currentBanner.align === 'right' ? 'items-end text-right ml-auto mr-0' : currentBanner.align === 'left' ? 'items-start text-left mr-auto ml-0' : 'items-center text-center mx-auto'}`}
          >
            {currentBanner.badge && (
              <span className="inline-block px-3 py-1 bg-gold/90 text-black text-xs font-bold uppercase tracking-wider rounded-sm mb-2">
                {currentBanner.badge}
              </span>
            )}
            <h1 className={`font-sans font-bold leading-tight tracking-tight transition-colors duration-1000 ${currentBanner.titlePrefixAccent || 'text-white'} ${currentBanner.size === 'small' ? 'text-2xl md:text-3xl lg:text-4xl max-w-2xl' : 'text-3xl md:text-4xl lg:text-5xl max-w-3xl'}`}>
              {currentBanner.titlePrefix}
              <span className={currentBanner.accent}>{currentBanner.titleHighlight}</span>
            </h1>

            {currentBanner.hugeText && (
              <div className="font-sans font-bold tracking-tighter my-2 flex items-baseline gap-3 uppercase drop-shadow-lg">
                {currentBanner.hugeText.split(' ').map((word, i) => {
                  const isNumber = word.includes('%') || word.includes('₹') || !isNaN(parseInt(word));
                  return (
                    <span key={i} className={isNumber ? 'text-gold text-5xl md:text-6xl lg:text-7xl' : 'text-white text-2xl md:text-3xl lg:text-4xl'}>
                      {word}
                    </span>
                  );
                })}
              </div>
            )}
            
            <p className={`font-body text-base md:text-lg text-gray-200 leading-relaxed font-light ${currentBanner.size === 'small' ? 'max-w-xl' : 'max-w-2xl'}`}>
              {currentBanner.description}
            </p>

            <div className="pt-4">
              <button
                className="px-8 py-4 rounded-full bg-gradient-to-r from-gold via-saffron to-gold text-black font-sans text-sm tracking-widest uppercase font-bold hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] active:scale-95 transition-all"
              >
                {currentBanner.buttonText}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      </section>
    </div>
  );
}
