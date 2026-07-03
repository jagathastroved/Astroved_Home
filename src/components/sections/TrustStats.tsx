import React from 'react';
import { CountUp } from '../CountUp';

export function TrustStats() {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 bg-gradient-to-r from-purple/10 to-indigo/10 border-y border-gold/20 overflow-hidden">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(212,175,55,0.02)_0px,rgba(212,175,55,0.02)_1px,transparent_0px,transparent_10px)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 items-center">
        
        <div className="text-center md:text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-purple dark:text-gold block">ESTABLISHED DHARMA</span>
          <span className="font-ui text-xl text-midnight dark:text-cream font-medium tracking-wider">AstroVed Verification</span>
        </div>

        <div className="text-center">
          <span className="text-3xl md:text-4xl font-ui text-purple dark:text-saffron font-bold block">
            <CountUp to={2001} from={1980} duration={1.8} />
          </span>
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Year of Inception</span>
        </div>

        <div className="text-center">
          <span className="text-3xl md:text-4xl font-ui text-purple dark:text-saffron font-bold block">
            <CountUp to={180} duration={1.6} suffix="+" />
          </span>
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Scholars & Astrologers</span>
        </div>

        <div className="text-center">
          <span className="text-3xl md:text-4xl font-ui text-purple dark:text-saffron font-bold block">
            <CountUp to={99} from={50} duration={2} suffix="%" />
          </span>
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Certified Privacy Score</span>
        </div>

      </div>
    </section>
  );
}
