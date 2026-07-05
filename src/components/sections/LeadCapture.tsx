import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Star, ArrowRight, Check } from 'lucide-react';
import { AnimatedGrid } from '../ui/AnimatedGrid';
import { AnimatedCard } from '../ui/AnimatedCard';

export function LeadCapture() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section className="relative py-16 px-6 overflow-hidden border-t border-black/5 dark:border-white/5 bg-ivory dark:bg-midnight transition-colors duration-500" id="membership">

      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-amber-500/10 dark:bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-20">

        {/* Headers */}
        <div className="text-center mb-8 relative z-10">
          <span className="font-2xl uppercase tracking-[0.25em] text-amber-600 dark:text-amber-500 font-bold bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-3 h-3" /> Select Your Path
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl text-midnight dark:text-cream leading-tight">
            Premium <em className="text-amber-600 dark:text-amber-400 italic">Membership.</em>
          </h2>
          <p className="font-body text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-4 leading-relaxed max-w-lg mx-auto">
            Choose the membership plan that best fits your needs, from simple daily guidance to full priest support.
          </p>

          {/* Monthly / Yearly Toggle */}
          <div className="flex items-center justify-center mt-10">
            <div className="bg-black/5 dark:bg-white/5 backdrop-blur-md p-1.5 rounded-full inline-flex border border-black/5 dark:border-white/10">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-full font-sans text-xs sm:text-sm uppercase tracking-widest font-semibold transition-all ${!isYearly
                  ? 'bg-white dark:bg-[#1a1f3c] text-midnight dark:text-cream shadow-md'
                  : 'text-gray-500 dark:text-gray-400 hover:text-midnight dark:hover:text-cream'
                  }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-full font-sans text-xs sm:text-sm uppercase tracking-widest font-semibold transition-all flex items-center gap-2 ${isYearly
                  ? 'bg-white dark:bg-[#1a1f3c] text-midnight dark:text-cream shadow-md'
                  : 'text-gray-500 dark:text-gray-400 hover:text-midnight dark:hover:text-cream'
                  }`}
              >
                Yearly <span className="bg-amber-500 text-white dark:text-midnight text-[9px] px-2 py-0.5 rounded-full">Save 20%</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3-Column Pricing Grid */}
        <AnimatedGrid className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch relative z-10">

          {/* Bronze Tier (Free Lead Capture) */}
          <AnimatedCard className="bg-white/60 dark:bg-[#110c1c]/60 backdrop-blur-md border border-black/5 dark:border-white/5 rounded-3xl p-8 sm:p-10 shadow-sm transition-colors duration-500 flex flex-col h-full relative overflow-hidden group">
            {/* Subtle highlight */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-[40px] pointer-events-none transition-all group-hover:bg-amber-500/10" />

            <h3 className="font-sans text-xl text-midnight dark:text-cream font-medium">Bronze Membership</h3>
            <p className="font-body text-xs text-gray-500 dark:text-gray-400 mt-2">On us for 3 months</p>

            <div className="mt-6 mb-8 flex items-baseline gap-2">
              <span className="text-4xl font-sans text-midnight dark:text-cream font-semibold">Free</span>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">/ 3 mo</span>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {[
                'Daily horoscopes',
                'Members-only offers',
                'Vedic guidance chosen for you',
                'No payment, no catch'
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-gray-400 dark:text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="font-body text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Input Form */}
            <div className="space-y-3 mb-4 w-full">
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-black/5 dark:bg-white/5 border border-transparent focus:border-amber-500/50 rounded-xl px-4 py-3 font-body text-xs text-midnight dark:text-cream outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-black/5 dark:bg-white/5 border border-transparent focus:border-amber-500/50 rounded-xl px-4 py-3 font-body text-xs text-midnight dark:text-cream outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600"
              />
            </div>

            <button className="w-full py-3.5 rounded-xl border border-black/10 dark:border-white/10 font-sans text-xs uppercase tracking-widest font-bold text-midnight dark:text-cream hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              Activate Membership
            </button>

            <div className="text-center mt-4 flex items-center justify-center gap-1.5 opacity-80">
              <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
              <span className="text-[9px] font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">4.8★ from 12k+ reviews</span>
            </div>
          </AnimatedCard>

          {/* Seeker Tier */}
          <AnimatedCard className="bg-white/60 dark:bg-[#110c1c]/60 backdrop-blur-md border border-black/5 dark:border-white/5 rounded-3xl p-8 sm:p-10 shadow-sm transition-colors duration-500 flex flex-col h-full">
            <h3 className="font-sans text-xl text-midnight dark:text-cream font-medium">Seeker Tier</h3>
            <p className="font-body text-xs text-gray-500 dark:text-gray-400 mt-2">Essential astrological guidance</p>

            <div className="mt-6 mb-8 flex items-baseline gap-2">
              <span className="text-4xl font-sans text-midnight dark:text-cream font-semibold">{isYearly ? '₹8,999' : '₹999'}</span>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">/{isYearly ? 'yr' : 'mo'}</span>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {['Daily Best Times', 'Basic Planetary Alerts', 'Community Access', 'Monthly Horoscope'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="font-body text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-4 mt-auto rounded-full border border-black/10 dark:border-white/10 font-sans text-xs uppercase tracking-widest font-bold text-midnight dark:text-cream hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              Begin Journey
            </button>
          </AnimatedCard>

          {/* Premium Tier */}
          <AnimatedCard className="bg-gradient-to-b from-amber-500/10 to-amber-500/5 dark:from-amber-500/20 dark:to-transparent backdrop-blur-xl border border-amber-500/30 rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden transition-colors duration-500 flex flex-col h-full">

            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 blur-[50px] pointer-events-none" />

            <div className="absolute top-4 right-4 bg-amber-500 text-white dark:text-midnight font-xl uppercase tracking-widest px-3 py-1 rounded-full font-bold shadow-md">
              Most Popular
            </div>

            <h3 className="font-sans text-xl text-midnight dark:text-cream font-medium">Premium Alliance</h3>
            <p className="font-body text-xs text-amber-700 dark:text-amber-400 mt-2">Maximum spiritual support</p>

            <div className="mt-6 mb-8 flex items-baseline gap-2">
              <span className="text-5xl font-sans text-midnight dark:text-cream font-bold">{isYearly ? '₹22,999' : '₹2,499'}</span>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">/{isYearly ? 'yr' : 'mo'}</span>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {['Everything in Seeker Tier', '1 Monthly Temple Ritual', 'Custom AI Chart Readings', 'Talk to a Priest Anytime', 'Priority Event Seating'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <span className="font-body text-sm font-medium text-midnight dark:text-cream">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-4 mt-auto rounded-full bg-midnight dark:bg-white text-white dark:text-midnight font-sans text-xs uppercase tracking-widest font-bold hover:bg-amber-600 dark:hover:bg-amber-400 hover:text-white transition-colors shadow-lg shadow-amber-500/20">
              Join The Alliance
            </button>
          </AnimatedCard>

        </AnimatedGrid>

      </div>
    </section>
  );
}
