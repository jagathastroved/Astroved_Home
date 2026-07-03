import React from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { Navbar } from './components/sections/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { LiveHorologicalStream } from './components/sections/LiveHorologicalStream';
import { SpecialEvents } from './components/sections/SpecialEvents';
import { TrustTicker } from './components/sections/TrustTicker';
import { UptimesDowntimes } from './components/sections/UptimesDowntimes';
import { ExpertChart } from './components/sections/ExpertChart';
import { TimingEvaluation } from './components/sections/TimingEvaluation';
import { TrustStats } from './components/sections/TrustStats';
import { AuspiciousActions } from './components/sections/AuspiciousActions';
import { RitualAnimatedBeam } from './components/RitualAnimatedBeam';
import { AncestralHealing } from './components/sections/AncestralHealing';
import { DailyRadar } from './components/sections/DailyRadar';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { LeadCapture } from './components/sections/LeadCapture';
import { Footer } from './components/sections/Footer';
import { scrollToSection } from './utils/scroll';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-ivory dark:bg-[#0c0f24] text-midnight dark:text-cream font-sans selection:bg-gold/30 selection:text-midnight dark:selection:text-cream transition-colors duration-500 relative overflow-x-hidden">

        {/* Abstract global glowing orbs */}
        <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gold/10 dark:bg-gold/5 blur-[120px] pointer-events-none z-0" />
        <div className="fixed bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple/10 dark:bg-indigo/10 blur-[150px] pointer-events-none z-0" />

        <Navbar />

        <main className="relative z-10 pt-20">
          <HeroSection />
          <LiveHorologicalStream />
          <SpecialEvents />
          <UptimesDowntimes />
          <TrustTicker />
          <ExpertChart />
          <TimingEvaluation />
          <TrustStats />
          <AuspiciousActions />

          <section className="py-32 relative overflow-hidden" id="rituals-beam">
            {/* Soft background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-amber-500/5 dark:bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="text-center max-w-3xl mx-auto mb-20 relative z-10 px-6">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-600 dark:text-amber-500 block mb-3 font-semibold">
                Consecrated Transmission
              </span>
              <h2 className="font-ui text-4xl text-midnight dark:text-cream tracking-wide leading-tight">
                Rituals Run <em className="text-amber-600 dark:text-amber-400 italic">On Your Behalf.</em>
              </h2>
              <p className="font-body text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                The precise path of a remote ritual. See exactly how we route your physical intention directly from our client core to the traditional temples.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto relative z-10 px-4">
              <RitualAnimatedBeam />
            </div>
          </section>

          <AncestralHealing />
          <DailyRadar onCalculateChart={(zodiac) => { scrollToSection('birth-form'); }} />
          <Testimonials />
          <FAQ />
          <LeadCapture />
        </main>

        <Footer />

      </div>
    </ThemeProvider>
  );
}
