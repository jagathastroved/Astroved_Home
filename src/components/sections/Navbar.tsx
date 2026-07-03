import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../ThemeProvider';
import { scrollToSection } from '../../utils/scroll';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-ivory/80 dark:bg-midnight/80 backdrop-blur-md border-b border-gold/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* AstroVed Official Logo */}
          <img 
            src="https://cdn.astroved.com/images/images-av/AstroVed-Logo.svg" 
            alt="AstroVed Logo" 
            className="h-10 w-auto object-contain brightness-100 dark:brightness-110" 
            id="astroved-logo-nav"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-midnight/80 dark:text-cream/80">
          <button onClick={() => scrollToSection('timing-check')} className="hover:text-purple dark:text-gold transition-colors font-ui uppercase tracking-widest text-xs">Timing Check</button>
          <button onClick={() => scrollToSection('live-moments')} className="hover:text-purple dark:text-gold transition-colors font-ui uppercase tracking-widest text-xs">Live Transits</button>
          <button onClick={() => scrollToSection('guidance-services')} className="hover:text-purple dark:text-gold transition-colors font-ui uppercase tracking-widest text-xs">Our Guidance</button>
          <button onClick={() => scrollToSection('daily-widget')} className="hover:text-purple dark:text-gold transition-colors font-ui uppercase tracking-widest text-xs">Daily Horoscope</button>
          <button onClick={() => scrollToSection('faq-section')} className="hover:text-purple dark:text-gold transition-colors font-ui uppercase tracking-widest text-xs">FAQ</button>
        </nav>

        <div className="flex items-center gap-4">
          {/* Clean responsive theme toggle with layout transition icon */}
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            className="relative p-2.5 rounded-full border border-gold/25 text-purple dark:text-saffron hover:bg-gold/10 transition-all duration-300 shadow-sm"
            aria-label="Toggle Theme"
          >
            <AnimatePresence mode="wait">
              {theme === 'light' ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
                  <Sun className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
                  <Moon className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          <button
            className="px-5 py-2.5 rounded-full border border-midnight/10 dark:border-cream/10 text-midnight dark:text-cream text-xs font-ui tracking-widest uppercase font-semibold hover:bg-gold/5 hover:border-gold/20 transition-all text-center"
          >
            Login
          </button>
          <button
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple to-indigo text-cream dark:text-cream text-xs font-ui tracking-widest uppercase font-semibold border border-gold/20 hover:brightness-110 active:scale-95 transition-all shadow-md text-center"
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
