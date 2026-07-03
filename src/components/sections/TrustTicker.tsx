import React from 'react';

const TRUST_STATS = [
  "Since 2000 · 25 years",
  "Trusted by millions worldwide",
  "Performed by Vedic priests",
  "4.8★ · 12,000+ reviews",
  "Birth data encrypted"
];

export function TrustTicker() {
  return (
    <div className="w-full bg-amber-50 dark:bg-[#08040f] border-b border-black/5 dark:border-white/5 py-3 overflow-hidden flex items-center relative z-20">
      <div className="flex w-fit animate-[marquee_60s_linear_infinite] whitespace-nowrap text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400 font-semibold">
        {[...Array(4)].map((_, groupIdx) => (
          <React.Fragment key={groupIdx}>
            {TRUST_STATS.map((stat, idx) => (
              <React.Fragment key={`${groupIdx}-${idx}`}>
                <span className="mx-8 md:mx-12">{stat}</span>
                <span className="opacity-50">•</span>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
