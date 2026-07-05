import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../ThemeProvider';
import { scrollToSection } from '../../utils/scroll';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Timing Check', id: 'timing-check' },
    { label: 'Live Transits', id: 'live-moments' },
    { label: 'Our Guidance', id: 'guidance-services' },
    { label: 'Daily Horoscope', id: 'daily-widget' },
    { label: 'FAQ', id: 'faq-section' },
    { label: 'Membership', id: 'membership' },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    // Wait for the mobile menu closing animation to finish so the layout shift doesn't break scrolling
    setTimeout(() => {
      scrollToSection(id);
    }, 300);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-50/95 via-purple-50/95 to-pink-50/95 dark:bg-gradient-to-r dark:from-indigo-950/95 dark:via-purple-950/95 dark:to-[#0a0e17]/95 backdrop-blur-md border-b border-gold/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
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

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="relative py-1.5 text-midnight/80 dark:text-cream/90 hover:text-purple dark:hover:text-gold transition-colors font-sans uppercase tracking-widest text-[11px] font-semibold group"
            >
              {link.label}
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-purple dark:bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out opacity-70" />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
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
            className="hidden md:block px-5 py-2.5 rounded-full border border-midnight/10 dark:border-cream/10 text-midnight dark:text-cream text-xs font-sans tracking-widest uppercase font-semibold hover:bg-gold/5 hover:border-gold/20 transition-all text-center"
          >
            Login
          </button>
          <button
            className="hidden md:block px-5 py-2.5 rounded-full bg-gradient-to-r from-purple to-indigo text-cream dark:text-cream text-xs font-sans tracking-widest uppercase font-semibold border border-gold/20 hover:brightness-110 active:scale-95 transition-all shadow-md text-center"
          >
            Sign Up
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
                    className="w-full text-left px-4 py-3 rounded-xl border border-black/5 dark:border-white/5 bg-white/50 dark:bg-white/5 backdrop-blur-md font-sans uppercase tracking-widest text-xs text-midnight dark:text-cream hover:border-purple/30 dark:hover:border-gold/30 hover:bg-purple/5 dark:hover:bg-gold/5 hover:text-purple dark:hover:text-gold transition-all shadow-sm"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

              <div className="flex flex-col gap-3 pt-6 border-t border-black/5 dark:border-white/5">
                <button className="w-full py-3 rounded-xl border border-midnight/10 dark:border-cream/10 text-midnight dark:text-cream text-xs font-sans tracking-widest uppercase font-semibold hover:bg-gold/5 transition-all">
                  Login
                </button>
                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple to-indigo text-cream text-xs font-sans tracking-widest uppercase font-semibold hover:brightness-110 transition-all shadow-md">
                  Sign Up
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
