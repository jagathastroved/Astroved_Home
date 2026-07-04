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
    <section className="py-24 bg-cream/30 dark:bg-[#0a0514] transition-colors duration-500 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 dark:bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400 font-bold block mb-4">
            Cosmic Timing Engine
          </span>
          <ScrollFloat containerClassName="font-ui text-4xl md:text-5xl text-midnight dark:text-cream mb-6 tracking-wide">
            Navigate your life with absolute precision.
          </ScrollFloat>
          <p className="font-body text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Discover your exact cosmic phase. Push forward aggressively during your peak expansion cycles, and rest or reflect during your karmic clearing periods.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">

          {/* Large Hero Card (Card 1) */}
          <div className="md:col-span-2 md:row-span-2 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-amber-100 to-white dark:from-amber-900/20 dark:to-midnight border border-amber-200 dark:border-amber-500/20 shadow-xl dark:shadow-2xl flex flex-col justify-between group cursor-pointer hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-white/10 flex items-center justify-center text-amber-500 mb-8 shadow-sm group-hover:-translate-y-2 transition-transform duration-300">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="font-ui text-3xl md:text-4xl text-midnight dark:text-white font-medium leading-tight mb-3">
                Identify Your Current Phase
              </h3>
              <p className="font-body text-gray-600 dark:text-gray-400">
                Instantly calculate your current cosmic phase and know exactly whether to aggressively build or patiently wait out the storm.
              </p>
            </div>

            <div className="mt-12 relative z-10">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-midnight dark:bg-amber-500 text-white dark:text-midnight font-ui text-xs uppercase tracking-widest font-bold group-hover:px-8 transition-all">
                Check Phase <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Small Cards */}
          {CARDS.slice(1).map((card, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[2rem] bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-lg hover:shadow-xl backdrop-blur-md cursor-pointer transition-all duration-300 group hover:-translate-y-1 flex flex-col"
            >
              <div className={`w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center ${card.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <card.icon className="w-6 h-6 stroke-[1.5]" />
              </div>

              <h3 className="font-ui text-lg text-midnight dark:text-cream font-medium leading-snug mb-1">
                {card.title}
              </h3>

              <p className="font-mono text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-6">
                {card.subtitle}
              </p>

              <div className={`mt-auto text-xs font-ui uppercase tracking-widest font-bold flex items-center gap-1 ${card.color}`}>
                {card.linkText}
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
