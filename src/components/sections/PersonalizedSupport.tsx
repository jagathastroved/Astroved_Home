import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { tarpanam, Shreem_Membership1 } from '../../assets/personalized_support';

export function PersonalizedSupport() {
  return (
    <section className="relative py-4 md:py-6 px-6 overflow-hidden" id="personalized-support">

      {/* Floating Diamond (Decorative SVG replacing Lotus) */}
      <motion.div
        animate={{ y: [0, -15, 0], scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 md:top-20 md:left-20 text-[#facc15] pointer-events-none w-32 h-32 md:w-48 md:h-48 z-0 filter drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]"
      >
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 C50 40 60 50 100 50 C60 50 50 60 50 100 C50 60 40 50 0 50 C40 50 50 40 50 0 Z" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-6 relative z-0">
          <h2 className="font-sans text-4xl sm:text-5xl text-midnight dark:text-cream leading-tight mb-4">
            Personalized <em className="text-amber-600 dark:text-amber-400 italic">Support.</em>
          </h2>
          {/* <h1 className="font-sans text-4xl md:text-5xl text-midnight dark:text-cream tracking-wide leading-tight font-medium mb-6 drop-shadow-lg">
            Ongoing Spiritual Support
          </h1>
          <p className="font-body text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto text-lg drop-shadow-md">
            Stay spiritually connected every day with continuous blessings and personalized rituals.
          </p> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 relative z-10">

          {/* Card 1: Shreem Brzee Membership */}
          <div className="group relative overflow-hidden rounded-[2.5rem] min-h-[500px] border border-gray-100 dark:border-amber-500/40 dark:shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all hover:border-[#facc15]/60 shadow-xl hover:shadow-[0_0_40px_rgba(250,204,21,0.25)] flex flex-col justify-end p-8 md:p-12">

            {/* Full Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={Shreem_Membership1}
                alt="Shreem Brzee Membership"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Glowing inner border */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#facc15]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-20">
              <div className="">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-sans text-3xl md:text-4xl text-white font-medium mb-4 drop-shadow-lg">
                Shreem Brzee Membership
              </h3>
              <p className="font-body text-gray-200 mb-8 leading-relaxed drop-shadow-md">
                Receive ongoing abundance-focused guidance, exclusive rituals, personalized recommendations, and premium spiritual resources.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#a855f7] hover:bg-[#9333ea] text-white font-semibold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-lg">
                Join Membership <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Yearlong Tarpanam */}
          <div className="group relative overflow-hidden rounded-[2.5rem] min-h-[500px] border border-gray-100 dark:border-amber-500/40 dark:shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all hover:border-orange-500/60 shadow-xl hover:shadow-[0_0_40px_rgba(249,115,22,0.25)] flex flex-col justify-end p-8 md:p-12">

            {/* Full Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={tarpanam}
                alt="Yearlong Tarpanam"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Glowing inner border */}
            <div className="absolute inset-0 bg-gradient-to-bl from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-20">
              <h3 className="font-sans text-3xl md:text-4xl text-white font-medium mb-4 drop-shadow-lg">
                Yearlong Tarpanam
              </h3>
              <p className="font-body text-gray-200 mb-8 leading-relaxed drop-shadow-md">
                Honor your ancestors throughout the year with scheduled sacred rituals performed by experienced temple priests.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#a855f7] hover:bg-[#9333ea] text-white font-semibold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-lg">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Golden Particles Background (Highest Z-Index to cover everything) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            initial={{ opacity: 0, y: 0, x: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [-20, -150 - Math.random() * 150],
              x: [0, (Math.random() - 0.5) * 150]
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut"
            }}
            className="absolute rounded-full bg-yellow-300 blur-[1px] shadow-[0_0_8px_rgba(253,224,71,0.8)]"
            style={{
              width: Math.random() * 5 + 2 + 'px',
              height: Math.random() * 5 + 2 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
