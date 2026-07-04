import React from 'react';
import { ArrowRight, ArrowUpRight, Flame, ShoppingBag } from 'lucide-react';
import { SpotlightCard } from '../SpotlightCard';
import { scrollToSection } from '../../utils/scroll';
import ScrollFloat from '../ui/ScrollFloat';

export function AuspiciousActions() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto z-10" id="auspicious-actions">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-600 dark:text-amber-500 block mb-3 font-semibold">
          Auspicious Involvements
        </span>
        <ScrollFloat containerClassName="font-sans text-4xl text-midnight dark:text-cream tracking-wide leading-tight">
          Subtle Planetary Corrections.
        </ScrollFloat>
        <p className="font-body text-gray-600 dark:text-gray-400 mt-4 leading-relaxed max-w-xl mx-auto">
          No heavy initial commitment required. Begin your journey by participating in our monthly group energy circles or incorporating sacred tools into your daily routine.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        
        {/* Card 1: Community Fire Lab */}
        <div className="group overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-orange-50/50 to-emerald-50/50 dark:from-[#0a0e17] dark:to-[#0f172a] border border-black/5 dark:border-white/10 shadow-2xl flex flex-col md:flex-row min-h-[450px]">
          {/* Background Image (Left side) */}
          <div className="w-full md:w-[45%] h-[300px] md:h-auto relative overflow-hidden shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1542606553-6ce4c16fcde3?auto=format&fit=crop&q=80&w=1000" 
              alt="Community Fire Lab" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
            />
            {/* Soft inner shadow on image edge */}
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-orange-50/50 dark:from-[#0f172a] to-transparent pointer-events-none hidden md:block" />
          </div>
          
          {/* Content (Right side) */}
          <div className="w-full md:w-[55%] p-10 sm:p-14 md:p-16 flex flex-col justify-center bg-white/40 dark:bg-transparent backdrop-blur-md">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-orange-500 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold">
                  Monthly Ritual
                </span>
              </div>
              
              <h3 className="font-sans text-4xl md:text-5xl lg:text-6xl text-midnight dark:text-cream font-medium tracking-tight mb-6">
                Community Fire Lab
              </h3>
              
              <p className="font-body text-sm md:text-base text-gray-600 dark:text-gray-400 mb-10 max-w-md leading-relaxed">
                Join our shared monthly planetary clearing session. Resident scholars write your intentions onto dry sandalwood bark and offer them to consecrated fire transits.
              </p>
            </div>

            <div>
              <button 
                onClick={() => scrollToSection('birth-form')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-midnight font-sans text-xs sm:text-sm uppercase tracking-widest font-bold hover:bg-orange-400 transition-colors shadow-[0_4px_14px_0_rgba(249,115,22,0.39)]"
              >
                Enroll Free Intake <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Card 2: Blessed Essentials Kit */}
        <div className="group overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-purple-50/50 to-blue-50/50 dark:from-[#0a0e17] dark:to-[#0f172a] border border-black/5 dark:border-white/10 shadow-2xl flex flex-col md:flex-row min-h-[450px]">
          {/* Background Image (Left side) */}
          <div className="w-full md:w-[45%] h-[300px] md:h-auto relative overflow-hidden shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1608408843575-d14620f32070?auto=format&fit=crop&q=80&w=1000" 
              alt="Blessed Essentials Kit" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
            />
            {/* Soft inner shadow on image edge */}
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-purple-50/50 dark:from-[#0f172a] to-transparent pointer-events-none hidden md:block" />
          </div>
          
          {/* Content (Right side) */}
          <div className="w-full md:w-[55%] p-10 sm:p-14 md:p-16 flex flex-col justify-center bg-white/40 dark:bg-transparent backdrop-blur-md">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-purple-500 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold">
                  AstroVed Shop
                </span>
              </div>
              
              <h3 className="font-sans text-4xl md:text-5xl lg:text-6xl text-midnight dark:text-cream font-medium tracking-tight mb-6">
                Blessed Essentials Kit
              </h3>
              
              <p className="font-body text-sm md:text-base text-gray-600 dark:text-gray-400 mb-10 max-w-md leading-relaxed">
                Receive natural mountain herbs, raw brass yantras, and pure copper vessels certified for placement in your northern living zones to stabilize planetary energy.
              </p>
            </div>

            <div>
              <a 
                href="https://www.astroved.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-purple-500 text-white font-sans text-xs sm:text-sm uppercase tracking-widest font-bold hover:bg-purple-400 transition-colors shadow-[0_4px_14px_0_rgba(168,85,247,0.39)]"
              >
                Browse Shop <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
