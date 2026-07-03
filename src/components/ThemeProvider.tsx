import React, { createContext, useContext, useState, useEffect } from 'react';
import { Theme } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  const [wipeConfig, setWipeConfig] = useState<{
    isActive: boolean;
    x: number;
    y: number;
    targetTheme: Theme;
  } | null>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = (e?: React.MouseEvent<HTMLButtonElement>) => {
    const targetTheme: Theme = theme === 'light' ? 'dark' : 'light';
    
    // Get mouse coordinates for the radial wipe
    let x = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;
    let y = typeof window !== 'undefined' ? window.innerHeight / 2 : 0;
    
    if (e) {
      x = e.clientX;
      y = e.clientY;
    } else {
      // Find the theme toggle button if no event was passed
      const btn = document.getElementById('theme-toggle-btn');
      if (btn) {
        const rect = btn.getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
      }
    }

    setWipeConfig({
      isActive: true,
      x,
      y,
      targetTheme,
    });

    // We change the actual theme state after a micro-delay or instantly, 
    // letting the overlay animate, then finalize the theme.
    // Let's set the theme immediately so the content updates, 
    // and let the wipe overlay cover it with the old color and fade out/expand!
    // Or we can let the wipe animate first. 
    // The most seamless way:
    // Create an overlay with the TARGET theme's background, and animate its clip-path expanding.
    // Once finished (e.g. after 500ms), we change the main theme state and remove the overlay.
    setTimeout(() => {
      setTheme(targetTheme);
    }, 150);

    setTimeout(() => {
      setWipeConfig(null);
    }, 600);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      
      {/* Immersive radial wipe container */}
      <AnimatePresence>
        {wipeConfig && (
          <motion.div
            initial={{ 
              clipPath: `circle(0px at ${wipeConfig.x}px ${wipeConfig.y}px)`,
              opacity: 1 
            }}
            animate={{ 
              clipPath: `circle(150% at ${wipeConfig.x}px ${wipeConfig.y}px)`,
              opacity: 1
            }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.3 }
            }}
            transition={{ 
              duration: 0.5, 
              ease: [0.16, 1, 0.3, 1] // Custom cubic-bezier matching spec
            }}
            className={`fixed inset-0 z-[9999] pointer-events-none ${
              wipeConfig.targetTheme === 'dark' 
                ? 'bg-[#0F1329]' 
                : 'bg-[#FFFDF6]'
            }`}
          />
        )}
      </AnimatePresence>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
