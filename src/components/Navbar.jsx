import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Woven Tours", path: "/woven-tours" },
  { name: "MMG Vagamon", path: "/mmg-vagamon" },
  { name: "MMG Wayanad", path: "/mmg-wayanad" },
  { name: "MMG Kodaikanal", path: "/mmg-kodaikanal" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-charcoal/95 backdrop-blur-md py-4 shadow-lg shadow-black/20" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-3 group">
          <img
            src="/assets/logo_transparent.png"
            alt="Navakam Logo"
            className="h-10 w-auto object-contain rounded-sm"
          />
          <div className="flex flex-col">
            <span className="font-display tracking-widest text-lg uppercase leading-tight">
              Navakam
            </span>
            <span className="text-[10px] tracking-widest text-gold opacity-80 uppercase">
              Hospitality
            </span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm tracking-widest uppercase transition-colors hover:text-gold ${isActive ? "text-gold" : "text-cream/80"}`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gold"
                    initial={{ scaleX: isActive ? 1 : 0 }}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-cream hover:text-gold active:scale-90 transition-all z-50 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0e0e0e] md:hidden flex flex-col justify-center items-center h-screen w-full"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent pointer-events-none" />
            <div className="flex flex-col items-center gap-10 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-2xl sm:text-3xl font-display uppercase tracking-widest transition-colors py-2 active:scale-95 duration-200 ${isActive ? "text-gold" : "text-cream"}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-12 text-center text-gold/50 text-[10px] tracking-[0.3em] uppercase"
            >
              Navakam Hospitality
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
