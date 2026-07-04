import { ZodiacSign, LiveMomentCard } from '../types';
import { aquarius, aries, cancer, capricorn, gemini, leo, libra, pisces, sagittarius, scorpio, taurus, virgo } from '../assets/Signs/index';

export const ZODIAC_SIGNS: ZodiacSign[] = [
  { name: 'Aries', sanskrit: 'Mesha', ruler: 'Mars (Mangala)', element: 'Fire', description: 'Action-oriented, brave, and always ready to lead the way.', imageUrl: aries },
  { name: 'Taurus', sanskrit: 'Vrishabha', ruler: 'Venus (Shukra)', element: 'Earth', description: 'Patient, reliable, and focused on building a secure future.', imageUrl: taurus },
  { name: 'Gemini', sanskrit: 'Mithuna', ruler: 'Mercury (Budha)', element: 'Air', description: 'Quick-witted, highly adaptable, and excellent at communication.', imageUrl: gemini },
  { name: 'Cancer', sanskrit: 'Karka', ruler: 'Moon (Chandra)', element: 'Water', description: 'Caring, deeply emotional, and focused on family and home.', imageUrl: cancer },
  { name: 'Leo', sanskrit: 'Simha', ruler: 'Sun (Surya)', element: 'Fire', description: 'Creative, generous, and a natural born leader with a warm heart.', imageUrl: leo },
  { name: 'Virgo', sanskrit: 'Kanya', ruler: 'Mercury (Budha)', element: 'Earth', description: 'Detail-oriented, helpful, and highly organized in daily life.', imageUrl: virgo },
  { name: 'Libra', sanskrit: 'Tula', ruler: 'Venus (Shukra)', element: 'Air', description: 'Charming, fair-minded, and always seeking balance and harmony.', imageUrl: libra },
  { name: 'Scorpio', sanskrit: 'Vrishchika', ruler: 'Mars / Ketu', element: 'Water', description: 'Passionate, focused, and capable of deep personal transformation.', imageUrl: scorpio },
  { name: 'Sagittarius', sanskrit: 'Dhanus', ruler: 'Jupiter (Guru)', element: 'Fire', description: 'Optimistic, adventurous, and always seeking to learn and explore.', imageUrl: sagittarius },
  { name: 'Capricorn', sanskrit: 'Makara', ruler: 'Saturn (Shani)', element: 'Earth', description: 'Hardworking, responsible, and dedicated to achieving their goals.', imageUrl: capricorn },
  { name: 'Aquarius', sanskrit: 'Kumbha', ruler: 'Saturn / Rahu', element: 'Air', description: 'Innovative, independent, and focused on helping the community.', imageUrl: aquarius },
  { name: 'Pisces', sanskrit: 'Meena', ruler: 'Jupiter / Ketu', element: 'Water', description: 'Imaginative, empathetic, and deeply connected to their emotions.', imageUrl: pisces }
];

import { ChandraMoon, guru_pushya_yoga, pradosham, Rahu_Ketu_Node_shift, sun_transit } from '../assets/Auspicious_portal/index';

export const LIVE_MOMENTS: LiveMomentCard[] = [
  { id: '1', title: 'Guru Pushya Yoga Portal', tag: 'Double Wealth Transit', urgency: 'Limited Seats', image: guru_pushya_yoga },
  { id: '2', title: 'Rahu-Ketu Node Shift', tag: '18-Month Cycle Launch', urgency: 'Auspicious Portal', image: Rahu_Ketu_Node_shift },
  { id: '3', title: 'Pradosham Karma Cleansing', tag: 'Twilight Energy Peak', urgency: 'Next 24 Hours', image: pradosham },
  { id: '4', title: 'Surya Sun Transit in Gemini', tag: 'Intellectual Solar Inflow', urgency: 'This Week', image: sun_transit },
  { id: '5', title: 'Saturn Retrograde Pivot', tag: 'Dharma Alignment Check', urgency: 'Closes in 3 days', image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=600' },
  { id: '6', title: 'Chandra Moon Nakshatra Pushya', tag: 'Highest Healing Day', urgency: 'Auspicious Portal', image: ChandraMoon }
];

export const HOROSCOPES: Record<string, { Today: string; Week: string; Month: string; hours: string; obstacle: string }> = {
  Aries: {
    Today: "You have a lot of energy today. Speak your mind, but try to stay polite and kind.",
    Week: "Focus on your daily routines. Getting some exercise and planning your week will help you a lot.",
    Month: "Great things are coming for your career! Keep an eye out for new opportunities.",
    hours: "09:00 AM - 10:45 AM",
    obstacle: "Being too impatient with others"
  },
  Taurus: {
    Today: "It's a great day to review your finances. Double-check your budget to ensure you are on track.",
    Week: "You'll have smooth interactions with your friends. It's a good time to focus on your home or garden.",
    Month: "You're entering a lucky phase. Take some time to rest and gather your strength.",
    hours: "11:30 AM - 01:15 PM",
    obstacle: "Resisting helpful changes"
  },
  Gemini: {
    Today: "Your mind is very sharp today. You might suddenly figure out a solution to a problem at home.",
    Week: "Keep your communication clear and honest. Writing down your ideas will prove very useful.",
    Month: "Things are moving forward quickly now. It's a great time for travel and clear thinking.",
    hours: "02:00 PM - 03:45 PM",
    obstacle: "Getting distracted easily"
  },
  Cancer: {
    Today: "Take a break and focus on your home today. Cook a nice meal and relax away from your screens.",
    Week: "Spend time near water or connect with your family history to find a sense of peace.",
    Month: "This is a quiet, reflective month for you. Meditation and spiritual practices will bring you joy.",
    hours: "07:30 AM - 09:15 AM",
    obstacle: "Worrying too much about the past"
  },
  Leo: {
    Today: "You are shining bright today! Lead conversations in your community, but remember to stay humble.",
    Week: "It's a great time to meet new people. Help your friends and be generous with your time.",
    Month: "Your creativity is at an all-time high. Just make sure to avoid arguments to keep things smooth.",
    hours: "08:15 AM - 10:00 AM",
    obstacle: "Seeking too much approval"
  },
  Virgo: {
    Today: "Planning ahead will bring you success at work. Your career is looking very strong right now.",
    Week: "Organize your living space. Cleaning up your room or desk can help you think more clearly.",
    Month: "This is a great month to build your career. Make careful plans and move forward with confidence.",
    hours: "10:30 AM - 12:00 PM",
    obstacle: "Overthinking small details"
  },
  Libra: {
    Today: "Take some time to learn something new. Reading a good book or taking a walk will calm you.",
    Week: "Teamwork is key this week. If you need to sign any important papers, do it in the afternoon.",
    Month: "Relationships are blooming! It's a wonderful month to spend time with the people you love.",
    hours: "03:15 PM - 05:00 PM",
    obstacle: "Struggling to make decisions"
  },
  Scorpio: {
    Today: "You might discover some deep truths today. Spend a little time in quiet reflection.",
    Week: "Old memories might come up. Lighting a candle or taking a peaceful walk can help you relax.",
    Month: "This is a time to let go of old emotional baggage. You will feel refreshed and much lighter.",
    hours: "06:00 PM - 07:45 PM",
    obstacle: "Holding on to old grudges"
  },
  Sagittarius: {
    Today: "Your relationships are in focus today. Being a good listener will help you build strong bonds.",
    Week: "It's time to expand your horizons. A short trip or a walk in nature will clear your mind.",
    Month: "A big phase of growth is here! Dive into new subjects and share your ideas with others.",
    hours: "12:15 PM - 02:00 PM",
    obstacle: "Sounding too bossy"
  },
  Capricorn: {
    Today: "Consistency is key today. Focus on finishing your daily chores and tasks with a positive attitude.",
    Week: "Organize your finances and accounts. Being responsible with your money will pay off soon.",
    Month: "This is a slow but steady month. Keep working hard and you will build a solid foundation.",
    hours: "04:30 PM - 06:15 PM",
    obstacle: "Being too negative under stress"
  },
  Aquarius: {
    Today: "You're full of unique ideas today! Write down any sudden thoughts about helping your community.",
    Week: "Talk to your friends. They will be very supportive and eager to hear your creative ideas.",
    Month: "It's time to focus on your own personal growth. Don't worry too much about what others expect.",
    hours: "01:30 PM - 03:00 PM",
    obstacle: "Acting too distant from family"
  },
  Pisces: {
    Today: "Your intuition is very strong today. Pay attention to your dreams as they might hold helpful clues.",
    Week: "Take care of your energy. A warm bath and some deep breathing exercises will feel wonderful.",
    Month: "This is a peaceful and spiritual month for you. Trust that things will happen at the right time.",
    hours: "06:30 AM - 08:00 AM",
    obstacle: "Ignoring reality"
  }
};

export const TESTIMONIALS = [
  {
    name: "Sujatha Krishnan",
    role: "Business Owner",
    quote: "The timing suggestions were incredibly helpful! I was able to avoid starting a new project during a stressful week and instead waited for a better time. It saved me a lot of money and headache.",
    stats: "Joined 2024 · 18 Consultations"
  },
  {
    name: "Arthur Pendelton",
    role: "Architect",
    quote: "I love the straightforward daily guidance. Knowing that I was in a great period for 'building' gave me the confidence to pitch a huge design project, and it got approved!",
    stats: "Joined 2025 · 4 Custom Reports"
  },
  {
    name: "Karan Johar",
    role: "Software Developer",
    quote: "The app is so easy to use! I check my best hours every morning before planning my day. It has completely changed how I organize my work and keeps my stress levels low.",
    stats: "Joined 2026 · Premium Member"
  }
];
