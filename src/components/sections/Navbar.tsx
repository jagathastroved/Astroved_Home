import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../ThemeProvider';
import { scrollToSection } from '../../utils/scroll';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Special Events', id: 'special-events' },
    { label: 'Products', id: 'products' },
    { label: 'Pilgrimages', id: 'pilgrimages' },
    { label: 'Services', id: 'auspicious-actions' },
    { label: 'Membership', id: 'personalized-support' },
    { label: 'Right Time', id: 'daily-panchang' },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    // Wait for the mobile menu closing animation to finish so the layout shift doesn't break scrolling
    setTimeout(() => {
      scrollToSection(id);
    }, 300);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-100/95 via-fuchsia-100/95 to-pink-100/95 dark:bg-gradient-to-r dark:from-indigo-950/95 dark:via-purple-950/95 dark:to-[#0a0e17]/95 backdrop-blur-md transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex-1 flex items-center gap-3">
          {/* Mobile Menu Toggle (Left Side) */}
          <button
            className="lg:hidden p-2 -ml-2 rounded-full border border-gold/25 text-purple dark:text-saffron hover:bg-gold/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* AstroVed Official Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="Scroll to top"
          >
            <img
              src="https://cdn.astroved.com/images/images-av/AstroVed-Logo.svg"
              alt="AstroVed Logo"
              className="h-8 sm:h-10 w-auto object-contain brightness-100 dark:brightness-110"
              id="astroved-logo-nav"
            />
          </button>
        </div>

        <nav className="hidden lg:flex items-center gap-3 xl:gap-5 text-sm font-medium mt-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="relative px-2 py-1.5 text-midnight/80 dark:text-cream/90 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-sans uppercase tracking-widest text-[9px] lg:text-[10px] font-semibold group whitespace-nowrap"
            >
              {link.label}

              {/* Top Left Bracket */}
              <span className="absolute top-0 left-0 w-1.5 h-1.5 sm:w-2 sm:h-2 border-t-[2px] border-l-[2px] border-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 -translate-y-2 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
              {/* Top Right Bracket */}
              <span className="absolute top-0 right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 border-t-[2px] border-r-[2px] border-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 -translate-y-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              {/* Bottom Left Bracket */}
              <span className="absolute bottom-0 left-0 w-1.5 h-1.5 sm:w-2 sm:h-2 border-b-[2px] border-l-[2px] border-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 translate-y-2 group-hover:-translate-x-0.5 group-hover:translate-y-0.5" />
              {/* Bottom Right Bracket */}
              <span className="absolute bottom-0 right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 border-b-[2px] border-r-[2px] border-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 translate-y-2 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </button>
          ))}
        </nav>

        <div className="flex-1 flex items-center justify-end gap-3 sm:gap-4">
          {/* Clean responsive theme toggle with layout transition icon */}
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            className="relative p-2 sm:p-2.5 rounded-full border border-gold/25 text-purple dark:text-saffron hover:bg-gold/10 transition-all duration-300 shadow-sm"
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
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
                  <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          <button
            className="hidden lg:block px-5 py-2 rounded-[2rem] border border-midnight/10 dark:border-cream/10 text-midnight dark:text-cream text-[10px] sm:text-xs font-sans tracking-widest uppercase font-semibold hover:bg-gold/5 hover:border-gold/20 transition-all shadow-sm whitespace-nowrap"
          >
            Sign In
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            exit={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed inset-0 z-40 w-full h-screen overflow-hidden bg-ivory dark:bg-[#06080d] backdrop-blur-3xl"
          >
            {/* Elegant Ambient Blur */}
            <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="h-full px-8 pt-24 pb-12 flex flex-col relative z-10 overflow-y-auto">
              {/* Close Button Inside Menu */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-midnight/5 dark:bg-white/10 text-midnight dark:text-cream hover:bg-midnight/10 dark:hover:bg-white/20 transition-colors"
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>

              <nav className="flex flex-col gap-6 sm:gap-8 mt-12">
                {navLinks.map((link, idx) => (
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className="group w-full text-left flex items-center justify-between border-b border-midnight/5 dark:border-white/5 pb-4"
                  >
                    <span className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-midnight dark:text-cream group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-all duration-300 group-hover:translate-x-2 inline-block">
                      {link.label}
                    </span>
                    <ChevronRight className="w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-all duration-300 -translate-x-4 group-hover:translate-x-0" />
                  </motion.button>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navLinks.length * 0.08 + 0.3, duration: 0.5 }}
                className="mt-auto pt-12"
              >
                <button className="relative w-full py-5 rounded-full overflow-hidden group shadow-xl">
                  <div className="absolute inset-0 bg-midnight dark:bg-white transition-transform duration-500 group-hover:scale-105" />
                  <span className="relative z-10 text-white dark:text-midnight text-[11px] sm:text-xs font-sans tracking-[0.3em] uppercase font-bold">
                    Sign In
                  </span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header >
  );
}
