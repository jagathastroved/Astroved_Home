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
          <span className="font-2xl uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400 font-bold block mb-4">
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
        <div className="relative rounded-3xl overflow-hidden border border-black/10 shadow-2xl bg-[#0b0e14] group h-auto md:h-[500px]">

          {/* Slides Container */}
          <div className="relative w-full h-full flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {events.map((ev, idx) => (
              <div key={ev.id} className="w-full h-full flex-shrink-0 flex flex-col md:block relative bg-[#0b0e14]">
                <div className="relative w-full h-[280px] md:h-full md:absolute md:inset-0 md:w-[70%]">
                  <img src={ev.image} alt={ev.title} className="w-full h-full object-cover object-center md:object-left" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0e14]/60 to-[#0b0e14] md:bg-gradient-to-r md:via-[#0b0e14]/60 md:to-[#0b0e14] z-10" />
                </div>

                {/* Content */}
                <div className="relative md:absolute md:inset-y-0 md:right-0 flex flex-col justify-start md:justify-center p-8 pb-16 md:p-16 lg:p-24 w-full md:w-[50%] z-20">
                  <div className="flex flex-col items-start md:items-end text-left md:text-right space-y-4 md:space-y-3">

                    {/* Mobile Tagline Badge */}
                    <div className="md:hidden border border-white/20 rounded-full px-4 py-1.5 text-[10px] uppercase tracking-widest text-white/80 bg-white/5 font-mono mb-2">
                      {ev.tagline}
                    </div>
                    {/* Desktop Tagline */}
                    <span className="hidden md:block text-xs md:text-sm font-serif italic text-amber-500 font-medium">
                      {ev.tagline}
                    </span>

                    <h3 className={`font-sans md:font-serif text-3xl md:text-3xl lg:text-4xl font-bold md:uppercase tracking-wide md:tracking-wider leading-tight ${ev.iconColor} md:text-white md:dark:text-white`}>
                      {ev.title}
                    </h3>

                    <p className="font-sans text-[13px] md:text-xs text-gray-300 md:text-gray-400 pb-4 md:pb-2 leading-relaxed">
                      {ev.deadline}
                    </p>

                    {/* Desktop Button */}
                    <button className="hidden md:flex px-6 py-2.5 rounded-full bg-amber-400 hover:bg-amber-500 text-black font-sans text-xs font-bold transition-all items-center gap-2 group/btn">
                      {ev.cta}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    {/* Mobile Text Link */}
                    <button className="md:hidden pt-2 text-white font-sans text-[11px] uppercase font-bold tracking-widest flex items-center gap-2 group/btn">
                      {ev.cta} <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white transition-all hover:bg-black/60 z-30"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white transition-all hover:bg-black/60 z-30"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 right-8 md:right-12 flex items-center gap-2 z-30">
            {events.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-6 bg-amber-400' : 'w-1.5 bg-white/40 hover:bg-white/60'}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
