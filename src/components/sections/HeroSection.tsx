import React from 'react';
import { motion } from 'motion/react';
import { Compass, ArrowRight, Activity } from 'lucide-react';
import { scrollToSection } from '../../utils/scroll';
import { stagger, fadeUp } from '../../utils/animations';

export function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 px-6 max-w-7xl mx-auto z-10" id="hero-section">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left panel copy block (55%) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="lg:col-span-7 flex flex-col justify-center space-y-8"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-purple dark:text-saffron text-xs font-mono uppercase tracking-widest w-fit">
            <Compass className="w-3.5 h-3.5 animate-spin-slow" />
            Timing · Clarity · Guidance
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] text-midnight dark:text-cream tracking-tight"
          >
            Know Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-saffron to-gold font-ui">
              Cosmic Moment
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-body text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed font-light"
          >
            Every life moves through open doors and closed ones. We read your precise birth chart coordinates and tell you which one you are standing at right now.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <button
              onClick={() => scrollToSection('timing-check')}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple to-indigo text-cream font-ui text-sm tracking-widest uppercase font-semibold border border-gold/30 hover:border-gold/60 transition-all shadow-[0_0_20px_rgba(212,175,55,0.15)] active:scale-95 text-center flex items-center justify-center gap-3 group"
            >
              Reveal My Moment — Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('guidance-services')}
              className="px-6 py-4 rounded-full border border-midnight/10 dark:border-cream/10 text-midnight dark:text-cream font-ui text-sm tracking-widest uppercase font-semibold hover:bg-gold/5 hover:border-gold/20 transition-all text-center"
            >
              How It Works &rarr;
            </button>
          </motion.div>

          {/* Static understated trust row (stat chips, not scrolling) */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 border-t border-gold/10"
          >
            <div className="flex flex-col">
              <span className="font-ui text-2xl text-purple dark:text-saffron font-bold">25+</span>
              <span className="font-sans text-xs text-gray-500 uppercase tracking-widest mt-1">Years Wisdom</span>
            </div>
            <div className="flex flex-col">
              <span className="font-ui text-2xl text-purple dark:text-saffron font-bold">150+</span>
              <span className="font-sans text-xs text-gray-500 uppercase tracking-widest mt-1">Vedic Priests</span>
            </div>
            <div className="flex flex-col">
              <span className="font-ui text-2xl text-purple dark:text-saffron font-bold">99.8%</span>
              <span className="font-sans text-xs text-gray-500 uppercase tracking-widest mt-1">Trust Score</span>
            </div>
            <div className="flex flex-col">
              <span className="font-ui text-2xl text-purple dark:text-saffron font-bold">12M+</span>
              <span className="font-sans text-xs text-gray-500 uppercase tracking-widest mt-1">Moments Decoded</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right panel orbit visual (45%) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 h-[350px] sm:h-[480px] rounded-4xl bg-gradient-to-br from-purple via-indigo to-midnight border border-gold/20 relative overflow-hidden flex items-center justify-center p-6 shadow-2xl"
        >
          {/* Background grid texture */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />

          {/* Star particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[20%] left-[30%] w-1 h-1 bg-white rounded-full opacity-60 animate-pulse" />
            <div className="absolute top-[65%] left-[15%] w-1.5 h-1.5 bg-gold rounded-full opacity-40 animate-ping" />
            <div className="absolute top-[40%] right-[25%] w-1 h-1 bg-cream rounded-full opacity-80" />
            <div className="absolute bottom-[25%] right-[35%] w-1 h-1 bg-saffron rounded-full opacity-70 animate-pulse" />
          </div>

          {/* Glowing cosmic core */}
          <div className="absolute w-28 h-28 rounded-full bg-gradient-to-r from-gold/20 to-saffron/20 blur-xl animate-pulse-slow" />

          {/* SVG Concentric Orbit Loops */}
          <svg className="w-full h-full max-w-[380px] max-h-[380px] overflow-visible relative z-10" viewBox="0 0 200 200">
            {/* Sun Symbol in Center */}
            <circle cx="100" cy="100" r="10" className="fill-gold stroke-saffron/40 stroke-[2px]" />
            <circle cx="100" cy="100" r="18" className="fill-none stroke-gold/20 stroke-[1px] stroke-dasharray-[2,2]" />

            {/* Orbit 1: Inner */}
            <circle cx="100" cy="100" r="35" className="fill-none stroke-cream/15 stroke-[1px]" />
            <motion.circle
              cx="100"
              cy="100"
              r="35"
              className="fill-none stroke-gold/40 stroke-[1.5px]"
              strokeDasharray="40 180"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              style={{ originX: '100px', originY: '100px' }}
            />
            <motion.circle
              cx="135"
              cy="100"
              r="3.5"
              className="fill-gold"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              style={{ originX: '100px', originY: '100px' }}
            />

            {/* Orbit 2: Middle */}
            <circle cx="100" cy="100" r="60" className="fill-none stroke-cream/10 stroke-[1px] stroke-dasharray-[4,4]" />
            <motion.circle
              cx="160"
              cy="100"
              r="4.5"
              className="fill-saffron"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              style={{ originX: '100px', originY: '100px' }}
            />

            {/* Orbit 3: Outer */}
            <circle cx="100" cy="100" r="85" className="fill-none stroke-gold/10 stroke-[1px]" />
            <motion.circle
              cx="100"
              cy="100"
              r="85"
              className="fill-none stroke-saffron/30 stroke-[1.5px]"
              strokeDasharray="80 300"
              animate={{ rotate: 180 }}
              transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
              style={{ originX: '100px', originY: '100px' }}
            />
            <motion.circle
              cx="185"
              cy="100"
              r="3"
              className="fill-cream"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              style={{ originX: '100px', originY: '100px' }}
            />
          </svg>

          {/* Float Overlay Badge */}
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel bg-midnight/60 border border-gold/15 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-purple dark:text-gold">
              <Activity className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex-1">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 block">Current Cosmic Inflow</span>
              <span className="text-xs font-ui font-medium text-midnight dark:text-cream block">Vrishabha Ascendant Peak</span>
            </div>
            <span className="text-xs font-mono text-saffron bg-saffron/10 px-2 py-0.5 rounded border border-saffron/20 font-bold">
              HIGH VIBE
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
