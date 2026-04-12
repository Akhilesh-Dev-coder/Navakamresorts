import { useState, useEffect } from 'react';
import { Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileStickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down a bit, hide when near the bottom CTA naturally
      const scrollPosition = window.scrollY;
      const docHeight = document.body.offsetHeight;
      const winHeight = window.innerHeight;
      
      // If near bottom (within 500px), hide it so it doesn't clash with main footer CTA
      if (scrollPosition > 300 && scrollPosition + winHeight < docHeight - 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
           initial={{ y: 100, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           exit={{ y: 100, opacity: 0 }}
           className="fixed bottom-0 left-0 right-0 z-40 bg-navy/95 backdrop-blur-md border-t border-gold/20 md:hidden p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
        >
          <div className="flex gap-4">
            <a 
              href="mailto:info@navakam.com" 
              className="flex-1 bg-gold text-navy py-3 rounded-sm font-display uppercase tracking-widest text-center text-sm font-medium active:scale-95 transition-transform"
            >
              Enquire Now
            </a>
            <a 
              href="tel:+919746566077" 
              className="flex items-center justify-center bg-[#1a1a1a] border border-gold/30 text-gold p-3 rounded-sm active:scale-95 transition-transform"
              aria-label="Call Us"
            >
              <Phone size={20} />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileStickyCTA;
