import React from 'react';
import { scrollToSection } from '../../utils/scroll';

export function Footer() {
  return (
    <footer className="relative z-10 bg-ivory/80 dark:bg-black/90 backdrop-blur-xl border-t border-purple/10 dark:border-white/10 py-16 px-6 transition-all duration-500 overflow-hidden">

      {/* Subtle background glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple/5 dark:bg-gold/5 rounded-[100%] blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 mb-16">

        {/* Logo & claim column */}
        <div className="md:col-span-5 lg:col-span-4 space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-white/50 dark:bg-transparent p-2 rounded-xl dark:rounded-none shadow-sm dark:shadow-none border border-purple/5 dark:border-none transition-all">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="cursor-pointer hover:opacity-80 transition-opacity outline-none"
                aria-label="Scroll to top"
              >
                <img
                  src="https://cdn.astroved.com/images/images-av/AstroVed-Logo.svg"
                  alt="AstroVed Logo"
                  className="h-10 w-auto object-contain dark:brightness-110 drop-shadow-sm"
                />
              </button>
            </div>
          </div>
          <p className="font-body text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
            An advanced, high-fidelity cosmic dasha alignment engine mapping standard Sidereal coordinates with the warm, precise guidance of AI scholars. Authorized partners of AstroVed.
          </p>
        </div>

        {/* Column 2 */}
        <div className="md:col-span-3 lg:col-span-3 space-y-5">
          <h4 className="font-ui text-[11px] font-bold uppercase tracking-[0.2em] text-purple dark:text-gold/90">Alignments</h4>
          <ul className="space-y-3.5 text-[13px] text-slate-600 dark:text-slate-400 font-medium">
            <li><button onClick={() => scrollToSection('timing-check')} className="hover:text-indigo dark:hover:text-cream transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-purple/30 dark:bg-gold/30 group-hover:bg-indigo dark:group-hover:bg-gold transition-colors" /> Daily Dasa Evaluation</button></li>
            <li><button onClick={() => scrollToSection('birth-form')} className="hover:text-indigo dark:hover:text-cream transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-purple/30 dark:bg-gold/30 group-hover:bg-indigo dark:group-hover:bg-gold transition-colors" /> Vedic Birth Coordinates</button></li>
            <li><button onClick={() => scrollToSection('daily-widget')} className="hover:text-indigo dark:hover:text-cream transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-purple/30 dark:bg-gold/30 group-hover:bg-indigo dark:group-hover:bg-gold transition-colors" /> 12 Zodiac Horoscopes</button></li>
            <li><button onClick={() => scrollToSection('rituals-beam')} className="hover:text-indigo dark:hover:text-cream transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-purple/30 dark:bg-gold/30 group-hover:bg-indigo dark:group-hover:bg-gold transition-colors" /> Monthly Cleansing Circles</button></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="md:col-span-4 lg:col-span-3 space-y-5">
          <h4 className="font-ui text-[11px] font-bold uppercase tracking-[0.2em] text-purple dark:text-gold/90">Dharma Wisdom</h4>
          <ul className="space-y-3.5 text-[13px] text-slate-600 dark:text-slate-400 font-medium">
            <li><a href="https://www.astroved.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo dark:hover:text-cream transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-purple/30 dark:bg-gold/30 group-hover:bg-indigo dark:group-hover:bg-gold transition-colors" /> Nadi Astrology Leaves</a></li>
            <li><a href="https://www.astroved.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo dark:hover:text-cream transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-purple/30 dark:bg-gold/30 group-hover:bg-indigo dark:group-hover:bg-gold transition-colors" /> Sade Sati Saturn Remedy</a></li>
            <li><a href="https://www.astroved.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo dark:hover:text-cream transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-purple/30 dark:bg-gold/30 group-hover:bg-indigo dark:group-hover:bg-gold transition-colors" /> Tarpanam Ancestral Path</a></li>
            <li><a href="https://www.astroved.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo dark:hover:text-cream transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-purple/30 dark:bg-gold/30 group-hover:bg-indigo dark:group-hover:bg-gold transition-colors" /> Auspicious Hora Hours</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="md:col-span-12 lg:col-span-2 space-y-5">
          <h4 className="font-ui text-[11px] font-bold uppercase tracking-[0.2em] text-purple dark:text-gold/90">Coordinates</h4>
          <div className="space-y-3 text-[12px] text-slate-500 dark:text-slate-400/80 leading-relaxed font-medium">
            <p className="flex gap-2"><span className="text-purple/50 dark:text-gold/50">📍</span> AstroVed Consecration Center, Chennai, India.</p>
            <p className="flex gap-2"><span className="text-purple/50 dark:text-gold/50">✉️</span> support@astroved.com</p>
            <p className="flex gap-2 mt-4 text-[11px] italic opacity-80"><span className="text-purple/50 dark:text-gold/50">⚖️</span> Verified sidereal calculations adhering to Panchang rules.</p>
          </div>
        </div>

      </div>

      {/* Legal bar */}
      <div className="relative max-w-7xl mx-auto pt-8 border-t border-purple/10 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-slate-500 dark:text-slate-500/80">
          &copy; {new Date().getFullYear()} AstroVed. All traditional rights reserved.
        </span>
        <div className="flex gap-6 text-[10px] font-bold uppercase tracking-[0.2em]">
          <a href="https://www.astroved.com" className="text-slate-400 dark:text-slate-500 hover:text-indigo dark:hover:text-cream transition-colors">Privacy Directives</a>
          <span className="text-purple/20 dark:text-slate-700">&bull;</span>
          <a href="https://www.astroved.com" className="text-slate-400 dark:text-slate-500 hover:text-indigo dark:hover:text-cream transition-colors">Calculations Disclaimer</a>
        </div>
      </div>
    </footer>
  );
}


