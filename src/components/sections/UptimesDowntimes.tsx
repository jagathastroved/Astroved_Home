import React from 'react';
import { Activity, Sun, Moon, Home, Clock, ArrowRight } from 'lucide-react';
import ScrollFloat from '../ui/ScrollFloat';

const CARDS = [
  {
    icon: Activity,
    title: "Identify Your Current Phase",
    subtitle: "Expansion or Contraction",
    linkText: "Check Phase",
    color: "text-amber-500",
    bgHover: "hover:bg-amber-500/10"
  },
  {
    icon: Sun,
    title: "Your Benefic Influences",
    subtitle: "Active Cosmic Allies",
    linkText: "Reveal Planets",
    color: "text-orange-500",
    bgHover: "hover:bg-orange-500/10"
  },
  {
    icon: Moon,
    title: "Your Malefic Pressures",
    subtitle: "Current Karmic Blocks",
    linkText: "Reveal Planets",
    color: "text-purple-500",
    bgHover: "hover:bg-purple-500/10"
  },
  {
    icon: Home,
    title: "Optimal Property Windows",
    subtitle: "Real Estate Auspices",
    linkText: "Check Timing",
    color: "text-emerald-500",
    bgHover: "hover:bg-emerald-500/10"
  },
  {
    icon: Clock,
    title: "Next Power Manifestation",
    subtitle: "Upcoming Ritual Timing",
    linkText: "Find Window",
    color: "text-indigo-500",
    bgHover: "hover:bg-indigo-500/10"
  }
];

export function UptimesDowntimes() {
  return (
    <section className="py-12 md:py-16 bg-cream/30 dark:bg-[#0a0514] transition-colors duration-500 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 dark:bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400 font-bold block mb-4">
            Cosmic Timing Engine
          </span>
          <ScrollFloat containerClassName="font-sans text-4xl md:text-5xl text-midnight dark:text-cream mb-6 tracking-wide">
            Navigate your life with absolute precision.
          </ScrollFloat>
          <p className="font-body text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Discover the best times to act. Push forward during your peak days, and rest or reflect when the stars suggest a break.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mt-12">

          {/* Large Hero Card (Card 1) */}
          <div className="md:col-span-2 md:row-span-2 rounded-[2.5rem] flex flex-col group cursor-pointer transition-all duration-500 overflow-hidden relative h-auto md:min-h-[400px] border border-black/5 dark:border-white/10 shadow-xl bg-[#0a0e17]">
            <div className="relative h-[250px] md:absolute md:inset-0 md:h-full z-0 overflow-hidden shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=1000" 
                alt="Identify Your Current Phase" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-out" 
              />
              <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-[#0a0e17]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="relative z-10 p-8 md:p-12 flex flex-col justify-between flex-1 bg-[#0a0e17] md:bg-transparent">
              <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-mono text-[10px] uppercase tracking-widest backdrop-blur-md mb-6">
                Expansion or Contraction
              </span>
              <h3 className="font-sans text-3xl md:text-5xl font-bold text-cream leading-tight mb-4 drop-shadow-md">
                Identify Your Current Phase
              </h3>
              <p className="font-body text-cream/90 text-sm md:text-base mb-8 max-w-sm drop-shadow-sm leading-relaxed">
                Instantly calculate your current cosmic phase and know exactly whether to aggressively build or patiently wait out the storm.
              </p>

              <div className="inline-flex items-center gap-2 text-white font-sans text-xs uppercase tracking-widest font-bold hover:text-amber-400 group-hover:text-amber-400 transition-colors cursor-pointer w-fit">
                Check Phase <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Small Cards */}
          {[
            {
              title: "Your Benefic Influences",
              subtitle: "Active Cosmic Allies",
              linkText: "Reveal Planets",
              color: "text-orange-400",
              image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=800"
            },
            {
              title: "Your Malefic Pressures",
              subtitle: "Current Karmic Blocks",
              linkText: "Reveal Planets",
              color: "text-purple-400",
              image: "https://images.unsplash.com/photo-1532767153582-b1a0e5145009?auto=format&fit=crop&q=80&w=800"
            },
            {
              title: "Optimal Property Windows",
              subtitle: "Real Estate Auspices",
              linkText: "Check Timing",
              color: "text-emerald-400",
              image: "https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&q=80&w=800"
            },
            {
              title: "Next Power Manifestation",
              subtitle: "Upcoming Ritual Timing",
              linkText: "Find Window",
              color: "text-indigo-400",
              image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800"
            }
          ].map((card, idx) => (
            <div
              key={idx}
              className="rounded-[2rem] flex flex-col group cursor-pointer overflow-hidden relative h-auto md:min-h-[250px] border border-black/5 dark:border-white/10 shadow-lg bg-[#0a0e17]"
            >
              <div className="relative h-[150px] md:absolute md:inset-0 md:h-full z-0 overflow-hidden shrink-0">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-out" 
                />
                <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-[#0a0e17]/70 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="relative z-10 p-6 flex flex-col justify-between flex-1 bg-[#0a0e17] md:bg-transparent">
                <p className="font-mono text-[9px] text-white/70 uppercase tracking-widest mb-2">
                  {card.subtitle}
                </p>

                <h3 className={`font-sans text-xl ${card.color} font-medium leading-snug mb-6`}>
                  {card.title}
                </h3>

                <div className="text-[10px] text-white font-sans uppercase tracking-widest font-bold flex items-center gap-2 group-hover:text-white/80 transition-colors">
                  {card.linkText}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
