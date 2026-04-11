import { Map, Plane, Compass, Mountain, HeartHandshake, Sparkles } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

const services = [
  { icon: Map, title: 'Customised Tour Packages', desc: 'Tailor-made itineraries crafted specifically for your preferences.' },
  { icon: HeartHandshake, title: 'Honeymoon Specials', desc: 'Romantic getaways filled with luxury and seclusion.' },
  { icon: Plane, title: 'Group & Corporate Tours', desc: 'Seamlessly organised trips for large teams and families.' },
  { icon: Mountain, title: 'Adventure Trails', desc: 'Thrilling excursions for the wild at heart.' },
  { icon: Sparkles, title: 'Wellness Retreats', desc: 'Rejuvenating journeys focusing on mind and body wellness.' },
  { icon: Compass, title: 'Heritage & Cultural Circuits', desc: 'Immersive experiences into local history and culture.' }
];

const WovenTours = () => {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#5f421f,#8f6b3a,#c9a84c)]" />
        <div className="absolute inset-0 bg-black/60 bg-[radial-gradient(ellipse_at_bottom,_transparent_0%,_#000_100%)]" />
        <div className="relative z-10 text-center px-6 mt-16">
          <div className="flex justify-center mb-6">
            <div className="relative group">
              {/* Soft glow effect behind the logo */}
              <div className="absolute inset-0 bg-gold/20 blur-2xl rounded-full scale-110 group-hover:scale-125 transition-transform duration-500" />
              <img 
                src="/assets/woven_logo_clean.png" 
                alt="Woven Tours Logo" 
                className="relative w-48 sm:w-64 md:w-80 h-auto object-contain drop-shadow-2xl z-10"
              />
            </div>
            <h1 className="sr-only">Woven Tours & Travels (P) Ltd</h1>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-cream tracking-widest uppercase font-light">
            Crafting bespoke journeys across India and beyond
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-24 px-6 bg-[#0a0a0a]">
        <ScrollReveal className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 h-[500px] w-full rounded-sm overflow-hidden bg-[url('https://picsum.photos/seed/wovenabout/800/600')] bg-cover bg-center relative shadow-2xl">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          </div>
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-display text-gold mb-8">About Our Agency</h2>
            <p className="text-muted text-lg leading-relaxed">
              Woven Tours & Travels (P) Ltd is Navakam's dedicated travel and curated experience arm — and also a key entity within the larger Navakam Enterprises group, alongside Essential Trading Solutions, Paripurna Creations, BMCI Nidhi Ltd, and ORGANO Foods.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              We design personalised itineraries, group tours, honeymoon packages, and corporate retreats that weave together culture, comfort, and exploration across India's most extraordinary destinations.
            </p>
            <div className="pt-6 border-t border-white/10 mt-6">
              <h3 className="text-sm font-display text-gold uppercase tracking-widest mb-4">Part of the Navakam Group</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#1a1a1a] border border-white/5 rounded-sm text-xs text-cream/80 tracking-wider">Essential Trading Solutions (ETS)</span>
                <span className="px-4 py-2 bg-[#1a1a1a] border border-white/5 rounded-sm text-xs text-cream/80 tracking-wider">Paripurna Creations</span>
                <span className="px-4 py-2 bg-[#1a1a1a] border border-white/5 rounded-sm text-xs text-cream/80 tracking-wider">BMCI Nidhi Ltd</span>
                <span className="px-4 py-2 bg-[#1a1a1a] border border-white/5 rounded-sm text-xs text-cream/80 tracking-wider">ORGANO Foods</span>
                <span className="px-4 py-2 bg-[#1a1a1a] border border-white/5 rounded-sm text-xs text-cream/80 tracking-wider">Prakriti Builders (P) Ltd</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display text-gold mb-4">Our Services</h2>
              <div className="w-24 h-px bg-gold/50 mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => (
              <ScrollReveal key={svc.title} delay={idx * 0.1}>
                <div className="group p-8 border border-white/5 bg-[#121212] hover:bg-[#1a1a1a] transition-all duration-300 shadow-lg hover:shadow-gold/5">
                  <svc.icon size={40} className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-display text-cream mb-3">{svc.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{svc.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <ScrollReveal delay={0.1}>
            <div className="text-6xl font-display text-gold mb-4">500+</div>
            <div className="text-cream uppercase tracking-widest text-sm">Tours Conducted</div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="text-6xl font-display text-gold mb-4">12</div>
            <div className="text-cream uppercase tracking-widest text-sm">States Covered</div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="text-6xl font-display text-gold mb-4">98%</div>
            <div className="text-cream uppercase tracking-widest text-sm">Happy Travellers</div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-32 px-6 relative overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-gold opacity-[0.03] pattern-diagonal-lines" />
        <ScrollReveal className="relative z-10 space-y-8">
          <h2 className="text-4xl md:text-6xl font-display text-cream italic">Your next adventure is one call away</h2>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mt-8 w-full">
            <a href="tel:+919746566077" className="w-full text-center sm:w-auto px-8 py-4 bg-gold text-charcoal font-display text-lg uppercase tracking-widest hover:bg-gold-light transition-colors active:scale-95">
              Call 9746566077
            </a>
          </div>
        </ScrollReveal>
      </section>
    </PageTransition>
  );
};

export default WovenTours;
