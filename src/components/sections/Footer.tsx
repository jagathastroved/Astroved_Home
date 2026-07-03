import React from 'react';
import { scrollToSection } from '../../utils/scroll';

export function Footer() {
  return (
    <footer className="bg-midnight border-t border-gold/15 py-12 px-6 relative z-10 text-gray-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        
        {/* Logo & claim column */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.astroved.com/images/images-av/AstroVed-Logo.svg" 
              alt="AstroVed Logo" 
              className="h-10 w-auto object-contain brightness-110" 
            />
            <div className="h-6 w-[1px] bg-gold/30" />
            <span className="font-ui text-base tracking-[0.15em] text-cream font-medium">
              COSMIC TIMING
            </span>
          </div>
          <p className="font-body text-xs text-gray-400 leading-relaxed max-w-sm">
            An advanced, high-fidelity cosmic dasha alignment engine mapping standard Sidereal coordinates with the warm, precise guidance of AI scholars. Authorized partners of AstroVed.
          </p>
        </div>

        {/* Column 2 */}
        <div className="md:col-span-2 space-y-3">
          <h4 className="font-ui text-xs uppercase tracking-widest text-cream">Alignments</h4>
          <ul className="space-y-2 text-xs">
            <li><button onClick={() => scrollToSection('timing-check')} className="hover:text-purple dark:text-gold transition-colors">Daily Dasa Evaluation</button></li>
            <li><button onClick={() => scrollToSection('birth-form')} className="hover:text-purple dark:text-gold transition-colors">Vedic Birth Coordinates</button></li>
            <li><button onClick={() => scrollToSection('daily-widget')} className="hover:text-purple dark:text-gold transition-colors">12 Zodiac Horoscopes</button></li>
            <li><button onClick={() => scrollToSection('rituals-beam')} className="hover:text-purple dark:text-gold transition-colors">Monthly Cleansing circles</button></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="md:col-span-2 space-y-3">
          <h4 className="font-ui text-xs uppercase tracking-widest text-cream">Dharma Wisdom</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="https://www.astroved.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple dark:text-gold transition-colors">Nadi Astrology Leaves</a></li>
            <li><a href="https://www.astroved.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple dark:text-gold transition-colors">Sade Sati Saturn Remedy</a></li>
            <li><a href="https://www.astroved.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple dark:text-gold transition-colors">Tarpanam Ancestral Path</a></li>
            <li><a href="https://www.astroved.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple dark:text-gold transition-colors">Auspicious Hora Hours</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-ui text-xs uppercase tracking-widest text-cream">Platform Coordinates</h4>
          <div className="space-y-1.5 text-xs">
            <p>Corporate Office: AstroVed Consecration Center, Chennai, India.</p>
            <p>Email: security@astroved-cosmic-timing.org</p>
            <p>Legal: Verified sidereal calculations adhering to standard Panchang rules.</p>
          </div>
        </div>

      </div>

      {/* Legal bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-gold/10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest">
        <span>&copy; {new Date().getFullYear()} AstroVed &amp; Cosmic Timing. All traditional rights reserved.</span>
        <div className="flex gap-4">
          <a href="https://www.astroved.com" className="hover:text-purple dark:text-gold">Privacy Directives</a>
          <span>&middot;</span>
          <a href="https://www.astroved.com" className="hover:text-purple dark:text-gold">Vedic Calculations Disclaimer</a>
        </div>
      </div>
    </footer>
  );
}
