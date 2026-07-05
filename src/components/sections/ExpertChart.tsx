import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollFloat from '../ui/ScrollFloat';
import { AnimatedGrid } from '../ui/AnimatedGrid';
import { AnimatedCard } from '../ui/AnimatedCard';
import { consultation, palm_leaf, personal_report } from '../../assets/vedic_master/index';

const EXPERTS = [
  {
    badgeText: "Consultation",
    title: "Live Master Consultations",
    desc: "Speak face-to-face with a senior Vedic scholar. Receive immediate clarity on your career, relationships, and immediate planetary remedies.",
    cta: "Book Consultation",
    image: consultation,
    titleColor: "text-blue-700 dark:text-blue-400"
  },
  {
    badgeText: "Nadi Reading",
    title: "Ancient Palm Leaf Readings",
    desc: "Access the precise karmic blueprints inscribed for you by the Maharishis thousands of years ago, complete with soul-cleansing remedies.",
    cta: "Unlock Destiny",
    image: palm_leaf,
    titleColor: "text-emerald-700 dark:text-emerald-400"
  },
  {
    badgeText: "Written Report",
    title: "Personal Reports",
    desc: "Written reports on your career, marriage and wealth, and the dasha (planetary cycle) periods shaping the years ahead.",
    cta: "See reports",
    image: personal_report,
    titleColor: "text-rose-700 dark:text-rose-400"
  }
];

export function ExpertChart() {
  return (
    <section className="py-12 md:py-16 bg-ivory dark:bg-[#0c0f24] transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="font-2xl uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400 font-bold block mb-4">
            Consult Our Vedic Masters
          </span>
          <ScrollFloat containerClassName="font-sans text-4xl md:text-5xl text-midnight dark:text-cream mb-6 tracking-wide">
            Your destiny, decoded by authentic scholars.
          </ScrollFloat>
          <p className="font-body text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Connect directly with our most senior astrologers in India. Receive highly personalized guidance, exhaustive transit reports, or unlock your ancient Nadi leaf to conquer your karma.
          </p>
          <a href="#" className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 font-sans text-xs uppercase tracking-widest font-bold hover:gap-3 transition-all">
            Explore our master services <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Premium Image Card 3-Column Layout */}
        <AnimatedGrid className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 relative z-10">
          {EXPERTS.map((item, idx) => (
            <AnimatedCard
              key={idx}
              className="rounded-[2.5rem] flex flex-col group cursor-pointer overflow-hidden relative h-[450px] border border-black/5 dark:border-white/10 shadow-xl bg-[#0a0e17]"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-out"
                />
                {/* Always use a dark gradient at the bottom so white text is visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="relative z-10 p-8 md:p-10 flex flex-col justify-end flex-1 h-full">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col">
                  {/* Badge */}
                  <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-mono text-[10px] uppercase tracking-widest backdrop-blur-md mb-4 w-fit">
                    {item.badgeText}
                  </span>

                  {/* Title */}
                  <h3 className="font-sans text-2xl md:text-3xl text-white font-medium leading-tight mb-4 drop-shadow-md">
                    {item.title}
                  </h3>

                  {/* Description - Revealed on hover */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                    <div className="overflow-hidden">
                      <p className="font-body text-white/90 text-sm leading-relaxed mb-6">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="inline-flex items-center gap-2 text-white font-sans text-[10px] uppercase tracking-widest font-bold group-hover:text-amber-400 transition-colors mt-2">
                    {item.cta} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </AnimatedGrid>

      </div>
    </section>
  );
}
