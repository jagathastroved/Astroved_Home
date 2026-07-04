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
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-ivory dark:bg-[#08040f] relative overflow-hidden transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 block mb-4">
            SPECIAL EVENTS
          </span>
          <ScrollFloat containerClassName="font-sans text-4xl md:text-5xl text-midnight dark:text-cream mb-6 leading-tight">
            Powerful Fire Rituals at the Perfect Moment
          </ScrollFloat>
          <p className="font-body text-gray-700 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            These events are matched with this month's special planetary changes and festivals. Once the time passes, the chance is gone.
          </p>
          <a href="#" className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 font-sans text-sm uppercase tracking-widest font-semibold hover:gap-3 transition-all">
            View all special events <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Premium Carousel */}
        <div className="relative rounded-3xl overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl bg-white dark:bg-white/5 backdrop-blur-xl group h-[400px] md:h-[500px]">

          {/* Slides Container */}
          <div className="relative w-full h-full flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {events.map((ev, idx) => (
              <div key={ev.id} className="w-full h-full flex-shrink-0 relative">
                <img src={ev.image} alt={ev.title} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" />
                {/* Background Gradient / Placeholder for image */}
                <div className={`absolute inset-0 bg-gradient-to-r ${ev.bgGradient} opacity-90 dark:opacity-80 mix-blend-normal dark:mix-blend-screen transition-colors duration-500`} />
                <div className="absolute inset-0 bg-white/40 dark:bg-black/60 transition-colors duration-500" /> {/* Responsive overlay for text readability */}

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end md:justify-center p-8 md:p-16 md:pl-[50%] z-20">
                  <div className="space-y-4 text-left">
                    <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold drop-shadow-sm dark:drop-shadow-md">
                      {ev.tagline}
                    </span>
                    <h3 className="font-sans text-4xl md:text-5xl text-midnight dark:text-cream font-bold drop-shadow-sm dark:drop-shadow-lg leading-tight transition-colors duration-500">
                      {ev.title}
                    </h3>
                    <p className="font-mono text-sm text-gray-700 dark:text-white/80 pb-4 drop-shadow-sm dark:drop-shadow transition-colors duration-500">
                      {ev.deadline}
                    </p>
                    <button className="px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-sans text-sm uppercase tracking-widest font-bold transition-all flex items-center gap-2 group/btn shadow-[0_4px_20px_rgba(245,158,11,0.3)] dark:shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                      {ev.cta}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Decorative Icon (Stand-in for the God/Image) */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 opacity-40 dark:opacity-30 pointer-events-none hidden md:block z-10 transition-opacity duration-500">
                  <Flame className={`w-96 h-96 ${ev.iconColor} blur-2xl transition-colors duration-500`} />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/50 dark:bg-black/30 backdrop-blur-md border border-black/10 dark:border-white/20 flex items-center justify-center text-midnight dark:text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white/80 dark:hover:bg-black/50 z-30 shadow-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/50 dark:bg-black/30 backdrop-blur-md border border-black/10 dark:border-white/20 flex items-center justify-center text-midnight dark:text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white/80 dark:hover:bg-black/50 z-30 shadow-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 right-6 md:right-16 md:left-auto flex items-center gap-2 z-30">
            {events.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-8 bg-amber-500 dark:bg-amber-400' : 'w-2 bg-black/20 hover:bg-black/40 dark:bg-white/40 dark:hover:bg-white/60'}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
