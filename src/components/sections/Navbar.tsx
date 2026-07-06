import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../ThemeProvider';
import { scrollToSection } from '../../utils/scroll';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Special Events', id: 'special-events' },
    { label: 'Ancestral Healing', id: 'ancestral-healing' },
    { label: 'Products', id: 'products' },
    { label: 'Pilgrimages', id: 'pilgrimages' },
    { label: 'Services', id: 'services' },
    { label: 'Memberships', id: 'membership' },
    { label: 'Your Timing', id: 'daily-widget' },
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
    <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-50/95 via-purple-50/95 to-pink-50/95 dark:bg-gradient-to-r dark:from-indigo-950/95 dark:via-purple-950/95 dark:to-[#0a0e17]/95 backdrop-blur-md border-b border-black dark:border-gold/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex-1 flex items-center gap-3">
          {/* Mobile Menu Toggle (Left Side) */}
          <button
            className="md:hidden p-2 -ml-2 rounded-full border border-gold/25 text-purple dark:text-saffron hover:bg-gold/10 transition-colors"
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

        <nav className="hidden md:flex items-center gap-3 lg:gap-5 text-sm font-medium mt-2">
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
            className="hidden md:block px-5 py-2 rounded-[2rem] border border-midnight/10 dark:border-cream/10 text-midnight dark:text-cream text-[10px] sm:text-xs font-sans tracking-widest uppercase font-semibold hover:bg-gold/5 hover:border-gold/20 transition-all shadow-sm whitespace-nowrap"
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-gradient-to-br from-indigo-50/95 via-purple-50/95 to-pink-50/95 dark:bg-gradient-to-r dark:from-indigo-950/95 dark:via-purple-950/95 dark:to-[#0a0e17]/95 border-b border-gold/10"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className="w-full text-left px-4 py-3 rounded-xl border border-black/5 dark:border-amber-500/40 dark:shadow-[0_0_15px_rgba(245,158,11,0.2)] bg-white/50 dark:bg-white/5 backdrop-blur-md font-sans uppercase tracking-widest text-xs text-midnight dark:text-cream hover:border-purple/30 dark:hover:border-gold/30 hover:bg-purple/5 dark:hover:bg-gold/5 hover:text-purple dark:hover:text-gold transition-all shadow-sm"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

              <div className="flex flex-col gap-3 pt-6 border-t border-black/5 dark:border-amber-500/40 dark:shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                <button className="w-full py-3 rounded-xl border border-midnight/10 dark:border-cream/10 text-midnight dark:text-cream text-xs font-sans tracking-widest uppercase font-semibold hover:bg-gold/5 transition-all">
                  Sign In
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
