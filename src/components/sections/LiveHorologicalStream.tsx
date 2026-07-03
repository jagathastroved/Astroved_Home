import React from 'react';
import { LIVE_MOMENTS } from '../../utils/data';


export function LiveHorologicalStream() {
  return (
    <section className="py-12 border-y border-black/10 dark:border-white/10 bg-ivory dark:bg-[#0a0514] overflow-hidden transition-colors duration-500" id="live-moments">
      


      <div className="max-w-7xl mx-auto px-6 mb-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-4 relative z-20">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-500 block">LIVE HOROLOGICAL STREAM</span>
          <h2 className="font-ui text-3xl text-midnight dark:text-white mt-1 tracking-wider">Auspicious Portals & Transits</h2>
        </div>
        <p className="font-body text-xs text-gray-600 dark:text-white/60 max-w-xs">
          These celestial shifts are occurring in real-time. Hover/touch to pause the stream and inspect the timings.
        </p>
      </div>

      {/* Marquee dual-row stream */}
      <div className="space-y-4 relative w-full overflow-hidden">
        {/* Left/Right Fade Overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ivory dark:from-[#0a0514] to-transparent z-30 pointer-events-none transition-colors duration-500" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ivory dark:from-[#0a0514] to-transparent z-30 pointer-events-none transition-colors duration-500" />

        {/* Row 1 - Left to Right */}
        <div className="flex w-fit animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused] gap-4 py-1">
          {[...LIVE_MOMENTS, ...LIVE_MOMENTS, ...LIVE_MOMENTS].map((item, idx) => (
            <div 
              key={`${item.id}-r1-${idx}`}
              className="w-72 h-48 rounded-2xl relative overflow-hidden flex-shrink-0 group border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-xl shadow-lg cursor-pointer"
            >
              {/* Premium Placeholder Gradient instead of Unsplash Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-amber-500/10 dark:from-purple-900/30 dark:via-[#0a0514] dark:to-amber-900/20 group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/80 dark:from-[#0a0514] dark:via-[#0a0514]/40 to-transparent z-10 transition-colors duration-500" />
              
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-500/20 border border-amber-300 dark:border-amber-500/30 text-amber-700 dark:text-amber-300 font-mono text-[10px] font-bold tracking-wider z-20 shadow-sm backdrop-blur-sm">
                {item.urgency}
              </span>

              <div className="absolute bottom-5 left-5 right-5 z-20">
                <span className="text-[10px] font-mono text-amber-700 dark:text-amber-500 uppercase tracking-widest block mb-1">{item.tag}</span>
                <h4 className="font-ui text-base text-midnight dark:text-white tracking-wide line-clamp-2 leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-100 transition-colors">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 - Right to Left */}
        <div className="flex w-fit animate-[marquee-reverse_40s_linear_infinite] hover:[animation-play-state:paused] gap-4 py-1">
          {[...LIVE_MOMENTS, ...LIVE_MOMENTS, ...LIVE_MOMENTS].reverse().map((item, idx) => (
            <div 
              key={`${item.id}-r2-${idx}`}
              className="w-72 h-48 rounded-2xl relative overflow-hidden flex-shrink-0 group border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-xl shadow-lg cursor-pointer"
            >
              {/* Premium Placeholder Gradient instead of Unsplash Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-emerald-500/10 dark:from-indigo-900/30 dark:via-[#0a0514] dark:to-emerald-900/20 group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/80 dark:from-[#0a0514] dark:via-[#0a0514]/40 to-transparent z-10 transition-colors duration-500" />
              
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-500/20 border border-purple-300 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 font-mono text-[10px] font-bold tracking-wider z-20 shadow-sm backdrop-blur-sm">
                {item.urgency}
              </span>

              <div className="absolute bottom-5 left-5 right-5 z-20">
                <span className="text-[10px] font-mono text-purple-700 dark:text-purple-400 uppercase tracking-widest block mb-1">{item.tag}</span>
                <h4 className="font-ui text-base text-midnight dark:text-white tracking-wide line-clamp-2 leading-snug group-hover:text-purple-600 dark:group-hover:text-purple-100 transition-colors">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
