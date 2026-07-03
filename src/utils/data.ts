import { ZodiacSign, LiveMomentCard } from '../types';

export const ZODIAC_SIGNS: ZodiacSign[] = [
  { name: 'Aries', symbol: '♈', sanskrit: 'Mesha', ruler: 'Mars (Mangala)', element: 'Fire', description: 'Initiation, courageous drive, pioneering actions, high physical stamina.', imageUrl: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=600' },
  { name: 'Taurus', symbol: '♉', sanskrit: 'Vrishabha', ruler: 'Venus (Shukra)', element: 'Earth', description: 'Stability, patient growth, financial alignment, sensory wisdom.', imageUrl: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=600' },
  { name: 'Gemini', symbol: '♊', sanskrit: 'Mithuna', ruler: 'Mercury (Budha)', element: 'Air', description: 'Dual adaptability, communication, logical coordination, rapid learning.', imageUrl: 'https://images.unsplash.com/photo-1543728741-ee98a285d634?auto=format&fit=crop&q=80&w=600' },
  { name: 'Cancer', symbol: '♋', sanskrit: 'Karka', ruler: 'Moon (Chandra)', element: 'Water', description: 'Nurturing, emotional core, ancestral instincts, secure environments.', imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600' },
  { name: 'Leo', symbol: '♌', sanskrit: 'Simha', ruler: 'Sun (Surya)', element: 'Fire', description: 'Creative authority, generous heart, solar expression, pure sovereignty.', imageUrl: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80&w=600' },
  { name: 'Virgo', symbol: '♍', sanskrit: 'Kanya', ruler: 'Mercury (Budha)', element: 'Earth', description: 'Detailed analysis, restorative routines, service, systemic harmony.', imageUrl: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=600' },
  { name: 'Libra', symbol: '♎', sanskrit: 'Tula', ruler: 'Venus (Shukra)', element: 'Air', description: 'Harmonic balance, relational agreements, artistic judgment, mutual respect.', imageUrl: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=600' },
  { name: 'Scorpio', symbol: '♏', sanskrit: 'Vrishchika', ruler: 'Mars / Ketu', element: 'Water', description: 'Deep transmutative power, absolute focus, hidden truths, energetic intensity.', imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=600' },
  { name: 'Sagittarius', symbol: '♐', sanskrit: 'Dhanus', ruler: 'Jupiter (Guru)', element: 'Fire', description: 'Philosophical optimism, spiritual flight, cosmic vision, moral purpose.', imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=600' },
  { name: 'Capricorn', symbol: '♑', sanskrit: 'Makara', ruler: 'Saturn (Shani)', element: 'Earth', description: 'Structured mastery, persistent duty, public alignment, heavy focus.', imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600' },
  { name: 'Aquarius', symbol: '♒', sanskrit: 'Kumbha', ruler: 'Saturn / Rahu', element: 'Air', description: 'Systemic networks, global humanitarian flow, unique intellect, liberation.', imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600' },
  { name: 'Pisces', symbol: '♓', sanskrit: 'Meena', ruler: 'Jupiter / Ketu', element: 'Water', description: 'Transcendence, dream synthesis, cosmic dissolution, absolute empathy.', imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=600' }
];

export const LIVE_MOMENTS: LiveMomentCard[] = [
  { id: '1', title: 'Guru Pushya Yoga Portal', tag: 'Double Wealth Transit', urgency: 'Limited Seats', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=600' },
  { id: '2', title: 'Rahu-Ketu Node Shift', tag: '18-Month Cycle Launch', urgency: 'Auspicious Portal', image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=600' },
  { id: '3', title: 'Pradosham Karma Cleansing', tag: 'Twilight Energy Peak', urgency: 'Next 24 Hours', image: 'https://images.unsplash.com/photo-1436891620584-37651490b414?auto=format&fit=crop&q=80&w=600' },
  { id: '4', title: 'Surya Sun Transit in Gemini', tag: 'Intellectual Solar Inflow', urgency: 'This Week', image: 'https://images.unsplash.com/photo-1502481851512-e9e2529bbbf9?auto=format&fit=crop&q=80&w=600' },
  { id: '5', title: 'Saturn Retrograde Pivot', tag: 'Dharma Alignment Check', urgency: 'Closes in 3 days', image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=600' },
  { id: '6', title: 'Chandra Moon Nakshatra Pushya', tag: 'Highest Healing Day', urgency: 'Auspicious Portal', image: 'https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?auto=format&fit=crop&q=80&w=600' }
];

export const HOROSCOPES: Record<string, { Today: string; Week: string; Month: string; hours: string; obstacle: string }> = {
  Aries: {
    Today: "Today, Mars fuels a strong drive in your communication zone. Express yourself boldly but mind the tone.",
    Week: "This week requires structure. Align your energy with physical exercises and detailed business plans.",
    Month: "A powerful building phase is rising in your public status. Seize career advancement invitations.",
    hours: "09:00 AM - 10:45 AM",
    obstacle: "Impatience in partnerships"
  },
  Taurus: {
    Today: "Venus casts a gentle gaze on your assets today. Review resource allocations with meticulous precision.",
    Week: "Expect peaceful breakthroughs in local networks. Focus on long-term agricultural or estate topics.",
    Month: "Jupiter is preparing a beneficial transit over your ascendant. Rest and accumulate strength.",
    hours: "11:30 AM - 01:15 PM",
    obstacle: "Stubborn resistance to standard shifts"
  },
  Gemini: {
    Today: "Mercury enhances your conceptual agility. A brilliant solution resolving a household knot arrives today.",
    Week: "Keep dialogue open and transparent. Write down your dreams as they hold coded creative transits.",
    Month: "A waiting phase ends as Mercury direct establishes mental clarity and dynamic travel lines.",
    hours: "02:00 PM - 03:45 PM",
    obstacle: "Scattered focuses"
  },
  Cancer: {
    Today: "The Moon urges deep domestic sanctuary today. Cook a clean nourishing meal and quiet your devices.",
    Week: "Reconnect with water structures or perform ancestral tarpanam to release persistent karmic weight.",
    Month: "A quiet, highly reflective month. Spiritual alignment and internal meditation yield heavy success.",
    hours: "07:30 AM - 09:15 AM",
    obstacle: "Overthinking historical memory patterns"
  },
  Leo: {
    Today: "Solar radiance illuminates your collective connections. Lead community discussions with genuine humbleness.",
    Week: "A brilliant time to expand your sphere. Support your peers with generous guidance and raw action.",
    Month: "Your power reaches a creative peak. Ensure ego-clashes are avoided to preserve vital alignments.",
    hours: "08:15 AM - 10:00 AM",
    obstacle: "Compulsive need for external validation"
  },
  Virgo: {
    Today: "Detailed planning yields high career success. Your professional sectors are receiving structured light.",
    Week: "Organize your micro-environments. A simple clean-up of northern corners clears financial paths.",
    Month: "A robust building phase centered on career foundations. Draft plans carefully and move with confidence.",
    hours: "10:30 AM - 12:00 PM",
    obstacle: "Over-analyzing microscopic details"
  },
  Libra: {
    Today: "Seek philosophical expansion. Reading a sacred text or visiting a serene sanctuary calms your system.",
    Week: "Collaborations require harmony. Sign important agreements during your favorable afternoon windows.",
    Month: "Jupiter aligns beautifully with your element. Relationships blossom under gentle venusian guidance.",
    hours: "03:15 PM - 05:00 PM",
    obstacle: "Indecision in legal alignments"
  },
  Scorpio: {
    Today: "Deep transmutative insights are available today. Spend time in silence; listen to your solar plexus.",
    Week: "Ancestral patterns surface. Perform a small candle ritual or light deep traditional sandalwood incense.",
    Month: "A strong waiting phase that demands release of obsolete emotional attachments. Rise rejuvenated.",
    hours: "06:00 PM - 07:45 PM",
    obstacle: "Holding on to historical grievances"
  },
  Sagittarius: {
    Today: "Your partnership sector is highly active. Compassionate listening builds solid bridges today.",
    Week: "Expand your horizons. A short pilgrimage or physical nature walk resets your mental orbit.",
    Month: "A massive expansion phase is active. Pursue deep cosmic studies and launch major public programs.",
    hours: "12:15 PM - 02:00 PM",
    obstacle: "Preachy communication styles"
  },
  Capricorn: {
    Today: "Saturn demands consistent duty and micro-service. Focus on completing dull repetitive tasks with joy.",
    Week: "Structure your personal assets and balance sheets. Financial responsibility rewards your patience.",
    Month: "A steady construction phase. Keep your head down and build solid, unshakeable foundations.",
    hours: "04:30 PM - 06:15 PM",
    obstacle: "Rigid pessimism under load"
  },
  Aquarius: {
    Today: "A surge of unique intellectual inspiration strikes. Note down sudden ideas regarding humanitarian projects.",
    Week: "Engage with supportive networks. Your eccentric ideas find eager ears among your close peers.",
    Month: "Saturn and Rahu challenge you to step into individual mastery. Let go of public expectations.",
    hours: "01:30 PM - 03:00 PM",
    obstacle: "Emotional detachment from close kin"
  },
  Pisces: {
    Today: "Your intuitive channels are fully open. Dream images carry deep alignment warnings; log them.",
    Week: "Cleanse your energetic aura with sea salt bath and gentle pranayama breathwork routines.",
    Month: "A period of complete cosmic sanctuary. Connect deeply with your lineage and trust timing.",
    hours: "06:30 AM - 08:00 AM",
    obstacle: "Idealistic avoidance of reality"
  }
};

export const TESTIMONIALS = [
  {
    name: "Sujatha Krishnan",
    role: "Founder, Prana Wellness",
    quote: "The alignment check was eerily precise. It marked my exact transition into a Saturn Saturn sade-sati wait phase, helping me pause a risky physical expansion and save invaluable capital. A profound masterpiece of Vedic design.",
    stats: "Joined 2024 · 18 Checks performed"
  },
  {
    name: "Arthur Pendelton",
    role: "Architectural Lead, AP Studio",
    quote: "As an architect, I live by structures. Understanding that my timing was in a Jupiter-fueled 'Building' cycle gave me the courage to pitch the sustainable cathedral design. It was approved yesterday. Extraordinary accuracy.",
    stats: "Joined 2025 · 4 Custom Reports"
  },
  {
    name: "Karan Johar",
    role: "Software Architect",
    quote: "The micro-interactions, the theme transitions, and the real-time AI Vedic feedback are flawless. I check my favorable hours every Monday morning before organizing standups. It has changed the team's balance completely.",
    stats: "Joined 2026 · Premium Member"
  }
];
