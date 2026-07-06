import React from 'react';
import { ArrowRight, ArrowUpRight, Flame, ShoppingBag } from 'lucide-react';
import { scrollToSection } from '../../utils/scroll';
import ScrollFloat from '../ui/ScrollFloat';
import { astroved_store, Community_Fire, Pilgrimage_Tours } from '../../assets/Auspicious_Involvements/index';

export function AuspiciousActions() {
  return (
    <section className="py-8 md:py-10 px-6 max-w-7xl mx-auto z-10" id="auspicious-actions">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="font-2xl uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400 font-bold block mb-4">
          Personalized Solutions
        </span>
        <ScrollFloat containerClassName="font-sans text-4xl text-midnight dark:text-cream tracking-wide leading-tight">
          Spiritual Solutions Designed for Every Need
        </ScrollFloat>
        <p className="font-body text-gray-600 dark:text-gray-400 mt-4 leading-relaxed max-w-xl mx-auto">
          No heavy initial commitment required. Begin your journey by participating in our monthly group energy circles or incorporating sacred tools into your daily routine.
        </p>
      </div>

      <div className="flex flex-col gap-8">

        {/* Card 1: Vedic Fire Ritual */}
        <div className="group overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-orange-50/50 to-emerald-50/50 dark:from-[#0a0e17] dark:to-[#0f172a] border border-black/5 dark:border-amber-500/40 dark:shadow-[0_0_15px_rgba(245,158,11,0.2)] shadow-2xl hover:border-[#facc15]/50 hover:shadow-[0_0_40px_rgba(250,204,21,0.2)] transition-all duration-500 flex flex-col md:flex-row h-auto md:h-[320px]">
          {/* Background Image (Left side) */}
          <div className="w-full md:w-[45%] h-[250px] md:h-auto relative overflow-hidden shrink-0">
            <img
              src={Community_Fire}
              alt="Vedic Fire Ritual"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
            />
            {/* Soft inner shadow on image edge */}
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-orange-50/50 dark:from-[#0f172a] to-transparent pointer-events-none hidden md:block" />
          </div>

          {/* Content (Right side) */}
          <div className="w-full md:w-[55%] p-6 md:p-8 lg:p-10 flex flex-col justify-center bg-white/40 dark:bg-transparent backdrop-blur-md">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-purple-500 font-2xl sm:text-xl uppercase tracking-[0.2em] font-bold">
                  Priest Services
                </span>
              </div>

              <h3 className="font-sans text-3xl md:text-4xl lg:text-5xl text-midnight dark:text-cream font-medium tracking-tight mb-4">
                Vedic Fire Ritual
              </h3>

              <p className="font-body text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6 max-w-md leading-relaxed">
                Book authentic Vedic rituals conducted by experienced priests for prosperity, health, relationships, and protection.
              </p>
            </div>

            <div>
              <button
                onClick={() => scrollToSection('birth-form')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-purple-500 text-white font-sans text-xs sm:text-sm uppercase tracking-widest font-bold hover:bg-purple-400 transition-colors shadow-[0_4px_14px_0_rgba(168,85,247,0.39)]"
              >
                Enroll Free Intake <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Card 2: Energized Products */}
        <div id="products" className="group overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-purple-50/50 to-blue-50/50 dark:from-[#0a0e17] dark:to-[#0f172a] border border-black/5 dark:border-amber-500/40 dark:shadow-[0_0_15px_rgba(245,158,11,0.2)] shadow-2xl hover:border-[#facc15]/50 hover:shadow-[0_0_40px_rgba(250,204,21,0.2)] transition-all duration-500 flex flex-col md:flex-row h-auto md:h-[320px]">
          {/* Background Image (Left side) */}
          <div className="w-full md:w-[45%] h-[250px] md:h-auto relative overflow-hidden shrink-0">
            <img
              src={astroved_store}
              alt="Energized Products"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
            />
            {/* Soft inner shadow on image edge */}
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-purple-50/50 dark:from-[#0f172a] to-transparent pointer-events-none hidden md:block" />
          </div>

          {/* Content (Right side) */}
          <div className="w-full md:w-[55%] p-6 md:p-8 lg:p-10 flex flex-col justify-center bg-white/40 dark:bg-transparent backdrop-blur-md">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-purple-500 font-2xl sm:text-xl uppercase tracking-[0.2em] font-bold">
                  AstroVed Shop
                </span>
              </div>

              <h3 className="font-sans text-3xl md:text-4xl lg:text-5xl text-midnight dark:text-cream font-medium tracking-tight mb-4">
                Energized Products
              </h3>

              <p className="font-body text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6 max-w-md leading-relaxed">
                Spiritually energized products blessed through traditional rituals to attract positive energies into your life.
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

        {/* Card 3: Pilgrimage Tours */}
        <div id="pilgrimages" className="group overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-[#0a0e17] dark:to-[#0f172a] border border-black/5 dark:border-amber-500/40 dark:shadow-[0_0_15px_rgba(245,158,11,0.2)] shadow-2xl hover:border-[#facc15]/50 hover:shadow-[0_0_40px_rgba(250,204,21,0.2)] transition-all duration-500 flex flex-col md:flex-row h-auto md:h-[320px]">
          {/* Background Image (Left side) */}
          <div className="w-full md:w-[45%] h-[250px] md:h-auto relative overflow-hidden shrink-0">
            <img
              src={Pilgrimage_Tours}
              alt="Holy Temples"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
            />
            {/* Soft inner shadow on image edge */}
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-blue-50/50 dark:from-[#0f172a] to-transparent pointer-events-none hidden md:block" />
          </div>

          {/* Content (Right side) */}
          <div className="w-full md:w-[55%] p-6 md:p-8 lg:p-10 flex flex-col justify-center bg-white/40 dark:bg-transparent backdrop-blur-md">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-purple-500 font-2xl sm:text-xl uppercase tracking-[0.2em] font-bold">
                  Pilgrimage Tours
                </span>
              </div>

              <h3 className="font-sans text-3xl md:text-4xl lg:text-5xl text-midnight dark:text-cream font-medium tracking-tight mb-4">
                Holy Temples
              </h3>

              <p className="font-body text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6 max-w-md leading-relaxed">
                Experience spiritually guided pilgrimages to sacred temples with carefully planned devotional journeys.
              </p>
            </div>

            <div>
              <a
                href="https://www.astroved.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-purple-500 text-white font-sans text-xs sm:text-sm uppercase tracking-widest font-bold hover:bg-purple-400 transition-colors shadow-[0_4px_14px_0_rgba(168,85,247,0.39)]"
              >
                View Tours <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
