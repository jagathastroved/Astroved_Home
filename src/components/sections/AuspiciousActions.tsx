import React from 'react';
import { ArrowRight, ArrowUpRight, Flame, ShoppingBag } from 'lucide-react';
import { SpotlightCard } from '../SpotlightCard';
import { scrollToSection } from '../../utils/scroll';

export function AuspiciousActions() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto z-10" id="low-commit-actions">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-600 dark:text-amber-500 block mb-3 font-semibold">
          Auspicious Involvements
        </span>
        <h2 className="font-ui text-4xl text-midnight dark:text-cream tracking-wide leading-tight">
          Subtle Planetary <em className="text-amber-600 dark:text-amber-400 italic">Corrections.</em>
        </h2>
        <p className="font-body text-gray-600 dark:text-gray-400 mt-4 leading-relaxed max-w-xl mx-auto">
          No heavy initial commitment required. Begin your journey by participating in our monthly group energy circles or incorporating sacred tools into your daily routine.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Card 1: Community Fire Lab */}
        <SpotlightCard className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-[#110c1c] border border-black/5 dark:border-white/5 shadow-2xl transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
          {/* Decorative background glow */}
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/20 transition-colors duration-700" />
          
          <div className="p-10 sm:p-12 relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 dark:bg-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <Flame className="w-6 h-6" />
                </div>
                <span className="px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-midnight dark:text-white text-[10px] font-mono uppercase tracking-widest font-semibold backdrop-blur-md">
                  Monthly Ritual
                </span>
              </div>
              
              <h3 className="font-ui text-3xl text-midnight dark:text-white tracking-wide mb-4">
                Community Fire Lab
              </h3>
              
              <p className="font-body text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm mb-8">
                Join our shared monthly planetary clearing session. Resident scholars write your intentions onto dry sandalwood bark and offer them to consecrated fire transits.
              </p>
            </div>

            <div>
              <button 
                onClick={() => scrollToSection('birth-form')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-midnight dark:bg-white text-white dark:text-midnight hover:bg-amber-600 dark:hover:bg-amber-400 hover:text-white font-ui text-sm tracking-widest uppercase font-bold transition-all shadow-md flex items-center justify-center gap-3 group/btn"
              >
                Enroll Free Intake
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </SpotlightCard>

        {/* Card 2: Blessed Essentials Kit */}
        <SpotlightCard className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-[#110c1c] border border-black/5 dark:border-white/5 shadow-2xl transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
          {/* Decorative background glow */}
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/20 transition-colors duration-700" />
          
          <div className="p-10 sm:p-12 relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <span className="px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-midnight dark:text-white text-[10px] font-mono uppercase tracking-widest font-semibold backdrop-blur-md">
                  AstroVed Shop
                </span>
              </div>
              
              <h3 className="font-ui text-3xl text-midnight dark:text-white tracking-wide mb-4">
                Blessed Essentials Kit
              </h3>
              
              <p className="font-body text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm mb-8">
                Receive natural mountain herbs, raw brass yantras, and pure copper vessels certified for placement in your northern living zones to stabilize planetary energy.
              </p>
            </div>

            <div>
              <a 
                href="https://www.astroved.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-black/5 dark:bg-white/10 text-midnight dark:text-white hover:bg-black/10 dark:hover:bg-white/20 border border-black/5 dark:border-white/10 font-ui text-sm tracking-widest uppercase font-bold transition-all flex items-center justify-center gap-3 group/btn"
              >
                Browse Shop
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </SpotlightCard>

      </div>
    </section>
  );
}
