import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export function SacredJourneys() {
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      galleryRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-cream/10 dark:bg-midnight/30 border-t border-gold/10 overflow-hidden" id="sacred-journeys">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-purple dark:text-saffron block">PHYSICAL PILGRIMAGE</span>
          <h2 className="font-ui text-3xl text-midnight dark:text-cream mt-1 tracking-wider">Sacred Vedic Journeys</h2>
        </div>
        <div className="flex flex-col items-end gap-4">
          <p className="font-body text-xs text-gray-500 dark:text-gray-400 max-w-sm text-right">
            For those who feel called to walk the ancient energetic grounds. Swipe or use arrows to navigate.
          </p>
          <div className="flex items-center gap-3">
            <button onClick={() => scrollGallery('left')} className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-midnight dark:text-cream hover:bg-gold/10 transition-colors">
              <ArrowRight className="w-4 h-4 rotate-180" />
            </button>
            <button onClick={() => scrollGallery('right')} className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-midnight dark:text-cream hover:bg-gold/10 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Snap container */}
      <div ref={galleryRef} className="flex gap-6 overflow-x-auto snap-x scroll-snap-x no-scrollbar pb-8 px-6 md:px-12 scroll-smooth">
        
        <div className="w-[80vw] sm:w-[400px] h-[450px] rounded-4xl overflow-hidden relative flex-shrink-0 snap-center group border border-gold/10 shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&q=80&w=600" 
            alt="Himalayan Temple" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/20 to-transparent z-10" />
          <div className="absolute bottom-6 left-6 z-20 text-cream">
            <span className="text-[10px] font-mono text-saffron uppercase tracking-widest">Himalayan high alt</span>
            <h3 className="font-ui text-xl mt-1 tracking-wider">Guided Temple Tours</h3>
          </div>
        </div>

        <div className="w-[80vw] sm:w-[400px] h-[450px] rounded-4xl overflow-hidden relative flex-shrink-0 snap-center group border border-gold/10 shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1604598656458-3fe8588e5e5d?auto=format&fit=crop&q=80&w=600" 
            alt="Deep Temple Sanctum" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/20 to-transparent z-10" />
          <div className="absolute bottom-6 left-6 z-20 text-cream">
            <span className="text-[10px] font-mono text-purple dark:text-gold uppercase tracking-widest">Tamil Nadu Consecrations</span>
            <h3 className="font-ui text-xl mt-1 tracking-wider">Festival Consecrated Travel</h3>
          </div>
        </div>

        <div className="w-[80vw] sm:w-[400px] h-[450px] rounded-4xl overflow-hidden relative flex-shrink-0 snap-center group border border-gold/10 shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=600" 
            alt="Sunrise Ganges" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/20 to-transparent z-10" />
          <div className="absolute bottom-6 left-6 z-20 text-cream">
            <span className="text-[10px] font-mono text-saffron uppercase tracking-widest">Varanasi Sunrise</span>
            <h3 className="font-ui text-xl mt-1 tracking-wider">Sunrise River Ceremonies</h3>
          </div>
        </div>

        <div className="w-[80vw] sm:w-[400px] h-[450px] rounded-4xl overflow-hidden relative flex-shrink-0 snap-center group border border-gold/10 shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&q=80&w=600" 
            alt="Mountain Shrines" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/20 to-transparent z-10" />
          <div className="absolute bottom-6 left-6 z-20 text-cream">
            <span className="text-[10px] font-mono text-purple dark:text-gold uppercase tracking-widest">Western Ghats peak</span>
            <h3 className="font-ui text-xl mt-1 tracking-wider">Mountain Cave Shrines</h3>
          </div>
        </div>

      </div>
    </section>
  );
}
