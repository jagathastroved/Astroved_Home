import React from 'react';
import { ArrowRight } from 'lucide-react';
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
    titleColor: "text-purple-700 dark:text-purple-400"
  },
  {
    badgeText: "Nadi Reading",
    title: "Ancient Palm Leaf Readings",
    desc: "Access the precise karmic blueprints inscribed for you by the Maharishis thousands of years ago, complete with soul-cleansing remedies.",
    cta: "Unlock Destiny",
    image: palm_leaf,
    titleColor: "text-purple-600 dark:text-amber-400"
  },
  {
    badgeText: "Written Report",
    title: "Personal Reports",
    desc: "Written reports on your career, marriage and wealth, and the dasha (planetary cycle) periods shaping the years ahead.",
    cta: "See reports",
    image: personal_report,
    titleColor: "text-purple-700 dark:text-purple-400"
  }
];

export function ExpertChart() {
  return (
    <section className="py-2 md:py-4 transition-colors duration-500 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="font-sans text-4xl sm:text-5xl text-midnight dark:text-cream leading-tight mb-4">
            Personalized <em className="text-amber-600 dark:text-amber-400 italic">Guidance.</em>
          </h2>
          {/* <p className="font-body text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Connect directly with our most senior astrologers in India. Receive highly personalized guidance, exhaustive transit reports, or unlock your ancient Nadi leaf to conquer your karma.
          </p> */}
          {/* <a href="#" className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 font-sans text-xs uppercase tracking-widest font-bold hover:gap-3 transition-all">
            Explore our master services <ArrowRight className="w-3.5 h-3.5" />
          </a> */}
        </div>

        {/* Premium Image Card 3-Column Layout */}
        <AnimatedGrid className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 relative z-10">
          {EXPERTS.map((item, idx) => (
            <AnimatedCard
              key={idx}
              className="rounded-[2.5rem] flex flex-col group cursor-pointer overflow-hidden relative min-h-[450px] md:h-[450px] border border-black/5 dark:border-amber-500/40 dark:shadow-[0_0_15px_rgba(245,158,11,0.2)] shadow-xl hover:border-[#facc15]/50 hover:shadow-[0_0_40px_rgba(250,204,21,0.2)] transition-all duration-500 bg-white dark:bg-[#0a0e17]"
            >
              {/* Image Container: Stacked on mobile, absolute overlay on desktop */}
              <div className="relative md:absolute inset-0 z-0 h-[250px] md:h-full shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-out"
                />
                {/* Gradient: only needed on desktop where text overlays the image */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content Container: Below image on mobile, over image on desktop */}
              <div className="relative z-10 p-8 md:p-10 flex flex-col justify-end flex-1 md:h-full bg-white dark:bg-[#0a0e17] md:bg-transparent md:dark:bg-transparent">
                <div className="lg:translate-y-8 lg:group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col">
                  {/* Badge */}
                  <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/10 md:bg-white/10 md:dark:bg-white/10 border border-black/10 dark:border-white/20 md:border-white/20 md:dark:border-white/20 text-midnight dark:text-white md:text-white md:dark:text-white font-mono text-[10px] uppercase tracking-widest backdrop-blur-md mb-4 w-fit">
                    {item.badgeText}
                  </span>

                  {/* Title */}
                  <h3 className={`font-sans text-2xl md:text-3xl ${item.titleColor} md:text-white md:dark:text-white group-hover:text-amber-400 md:group-hover:text-amber-400 dark:group-hover:text-amber-400 font-medium leading-tight mb-2 md:mb-4 drop-shadow-md transition-colors`}>
                    {item.title}
                  </h3>

                  {/* Description - Always visible on mobile, revealed on hover on desktop */}
                  <div className="grid grid-rows-[1fr] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                    <div className="overflow-hidden">
                      <p className="font-body text-gray-700 dark:text-white/90 md:text-white/90 md:dark:text-white/90 text-sm leading-relaxed mb-6 mt-4 md:mt-0">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="inline-flex items-center gap-2 text-midnight dark:text-white md:text-white md:dark:text-white font-sans text-[10px] uppercase tracking-widest font-bold group-hover:text-amber-500 md:group-hover:text-amber-400 transition-colors mt-auto md:mt-2">
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
