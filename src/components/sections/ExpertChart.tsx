import React from 'react';
import { ArrowRight, Grid, FileText, ScrollText } from 'lucide-react';

const EXPERTS = [
  {
    icon: Grid,
    title: "Live Master Consultations",
    desc: "Speak face-to-face with a senior Vedic scholar. Receive immediate clarity on your career, relationships, and immediate planetary remedies.",
    cta: "Book Consultation",
    accent: "from-blue-600/20 to-purple-600/20",
    iconColor: "text-blue-500"
  },
  {
    icon: FileText,
    title: "Comprehensive Transit Reports",
    desc: "Exhaustive, custom-written manuals detailing your major planetary shifts (Dashas) and exact timelines for the next decade.",
    cta: "Request Report",
    accent: "from-amber-600/20 to-orange-600/20",
    iconColor: "text-amber-500"
  },
  {
    icon: ScrollText,
    title: "Ancient Palm Leaf Readings",
    desc: "Access the precise karmic blueprints inscribed for you by the Maharishis thousands of years ago, complete with soul-cleansing remedies.",
    cta: "Unlock Destiny",
    accent: "from-emerald-600/20 to-teal-600/20",
    iconColor: "text-emerald-500"
  }
];

export function ExpertChart() {
  return (
    <section className="py-24 bg-ivory dark:bg-[#0c0f24] transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400 font-bold block mb-4">
            Consult Our Vedic Masters
          </span>
          <h2 className="font-ui text-4xl md:text-5xl text-midnight dark:text-cream mb-6 tracking-wide">
            Your destiny, decoded by <em className="text-amber-600 dark:text-amber-400 font-medium italic">authentic scholars.</em>
          </h2>
          <p className="font-body text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Connect directly with our most senior astrologers in India. Receive highly personalized guidance, exhaustive transit reports, or unlock your ancient Nadi leaf to conquer your karma.
          </p>
          <a href="#" className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 font-ui text-xs uppercase tracking-widest font-bold hover:gap-3 transition-all">
            Explore our master services <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Minimalist Premium 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {EXPERTS.map((item, idx) => (
            <div 
              key={idx}
              className="group relative rounded-[2rem] p-8 md:p-10 bg-white/40 dark:bg-[#110c1c] border border-black/5 dark:border-white/5 shadow-sm hover:shadow-2xl dark:shadow-none hover:bg-white dark:hover:bg-[#1a1429] transition-all duration-500 overflow-hidden cursor-pointer flex flex-col h-full"
            >
              {/* Top Accent Glow */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className="mb-10 relative z-10">
                <div className={`w-16 h-16 rounded-3xl bg-black/5 dark:bg-black/40 flex items-center justify-center border border-black/5 dark:border-white/5 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 ${item.iconColor}`}>
                  <item.icon className="w-8 h-8 stroke-[1.5]" />
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex-grow flex flex-col">
                <h3 className="font-ui text-2xl text-midnight dark:text-cream font-medium leading-tight mb-4 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-light flex-grow mb-12">
                  {item.desc}
                </p>
                
                {/* Minimalist CTA */}
                <div className="mt-auto flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-semibold text-gray-500 dark:text-gray-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {item.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
