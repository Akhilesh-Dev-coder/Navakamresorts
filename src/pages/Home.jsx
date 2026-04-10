import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Leaf, Briefcase, Network, MapPin } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import InvestmentSchemes from '../components/InvestmentSchemes';

const properties = [
  {
    title: 'Woven Tours & Travels (P) Ltd',
    tagline: 'Crafting journeys, creating memories',
    path: '/woven-tours',
    bg: "bg-[url('https://picsum.photos/seed/woven/800/600')] bg-cover bg-center"
  },
  {
    title: 'MMG Vagamon',
    tagline: 'A misty highland sanctuary',
    path: '/mmg-vagamon',
    bg: "bg-[url('https://picsum.photos/seed/vagamon/800/600')] bg-cover bg-center"
  },
  {
    title: 'MMG Resorts Wayanad',
    tagline: 'Wild luxury in the Western Ghats',
    path: '/mmg-wayanad',
    bg: "bg-[url('https://picsum.photos/seed/wayanad/800/600')] bg-cover bg-center"
  },
  {
    title: 'MMG Resorts Kodaikanal',
    tagline: 'Serenity above the clouds',
    path: '/mmg-kodaikanal',
    bg: "bg-[url('https://picsum.photos/seed/kodaikanal/800/600')] bg-cover bg-center"
  }
];

const Home = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#0a1913,#1a3a2a,#4a3a1a)]" />
        <div className="absolute inset-0 bg-black/60 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#000_100%)]" />
        
        <div className="relative z-10 text-center px-6 mt-16 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl md:leading-tight font-display text-cream mb-6 tracking-wide drop-shadow-2xl">
              Where Luxury <br /><span className="text-gold italic">Meets Nature</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="text-lg md:text-xl text-cream/90 mb-10 tracking-widest uppercase font-light leading-relaxed max-w-2xl"
          >
            Navakam Hospitality — Curating extraordinary escapes across India's most breathtaking destinations
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 md:gap-6 mt-8"
          >
            <a href="#properties" className="w-full text-center sm:w-auto px-8 py-4 bg-gold text-charcoal font-display text-lg uppercase tracking-widest hover:bg-gold-light active:scale-95 transition-all duration-300">
              Explore Our Properties
            </a>
            <a href="mailto:info@navakamresorts.com" className="w-full text-center sm:w-auto px-8 py-4 border border-gold text-gold font-display text-lg uppercase tracking-widest hover:bg-gold/10 active:scale-95 transition-all duration-300">
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
        <ScrollReveal className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-sm tracking-[0.2em] text-gold uppercase font-light">
            Premium Second Home Communities | Luxury Nature Living
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-cream">
            About Navakam
          </h2>
          <div className="w-24 h-px bg-gold/50 mx-auto" />
          <p className="text-muted text-lg lg:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            NAVAKAM RESORTS | WELLNESS CENTERS is the second-home development
            and asset management brand of TBD (P) Ltd, established in 2010. With
            strong expertise in civil engineering and construction in Cochin, Kerala,
            the brand stands as a premium lifestyle developer rooted in real estate,
            hospitality, and sustainable farming. We offer thoughtfully designed
            investments that combine luxury, nature, and long-term value.
          </p>
        </ScrollReveal>
      </section>

      {/* Vision & Mission */}
      <section className="pb-16 md:pb-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="p-6 md:p-10 bg-[#121212] border border-white/5 border-l-2 border-l-gold shadow-2xl"
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
            className="p-6 md:p-10 bg-[#121212] border border-white/5 border-l-2 border-l-gold shadow-2xl"
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

      {/* Properties Showcase */}
      <section id="properties" className="py-16 md:py-32 px-6 bg-charcoal">
        <ScrollReveal className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-gold mb-4">Our Properties</h2>
            <div className="w-24 h-px bg-gold/50 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {properties.map((prop, idx) => (
              <ScrollReveal key={prop.title} delay={idx * 0.15}>
                <NavLink to={prop.path}>
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={`group relative h-[400px] md:h-[500px] overflow-hidden rounded-sm shadow-2xl flex items-end ${prop.bg}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-charcoal/95 transition-colors duration-500" />
                    <div className="relative z-10 p-6 md:p-10 w-full">
                      <h3 className="text-3xl font-display text-gold-light mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{prop.title}</h3>
                      <p className="text-cream/90 uppercase tracking-widest text-sm mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{prop.tagline}</p>
                      <div className="flex items-center text-gold font-display text-xl gap-2 opacity-80 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                        Explore <span className="group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
                      </div>
                    </div>
                  </motion.div>
                </NavLink>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Our Ecosystem */}
      <section className="py-24 px-6 bg-[#0c120f]">
        <ScrollReveal className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-gold mb-4">Our Ecosystem</h2>
            <div className="w-24 h-px bg-gold/50 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#121212] border border-white/5 hover:border-gold/30 transition-colors duration-300">
              <Leaf size={40} className="text-gold mb-6" />
              <h3 className="text-2xl font-display text-cream mb-4">Navakam Resorts & Wellness Centre</h3>
              <p className="text-muted leading-relaxed font-light">Eco-resort model with luxury villas, spice gardens, and agri-tourism</p>
            </div>
            <div className="p-8 bg-[#121212] border border-white/5 hover:border-gold/30 transition-colors duration-300">
              <Briefcase size={40} className="text-gold mb-6" />
              <h3 className="text-2xl font-display text-cream mb-4">Navakam Enterprises</h3>
              <p className="text-muted leading-relaxed font-light">Commercial conglomerate spanning trading, travel, food, and financial services</p>
            </div>
            <div className="p-8 bg-[#121212] border border-white/5 hover:border-gold/30 transition-colors duration-300">
              <Network size={40} className="text-gold mb-6" />
              <h3 className="text-2xl font-display text-cream mb-4">Key Partner Network</h3>
              <p className="text-muted leading-relaxed font-light">Prakriti Builders, Essential Trading Solutions, Woven Tours, Paripurna Creations, BMCI Nidhi Ltd, ORGANO Foods</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Locations */}
      <section className="py-16 px-6 bg-charcoal border-b border-white/5">
        <ScrollReveal className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl font-display text-gold mb-10 text-center">Our Locations</h2>
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] rounded-full border border-white/10 text-cream">
              <MapPin size={18} className="text-gold" />
              <span className="text-sm tracking-widest uppercase font-light">Ilaveezha Poonchira, Kerala</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] rounded-full border border-white/10 text-cream">
              <MapPin size={18} className="text-gold" />
              <span className="text-sm tracking-widest uppercase font-light">Vagamon, Kerala</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] rounded-full border border-white/10 text-cream">
              <MapPin size={18} className="text-gold" />
              <span className="text-sm tracking-widest uppercase font-light">Wayanad, Kerala</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] rounded-full border border-white/10 text-cream">
              <MapPin size={18} className="text-gold" />
              <span className="text-sm tracking-widest uppercase font-light">Kodaikanal, Tamil Nadu</span>
            </div>
          </div>
          <p className="text-xs text-muted/60 tracking-wider">Primary administrative operations based in Thrissur, Poothole. Serving clients globally.</p>
        </ScrollReveal>
      </section>

      {/* Investment Schemes */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <ScrollReveal className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-gold mb-6">Investment Schemes</h2>
            <div className="w-24 h-px bg-gold/50 mx-auto mb-6" />
            <p className="text-muted text-lg max-w-2xl mx-auto font-light">
              Participate in India's most distinctive agri-luxury investment model. Choose a scheme that matches your vision.
            </p>
          </div>
          <InvestmentSchemes />
        </ScrollReveal>
      </section>

      {/* End of content */}
    </PageTransition>
  );
};

export default Home;
