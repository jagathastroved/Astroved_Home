import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

const PORT = 3000;

// Lazy initialize Gemini AI with fallback option
let aiInstance: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!aiInstance) {
    const key = process.env.GEMINI_API_KEY;
    if (key && key !== 'MY_GEMINI_API_KEY' && key.trim() !== '') {
      aiInstance = new GoogleGenAI({
        apiKey: key,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
    }
  }
  return aiInstance;
}

// Simulated fallback astrology engine in case API key is missing or fails
function getMockReading(name: string, dob: string, tob: string, pob: string, query: string, zodiac: string) {
  const phases: ('Building' | 'Waiting')[] = ['Building', 'Waiting'];
  const rIndex = (name.length + dob.length + (query?.length || 0)) % 2;
  const phase = phases[rIndex];
  
  const vibeScore = 40 + ((name.length * 7 + dob.length * 3) % 55);
  
  const sunSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
  const moonSignIdx = (name.length + 3) % 12;
  const ascSignIdx = (dob.length + 5) % 12;
  const moonSign = sunSigns[moonSignIdx];
  const ascSign = sunSigns[ascSignIdx];
  
  const nakshatras = ['Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra', 'Punarvasu', 'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni', 'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha', 'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha', 'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'];
  const nakshatra = nakshatras[(name.length + dob.length) % 27];

  const userQuery = query || "general cosmic timing";

  const details = phase === 'Building' 
    ? `Dear ${name || 'Seeker'}, your current stars indicate a highly constructive cycle of active creation. Powered by Nakshatra ${nakshatra}, your Ascendant in ${ascSign} triggers a powerful urge to manifest new opportunities. This is a crucial time to launch initiatives, initiate difficult conversations, and build foundations. Jupiter's gentle alignment with your Natal Moon in ${moonSign} provides protective, expansive energy that guards your endeavors from sudden setbacks.\n\nHowever, Vedic wisdom teaches that even in a building phase, patience is the ultimate anchor. As you push forward with your request about "${userQuery}", avoid forced timelines. Dedicate your morning hours to structured planning and physical execution. Let your projects mature like a fine blossom, and ensure you remain aligned with high-vibe intentions rather than short-term gains.\n\nThis cycle also calls you to acknowledge inherited family structures. A subtle, positive influence from Saturn suggests that ancestral healing efforts, particularly sharing food or donating to a cause in memory of elders, will release lingering blockages in your career path. Trust the timing of your life; you are exactly where your soul needs to learn.`
    : `Dear ${name || 'Seeker'}, the planetary gears indicate a period of deliberate pause and deep internal alignment. With your Moon in ${moonSign} receiving a reflective gaze from Saturn, rushing forward with your request regarding "${userQuery}" may meet unnecessary friction. This is not a delay of your destiny, but a cosmic sanctuary of waiting. It is a period for clearing clutter, re-evaluating commitments, and healing ancestral patterns.\n\nYour Ascendant in ${ascSign} suggests that your vital energies are being pulled inward. Use this time to refine your craft, meditate, and strengthen your internal reservoir. Rushing decisions under this transit would lead to fatigue. Cultivate stillness, for in Vedic philosophy, waiting is an active, sacred practice where the seeds of the next 'Building' phase accumulate strength.\n\nYour favorable hours today indicate a powerful window in the late afternoon for deep meditation and spiritual alignment. Practice gratitude, burn standard sandalwood incense, and offer silent prayers to your lineage. When the door eventually swings open, you will walk through it not with anxious urgency, but with the majestic calm of a soul in lockstep with the cosmos.`;

  return {
    phase,
    phaseTitle: phase === 'Building' ? 'Jupiter Transit Expansion & Solar Vitality' : 'Saturn Shani Sade Sati Reflective Sanctuary',
    phaseVibe: phase === 'Building' ? 'A radiant wind is behind you. Propel forward with integrity and steady action.' : 'The tides are resting. Cultivate internal silence, clear debt, and refine your foundations.',
    vibeScore,
    alignment: {
      sun: { house: '10th', sign: zodiac || 'Aries', status: phase === 'Building' ? 'Exalted' : 'Stable' },
      moon: { house: '4th', sign: moonSign, status: 'Nurturing' },
      ascendant: `${ascSign} Rising`
    },
    favorableHours: phase === 'Building' ? ['08:15 AM - 10:30 AM', '05:00 PM - 06:45 PM'] : ['06:30 AM - 08:00 AM', '07:30 PM - 09:15 PM'],
    detailedReport: details,
    actionableSteps: phase === 'Building' 
      ? ['Initiate the primary project you have been putting off immediately.', 'Perform a morning solar physical alignment or gentle stretch.', 'Speak with clarity and make structured commitments.']
      : ['De-clutter your physical space, especially northern corners.', 'Avoid launching brand new financial investments for the next 7 days.', 'Spend 15 minutes in silent breathwork during your favorable evening window.'],
    luckyColor: phase === 'Building' ? 'Saffron Gold' : 'Cosmic Indigo',
    luckyNumber: phase === 'Building' ? 3 : 7,
    nakshatra
  };
}

// API endpoint for Astro readings (Vedic Cosmic Timing engine)
app.post('/api/generate-reading', async (req, res) => {
  const { name, dob, tob, pob, query, zodiac } = req.body;
  
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const ai = getGeminiClient();

  if (!ai) {
    // If no API key, return the simulated/fallback reading
    console.log('[Astrology Engine] Using high-fidelity local Vedic engine (No Gemini API key detected).');
    const reading = getMockReading(name, dob, tob, pob, query, zodiac);
    return res.json({ reading, source: 'Vedic Local Engine' });
  }

  try {
    const prompt = `You are a master Vedic Astrologer (Jyotishi) and cosmic timing specialist. Generate a deeply personalized cosmic timing analysis.
    User Details:
    - Name: ${name}
    - Birth Date: ${dob}
    - Birth Time: ${tob || 'Not specified'}
    - Birth Place: ${pob || 'Not specified'}
    - Current Query/Area of Focus: ${query || 'General cosmic path and timing'}
    - Selected Sun/Moon/Zodiac Sign: ${zodiac || 'Aries'}

    Calculate their astrological standing. Decide if they are in a "Building" phase (active action, creation, high vital energy) or a "Waiting" phase (reflection, restoration, clearing blockages, ancestral clearing). 
    Provide real astrological flavor using Vedic concepts (Nakshatras, Saturn Sade Sati, Jupiter transit, houses, ascendants).
    The detailedReport must be extremely warm, lyrical, highly detailed (about 3 medium paragraphs), inspiring, and directly reference their query: "${query || 'General guidance'}".
    
    You MUST return a JSON response matching this TypeScript schema EXACTLY:
    {
      "phase": "Building" | "Waiting",
      "phaseTitle": string (e.g. "Jupiter Transit Expansion" or "Saturn Shani Sade Sati"),
      "phaseVibe": string (1-sentence poetic summary),
      "vibeScore": number (0 to 100, indicating overall cosmic favorability),
      "alignment": {
        "sun": { "house": string, "sign": string, "status": string },
        "moon": { "house": string, "sign": string, "status": string },
        "ascendant": string
      },
      "favorableHours": string[], (provide exactly 2 intervals like "10:30 AM - 12:00 PM")
      "detailedReport": string (3 paragraphs of deeply tailored text discussing action, spiritual growth, lineage, or career),
      "actionableSteps": string[], (provide exactly 3 practical steps)
      "luckyColor": string,
      "luckyNumber": number,
      "nakshatra": string
    }
    Ensure the response is valid JSON and contains absolutely no markdown blocks or backticks, just raw JSON.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        temperature: 1.0,
      }
    });

    if (response && response.text) {
      const data = JSON.parse(response.text.trim());
      return res.json({ reading: data, source: 'Gemini 3.5' });
    } else {
      throw new Error('Empty response from Gemini');
    }
  } catch (error) {
    console.error('[Astrology Engine] Gemini error, falling back to local engine:', error);
    const reading = getMockReading(name, dob, tob, pob, query, zodiac);
    return res.json({ reading, source: 'Vedic Local Engine (Fallback)' });
  }
});

// Serve frontend assets
if (process.env.NODE_ENV !== 'production') {
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);
} else {
  const distPath = path.join(process.cwd(), 'dist');
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Cosmic Timing Server running on http://0.0.0.0:${PORT}`);
});
