import React from 'react';
import { HoverGlowCard } from '../HoverGlowCard';
import { Star, ScrollText, Sparkles, Zap, Map, Heart, Users } from 'lucide-react';
import ScrollFloat from '../ui/ScrollFloat';

export function ServicesSections() {
  return (
    <div className="relative py-24 z-10 space-y-32" id="guidance-services">
      {/* Background decorations */}
      <div className="absolute top-[20%] left-0 w-1/3 h-1/3 bg-purple-500/5 dark:bg-purple-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[60%] right-0 w-1/4 h-1/4 bg-amber-500/5 dark:bg-amber-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION 2: Personalized Guidance */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
              containerClassName="font-ui text-4xl md:text-5xl font-semibold text-midnight dark:text-white leading-tight mb-0"
              textClassName="bg-clip-text"
            >
              Personalized Guidance
            </ScrollFloat>
            <p className="mt-4 font-body text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Unlock the secrets of your past, present, and future with our expert astrological readings and ancient Nadi wisdom.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <HoverGlowCard
              icon={Star}
              badgeText="EXPERT READING"
              title="Astrology Consultation"
              description="Connect with our master astrologers for an in-depth analysis of your birth chart, planetary periods (Dasha), and transits to make informed life decisions."
              buttonText="Book Consultation"
              glowColor="rgba(245, 158, 11, 0.3)" // Amber glow
            />
            <HoverGlowCard
              icon={ScrollText}
              badgeText="ANCIENT SECRETS"
              title="Nadi Astrology"
              description="Discover your destiny written on ancient palm leaves centuries ago by enlightened sages, revealing past karma and remedies for a better future."
              buttonText="Discover Nadi"
              glowColor="rgba(139, 92, 246, 0.3)" // Purple glow
            />
          </div>
        </section>

        {/* SECTION 3: Personalized Solutions */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
              containerClassName="font-ui text-4xl md:text-5xl font-semibold text-midnight dark:text-white leading-tight mb-0"
              textClassName="bg-clip-text"
            >
              Personalized Solutions
            </ScrollFloat>
            <p className="mt-4 font-body text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Transform your destiny through powerful rituals, consecrated items, and transformative spiritual journeys.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HoverGlowCard
              icon={Sparkles}
              badgeText="DIVINE INTERVENTION"
              title="Priest Services"
              description="Perform powerful homas (fire rituals) and poojas customized to your birth chart to overcome specific life challenges and attract abundance."
              buttonText="Explore Services"
              glowColor="rgba(244, 63, 94, 0.25)" // Rose glow
            />
            <HoverGlowCard
              icon={Zap}
              badgeText="CONSECRATED POWER"
              title="AstroVed Shop"
              description="Enhance your aura and environment with authentic yantras, rudrakshas, and gemstones energized in powerful rituals."
              buttonText="Shop Products"
              glowColor="rgba(16, 185, 129, 0.25)" // Emerald glow
            />
            <HoverGlowCard
              icon={Map}
              badgeText="SACRED JOURNEYS"
              title="Pilgrimage Tours"
              description="Embark on guided transformative journeys to powerful vortexes and ancient temples in India to dissolve karma."
              buttonText="View Tours"
              glowColor="rgba(59, 130, 246, 0.25)" // Blue glow
            />
          </div>
        </section>

        {/* SECTION 4: Personalized Support */}
        <section>
          <div className="text-center mb-16">
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
              containerClassName="font-ui text-4xl md:text-5xl font-semibold text-midnight dark:text-white leading-tight mb-0"
              textClassName="bg-clip-text"
            >
              Personalized Support
            </ScrollFloat>
            <p className="mt-4 font-body text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ongoing spiritual support programs designed to continuously uplift your consciousness and clear ancestral blocks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <HoverGlowCard
              icon={Heart}
              badgeText="WEALTH CONSCIOUSNESS"
              title="Shreem Brzee Memberships"
              description="Immerse yourself in the ultimate wealth mantra through daily group chanting, exclusive teachings, and monthly interactive sessions to manifest abundance."
              buttonText="Join Membership"
              glowColor="rgba(217, 70, 239, 0.25)" // Fuchsia glow
            />
            <HoverGlowCard
              icon={Users}
              badgeText="ANCESTRAL BLESSINGS"
              title="Yearlong Tarpanam"
              description="Ensure continuous blessings and clear generational blocks with daily offerings made to your ancestors throughout the entire year by our priests."
              buttonText="Enroll Now"
              glowColor="rgba(245, 158, 11, 0.3)" // Amber glow
            />
          </div>
        </section>

      </div>
    </div>
  );
}
