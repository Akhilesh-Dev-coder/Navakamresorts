import { NavLink } from "react-router-dom";
import { Phone, Globe, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0e0e0e] pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background gradient texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col items-start">
            <NavLink to="/" className="flex items-center gap-3 group mb-6">
              <img
                src="/assets/logo_transparent.png"
                alt="Navakam Logo"
                className="h-12 w-auto object-contain rounded-sm"
              />
              <div className="flex flex-col">
                <span className="font-display tracking-widest text-xl uppercase leading-tight">
                  Navakam
                </span>
                <span className="text-xs tracking-widest text-gold opacity-80 uppercase">
                  Hospitality
                </span>
              </div>
            </NavLink>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Curating extraordinary escapes across India's most breathtaking
              destinations. Where luxury meets nature.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className="font-display text-gold-light text-xl mb-6 tracking-wide">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              <NavLink
                to="/"
                className="text-muted hover:text-gold transition-colors text-sm uppercase tracking-wider"
              >
                Navakam
              </NavLink>

              <NavLink
                to="/woven-tours"
                className="text-muted hover:text-gold transition-colors text-sm uppercase tracking-wider"
              >
                Woven Tours & Travels
              </NavLink>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col">
            <h4 className="font-display text-gold-light text-xl mb-6 tracking-wide">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4 text-muted text-sm">
              <a
                href="https://www.navakam.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-gold transition-colors"
              >
                <Globe size={18} className="text-gold" />
                www.navakam.com
              </a>
              <a
                href="tel:+919746566077"
                className="flex items-center gap-3 hover:text-gold transition-colors"
              >
                <Phone size={18} className="text-gold" />
                +91 9746566077
              </a>
              <a
                href="tel:+918714906102"
                className="flex items-center gap-3 hover:text-gold transition-colors"
              >
                <Phone size={18} className="text-gold" />
                +91 8714906102
              </a>
              <a
                href="mailto:info@navakam.com"
                className="flex items-center gap-3 hover:text-gold transition-colors"
              >
                <Mail size={18} className="text-gold" />
                info@navakam.com
              </a>
              <div className="flex items-start gap-3 text-muted">
                <MapPin size={18} className="text-gold mt-1 shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-gold-light font-medium">
                    Corporate Office
                  </span>
                  <span>Navakam Resorts & Wellness Center</span>
                  <span>147/B, 1st Floor</span>
                  <span>Chakkaraparambu Bypass</span>
                  <span>Cochin, Kerala</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gold/20 mb-8" />

        <div className="text-center text-muted/60 text-xs tracking-wider">
          <p>
            &copy; {new Date().getFullYear()} Navakam Hospitality. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
