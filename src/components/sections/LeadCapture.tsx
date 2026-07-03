import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles } from 'lucide-react';

export function LeadCapture() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section className="relative py-32 px-6 overflow-hidden border-t border-black/5 dark:border-white/5 bg-ivory dark:bg-midnight transition-colors duration-500" id="membership">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-amber-500/10 dark:bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-20">
        
        <div className="text-center mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-amber-600 dark:text-amber-500 font-bold bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-3 h-3" /> Consecrated Alliance
          </span>
          <h2 className="font-ui text-4xl sm:text-5xl text-midnight dark:text-cream leading-tight">
            Premium <em className="text-amber-600 dark:text-amber-400 italic">Membership.</em>
          </h2>
          <p className="font-body text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-4 leading-relaxed max-w-lg mx-auto">
            Unlock advanced astrological ephemeris, daily timing radars, and remote temple ritual manifestations.
          </p>

          {/* Monthly / Yearly Toggle */}
          <div className="flex items-center justify-center mt-10">
            <div className="bg-black/5 dark:bg-white/5 backdrop-blur-md p-1.5 rounded-full inline-flex border border-black/5 dark:border-white/10">
              <button 
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-full font-ui text-xs sm:text-sm uppercase tracking-widest font-semibold transition-all ${
                  !isYearly 
                    ? 'bg-white dark:bg-[#1a1f3c] text-midnight dark:text-cream shadow-md' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-midnight dark:hover:text-cream'
                }`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-full font-ui text-xs sm:text-sm uppercase tracking-widest font-semibold transition-all flex items-center gap-2 ${
                  isYearly 
                    ? 'bg-white dark:bg-[#1a1f3c] text-midnight dark:text-cream shadow-md' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-midnight dark:hover:text-cream'
                }`}
              >
                Yearly <span className="bg-amber-500 text-white dark:text-midnight text-[9px] px-2 py-0.5 rounded-full">Save 20%</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
          
          {/* Basic Tier */}
          <div className="bg-white/60 dark:bg-[#110c1c]/60 backdrop-blur-md border border-black/5 dark:border-white/5 rounded-3xl p-8 sm:p-10 shadow-sm transition-colors duration-500">
            <h3 className="font-ui text-xl text-midnight dark:text-cream font-medium">Seeker Tier</h3>
            <p className="font-body text-xs text-gray-500 dark:text-gray-400 mt-2">Essential cosmic alignment</p>
            
            <div className="mt-6 mb-8 flex items-baseline gap-2">
              <span className="text-4xl font-ui text-midnight dark:text-cream font-semibold">{isYearly ? '₹8,999' : '₹999'}</span>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">/{isYearly ? 'yr' : 'mo'}</span>
            </div>

            <ul className="space-y-4 mb-10">
              {['Daily Auspicious Timing Radar', 'Basic Planetary Alerts', 'Community Access', 'Monthly Horoscope Overview'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="font-body text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-4 rounded-full border border-black/10 dark:border-white/10 font-ui text-xs uppercase tracking-widest font-bold text-midnight dark:text-cream hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              Begin Journey
            </button>
          </div>

          {/* Premium Tier */}
          <div className="bg-gradient-to-b from-amber-500/10 to-amber-500/5 dark:from-amber-500/20 dark:to-transparent backdrop-blur-xl border border-amber-500/30 rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden transition-colors duration-500">
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 blur-[50px] pointer-events-none" />
            
            <div className="absolute top-4 right-4 bg-amber-500 text-white dark:text-midnight font-mono text-[9px] uppercase tracking-widest px-3 py-1 rounded-full font-bold shadow-md">
              Most Popular
            </div>

            <h3 className="font-ui text-xl text-midnight dark:text-cream font-medium">Consecrated Alliance</h3>
            <p className="font-body text-xs text-amber-700 dark:text-amber-400 mt-2">Maximum spiritual leverage</p>
            
            <div className="mt-6 mb-8 flex items-baseline gap-2">
              <span className="text-5xl font-ui text-midnight dark:text-cream font-bold">{isYearly ? '₹22,999' : '₹2,499'}</span>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">/{isYearly ? 'yr' : 'mo'}</span>
            </div>

            <ul className="space-y-4 mb-10">
              {['Everything in Seeker Tier', '1 Monthly Remote Temple Ritual', 'Personalized Gemini 3.5 Chart Readings', 'Direct Access to Resident Priests', 'Priority Ritual Seating'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <span className="font-body text-sm font-medium text-midnight dark:text-cream">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-4 rounded-full bg-midnight dark:bg-white text-white dark:text-midnight font-ui text-xs uppercase tracking-widest font-bold hover:bg-amber-600 dark:hover:bg-amber-400 hover:text-white transition-colors shadow-lg shadow-amber-500/20">
              Join The Alliance
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
