import React from 'react';
import { Sparkles, ArrowRight, BookOpen } from 'lucide-react';

export function AIReports() {
  return (
    <section className="py-4 md:py-6 px-6 max-w-7xl mx-auto z-10 relative" id="ai-reports">
      <div className="max-w-4xl mx-auto text-center mb-6">
        <h2 className="font-sans text-4xl sm:text-5xl text-midnight dark:text-cream leading-tight mb-4">
          Advanced AI <em className="text-amber-600 dark:text-amber-400 italic">Insights.</em>
        </h2>
        {/* <h2 className="font-sans text-4xl md:text-5xl text-midnight dark:text-cream tracking-wide leading-tight mb-6 font-bold">
          Unlock Your Future with AI
        </h2>
        <p className="font-body text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
          Experience the next generation of astrology and numerology. Our advanced AI engines generate highly personalized, instantly accessible reports tailored specifically to your cosmic blueprint.
        </p> */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 auto-rows-fr">

        {/* AI Kundali Report */}
        <a
          href="https://kundali-report.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-indigo-50/80 to-purple-50/80 dark:from-[#0a0e17] dark:to-[#0f172a] border border-black/5 dark:border-purple-500/30 p-8 sm:p-12 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] transition-all duration-500 min-h-[300px] flex flex-col justify-between"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] group-hover:bg-purple-500/20 transition-colors duration-500" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-2 lg:gap-8 h-full">
            <div className="w-40 sm:w-48 h-auto flex-shrink-0 group-hover:scale-105 transition-transform duration-500 origin-center">
              <img
                src="https://kundali-report.vercel.app/assets/Kundali_Report_book-TqjZBBfC.png"
                alt="AI Kundali Report Book"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>

            <div className="flex flex-col flex-grow text-center sm:text-left h-full justify-center">
              <h3 className="font-sans text-2xl sm:text-3xl font-bold text-midnight dark:text-cream mb-3">
                AI Kundali Report
              </h3>

              <p className="font-body text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Get an instant, comprehensive analysis of your birth chart. Discover your planetary positions, doshas, and predictions powered by cutting-edge AI.
              </p>

              <div className="flex items-center justify-center sm:justify-start gap-2 text-purple-600 dark:text-purple-400 font-bold uppercase tracking-widest text-xs sm:text-sm">
                Generate Report <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </a>

        {/* AI Numerology Report */}
        <a
          href="https://numerologyreport-umber.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-amber-50/80 to-orange-50/80 dark:from-[#0a0e17] dark:to-[#17140f] border border-black/5 dark:border-amber-500/30 p-8 sm:p-12 hover:border-amber-500/50 hover:shadow-[0_0_40px_rgba(245,158,11,0.2)] transition-all duration-500 min-h-[300px] flex flex-col justify-between"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] group-hover:bg-amber-500/20 transition-colors duration-500" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-2 lg:gap-8 h-full">
            <div className="w-40 sm:w-48 h-auto flex-shrink-0 group-hover:scale-105 transition-transform duration-500 origin-center">
              <img
                src="https://numerologyreport-umber.vercel.app/images/Numerology_Book.png"
                alt="AI Numerology Report Book"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>

            <div className="flex flex-col flex-grow text-center sm:text-left h-full justify-center">
              <h3 className="font-sans text-2xl sm:text-3xl font-bold text-midnight dark:text-cream mb-3">
                AI Numerology
              </h3>

              <p className="font-body text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Uncover the hidden meanings behind your numbers. Get an AI-driven report on your life path, expression, and soul urge numbers.
              </p>

              <div className="flex items-center justify-center sm:justify-start gap-2 text-amber-600 dark:text-amber-400 font-bold uppercase tracking-widest text-xs sm:text-sm">
                Generate Report <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </a>

      </div>
    </section>
  );
}
