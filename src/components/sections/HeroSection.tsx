import React from 'react';
import { motion } from 'motion/react';
import { Compass, ArrowRight, Activity } from 'lucide-react';
import { scrollToSection } from '../../utils/scroll';
import { stagger, fadeUp } from '../../utils/animations';
import TextType from '../ui/TextType';

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
          className="lg:col-span-12 flex flex-col justify-center space-y-8 items-center text-center"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-purple dark:text-saffron text-xs font-mono uppercase tracking-widest w-fit">
            <Compass className="w-3.5 h-3.5 animate-spin-slow" />
            Welcome to AstroVed
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] text-midnight dark:text-cream tracking-tight"
          >
            Know Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-saffron to-gold font-ui">
              <TextType 
                text={["Cosmic Timing", "Ancestral Karma", "Auspicious Moments", "Vedic Blueprint"]}
                typingSpeed={60}
                pauseDuration={2000}
                showCursor={true}
                cursorCharacter="|"
                className="inline"
              />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-body text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed font-light mx-auto"
          >
            Every life moves through open doors and closed ones. We read your precise birth chart coordinates and tell you which one you are standing at right now.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 justify-center">
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
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-gold/10 w-full max-w-4xl mt-12"
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

      </div>
    </section>
  );
}
