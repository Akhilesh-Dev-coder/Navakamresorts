import { motion } from 'framer-motion';
import { Leaf, Home, Mountain, Sparkles, Flame, Map as MapIcon, MapPin } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import MobileStickyCTA from '../components/MobileStickyCTA';

const highlights = [
  {
    icon: MapIcon,
    title: "35 Acres Premium Gated Development",
    desc: "Sprawling estate designed for exclusive community living",
  },
  {
    icon: Home,
    title: "Luxury Villas (~1,600 sq. ft.)",
    desc: "Handcrafted layout with sweeping valley views",
  },
  {
    icon: Leaf,
    title: "Fruit Forestry & Spice Gardens",
    desc: "Cardamom, pepper, vanilla, jackfruit, coconut & sandalwood",
  },
  {
    icon: Mountain,
    title: "Integrated Multi-Farming System",
    desc: "Income-bearing plantation per residence ecosystem",
  },
  {
    icon: Sparkles,
    title: "Eco-Friendly Infrastructure",
    desc: "Sustainable architecture and natural harmony",
  },
  {
    icon: Flame,
    title: "Kerala Wellness Integration",
    desc: "Ayurvedic Spa and traditional wellness center access",
  },
];

const About = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#e8dcc5,#cca46a,#8a6f44)]" />
        <div className="absolute inset-0 bg-navy/40 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0B1D3A_100%)]" />
        
        <div className="relative z-10 text-center px-6 mt-16 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-display text-cream mb-4 tracking-wide drop-shadow-2xl">
              About Navakam
            </h1>
            <p className="text-xl md:text-2xl text-cream/90 uppercase tracking-widest font-light">
              Premium Second Home Communities | Luxury Nature Living
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24 px-6 bg-navy text-center">
        <ScrollReveal className="max-w-4xl mx-auto space-y-8">
          <p className="text-muted text-xl lg:text-2xl font-light leading-relaxed">
            <span className="text-gold font-display uppercase not-italic">NAVAKAM RESORTS | WELLNESS CENTERS</span> is the second-home development
            and asset management brand of TBD (P) Ltd, established in 2010. With
            strong expertise in civil engineering and construction in Cochin, Kerala,
            the brand stands as a premium lifestyle developer rooted in real estate,
            hospitality, and sustainable farming. We offer thoughtfully designed
            investments that combine luxury, nature, and long-term value.
          </p>
        </ScrollReveal>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="p-10 bg-[#121212] border border-white/5 border-l-2 border-l-gold shadow-2xl"
          >
            <h3 className="text-3xl font-display text-gold mb-6">Our Vision</h3>
            <p className="text-muted text-lg font-light leading-relaxed">
              To create exclusive lifestyle destinations that promote peace,
              wellness, and sustainable living while building a lasting legacy
              for generations.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-10 bg-[#121212] border border-white/5 border-l-2 border-l-gold shadow-2xl"
          >
            <h3 className="text-3xl font-display text-gold mb-6">Our Mission</h3>
            <ol className="list-decimal list-outside ml-5 space-y-4 text-muted text-lg font-light leading-relaxed">
              <li className="pl-2">Deliver premium second-home communities</li>
              <li className="pl-2">Integrate sustainability with modern living</li>
              <li className="pl-2">Ensure high-quality infrastructure and amenities</li>
              <li className="pl-2">Create value for both people and nature</li>
            </ol>
          </motion.div>
        </div>
      </section>

      {/* MMG Overview */}
      <section className="py-16 md:py-24 px-6 bg-navy">
        <ScrollReveal className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-display text-gold mb-4">
              Mango Mountain Garden (MMG)
            </h2>
            <div className="w-24 h-px bg-gold/50 mx-auto" />
            <p className="text-muted text-lg font-light leading-relaxed max-w-4xl mx-auto">
              Spread across 35 acres, Mango Mountain Garden (MMG) is a unique
              blend of natural beauty and green urban planning. A high-end agri-tourism
              and hospitality venture combining luxury living, sustainable agriculture,
              and wellness practices. This eco-resort model redefines rural luxury by
              offering both lifestyle and investment benefits.
            </p>
            <div className="inline-block border border-gold/40 px-6 py-2 rounded-full backdrop-blur-sm mt-4">
              <p className="text-sm tracking-[0.2em] text-cream uppercase">
                Project Concept
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((hl, idx) => (
              <div
                key={hl.title}
                className="flex flex-col items-center text-center p-8 bg-[#121212] border border-white/5 hover:border-gold/30 transition-colors duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-[#1a1a1a] flex items-center justify-center mb-6 shadow-inner">
                  <hl.icon size={28} className="text-gold" />
                </div>
                <h3 className="text-lg font-display text-cream mb-2">
                  {hl.title}
                </h3>
                <p className="text-sm text-muted font-light">{hl.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Why Invest section */}
      <section className="py-16 md:py-24 px-6 bg-[#0c120f]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-display text-gold mb-4">
              Why Invest in MMG?
            </h2>
            <div className="w-24 h-px bg-gold/50 mx-auto" />
          </ScrollReveal>
          
          <div className="space-y-6">
            {[
              "Own both land and lifestyle",
              "High potential for value appreciation",
              "Peaceful and pollution-free environment",
              "Community living with like-minded individuals",
              "Sustainable and future-ready investment"
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-6 p-6 bg-[#121212] border border-white/5 rounded-sm hover:border-gold/30 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <Leaf className="text-gold" size={24} />
                </div>
                <p className="text-xl text-cream font-light tracking-wide">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA banner */}
      <section className="py-16 md:py-32 px-6 bg-[#0a0a0a] border-t border-white/5 text-center">
        <ScrollReveal className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-display text-cream mb-4">
            Ready to invest in your future?
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-muted text-lg tracking-wide py-4 font-light">
             <a href="tel:+919746566077" className="hover:text-gold transition-colors">+91 9746566077</a>
             <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-gold/50"></span>
             <a href="mailto:info@navakam.com" className="hover:text-gold transition-colors">info@navakam.com</a>
          </div>
          <div className="flex items-start justify-center gap-4 text-muted text-lg tracking-wide pb-8 font-light mx-auto text-left">
            <MapPin size={24} className="text-gold mt-1 shrink-0" />
            <div className="flex flex-col gap-0.5">
              <span className="text-gold-light font-medium">Corporate Office</span>
              <span>Navakam Resorts & Wellness Center</span>
              <span>147/B, 1st Floor</span>
              <span>Chakkaraparambu Bypass</span>
              <span>Cochin, Kerala</span>
            </div>
          </div>
          <a
            href="https://wa.me/919746566077?text=Hello!%20I%20am%20interested%20in%20your%20properties%20and%20would%20like%20to%20enquire%20and%20book."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-gold text-navy font-display text-xl uppercase tracking-widest hover:bg-gold-light transition-colors hover:-translate-y-1 duration-300 shadow-xl"
          >
            Enquire Now
          </a>
        </ScrollReveal>
      </section>
      <MobileStickyCTA />
    </PageTransition>
  );
};

export default About;
