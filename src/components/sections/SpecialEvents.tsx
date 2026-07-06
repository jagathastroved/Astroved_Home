import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Flame, Clock, CalendarDays, ArrowRight } from 'lucide-react';
import ScrollFloat from '../ui/ScrollFloat';
import { jupiter_welth, murugan_SE, rekease_old_karma } from '../../assets/Special_events/index';
const events = [
  {
    id: 1,
    title: "Muruga Fire Ritual",
    tagline: "Clear Obstacles from Your Path",
    deadline: "Closes Tonight",
    cta: "Join Now",
    image: murugan_SE,
    bgGradient: "from-orange-100 via-rose-50 to-purple-100 dark:from-orange-900/60 dark:via-red-900/60 dark:to-purple-900/60",
    iconColor: "text-orange-500 dark:text-orange-400"
  },
  {
    id: 2,
    title: "Lunar Eclipse Ritual",
    tagline: "Release Old Karma and Blocks",
    deadline: "Starts in 2 Days",
    cta: "Save My Spot",
    image: rekease_old_karma,
    bgGradient: "from-indigo-100 via-purple-50 to-fuchsia-100 dark:from-indigo-900/60 dark:via-purple-900/60 dark:to-fuchsia-900/60",
    iconColor: "text-purple-500 dark:text-purple-400"
  },
  {
    id: 3,
    title: "Jupiter Wealth Ritual",
    tagline: "Attract Money and Good Luck",
    deadline: "Limited Space",
    cta: "Secure Blessing",
    image: jupiter_welth,
    bgGradient: "from-amber-100 via-yellow-50 to-orange-100 dark:from-amber-900/60 dark:via-yellow-900/60 dark:to-orange-900/60",
    iconColor: "text-amber-500 dark:text-amber-400"
  }
];

export function SpecialEvents() {
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
    setCurrentIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="special-events" className="py-12 md:py-16 relative overflow-hidden transition-colors duration-500 z-10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-2xl uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400 font-bold block mb-4">
            SPECIAL EVENTS
          </span>
          <ScrollFloat containerClassName="font-sans text-4xl md:text-5xl text-midnight dark:text-cream mb-6 leading-tight">
            Powerful Fire Rituals at the Perfect Moment
          </ScrollFloat>
          <p className="font-body text-gray-700 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            These events are matched with this month's special planetary changes and festivals. Once the time passes, the chance is gone.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative group px-0 touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden rounded-[2.5rem] bg-[#0b0e14] border border-white/5 hover:border-[#facc15]/50 hover:shadow-[0_0_40px_rgba(250,204,21,0.2)] transition-all duration-500">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {events.map((ev) => (
                <div key={ev.id} className="w-full flex-shrink-0">
                  <div className="group/card flex flex-col md:flex-row min-h-[450px] relative">
                    
                    {/* Background Image (Desktop) */}
                    <div className="hidden md:block absolute top-0 bottom-0 left-0 w-[65%] overflow-hidden pointer-events-none">
                      <img
                        src={ev.image}
                        alt={ev.title}
                        className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-[1500ms] ease-out"
                        style={{
                          WebkitMaskImage: 'linear-gradient(to right, black 50%, transparent 100%)',
                          maskImage: 'linear-gradient(to right, black 50%, transparent 100%)'
                        }}
                      />
                    </div>

                    {/* Background Image (Mobile) */}
                    <div className="md:hidden absolute top-0 left-0 w-full h-[450px] overflow-hidden pointer-events-none">
                      <img
                        src={ev.image}
                        alt={ev.title}
                        className="w-full h-full object-cover"
                        style={{
                          WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                          maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
                        }}
                      />
                    </div>

                    {/* Content (Right side on desktop, Bottom/Center on mobile) */}
                    <div className="w-full md:w-[45%] ml-auto p-8 sm:p-12 md:p-16 flex flex-col justify-center items-center md:items-end text-center md:text-right z-10 relative pt-[360px] md:pt-16">
                      <div className="w-full">
                        <div className="flex items-center justify-center md:justify-end mb-4">
                          <span className={`font-serif italic text-xl md:text-2xl text-amber-500 dark:text-amber-400`}>
                            {ev.tagline}
                          </span>
                        </div>

                        <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-wider mb-6 leading-tight uppercase">
                          {ev.title}
                        </h3>

                        <p className="font-sans text-sm md:text-base text-gray-400 mb-8">
                          {ev.deadline}
                        </p>
                      </div>

                      <div className="mt-4 flex justify-center md:justify-end w-full">
                        <button className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-amber-400 text-black font-sans text-sm font-bold hover:bg-amber-500 transition-colors">
                          {ev.cta} <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons (Placed inside the card bounds) */}
          <button 
            onClick={prevSlide} 
            className="absolute left-2 md:left-4 top-[35%] md:top-1/2 -translate-y-1/2 bg-black/50 border border-white/20 p-2 md:p-3 rounded-full text-white hover:bg-black/80 hover:scale-110 transition-all z-20 backdrop-blur-sm"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute right-2 md:right-4 top-[35%] md:top-1/2 -translate-y-1/2 bg-black/50 border border-white/20 p-2 md:p-3 rounded-full text-white hover:bg-black/80 hover:scale-110 transition-all z-20 backdrop-blur-sm"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-8 right-16 flex justify-end gap-2 z-20">
            {events.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx 
                    ? 'bg-amber-400 w-6' 
                    : 'bg-white/30 hover:bg-white/50 w-1.5'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 font-sans text-sm uppercase tracking-widest font-semibold hover:gap-3 transition-all">
            View all special events <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
