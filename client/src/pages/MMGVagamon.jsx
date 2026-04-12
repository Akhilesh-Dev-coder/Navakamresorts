import { motion } from "framer-motion";
import {
  Leaf,
  Mountain,
  Home,
  Coffee,
  Wifi,
  Gamepad2,
  Flame,
  Map as MapIcon,
  PersonStanding,
  Sparkles,
  ShieldCheck,
  Key,
  TrendingUp,
  Trees,
  Sun,
} from "lucide-react";
import PageTransition from "../components/PageTransition";
import ScrollReveal from "../components/ScrollReveal";
import InvestmentSchemes from "../components/InvestmentSchemes";
import MobileStickyCTA from "../components/MobileStickyCTA";

const amenities = [
  { icon: Wifi, label: "Wi-Fi" },
  { icon: Gamepad2, label: "Indoor Games" },
  { icon: Flame, label: "Bonfire Area" },
  { icon: MapIcon, label: "Trekking Trails" },
  { icon: PersonStanding, label: "Yoga Deck" },
  { icon: Sparkles, label: "Ayurvedic Spa" },
];

const highlights = [
  {
    icon: MapIcon,
    title: "35 Acres Premium Gated Development",
    desc: "Sprawling estate designed for exclusive community living",
  },
  {
    icon: Home,
    title: "Luxury Villas (~1,600 sq. ft.)",
    desc: "Handcrafted 2BHK with sweeping valley views",
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
  {
    icon: Sun,
    title: "Solar-Powered Pathways & Jogging Tracks",
    desc: "Public pathways and jogging tracks are covered by solar-powered garden lights, creating a welcoming and relaxing atmosphere that encourages residents to enjoy the outdoors during early morning and evening hours.",
  },
];

const galleryImages = [
  "https://picsum.photos/seed/gallery1/600/600",
  "https://picsum.photos/seed/gallery2/600/600",
  "https://picsum.photos/seed/gallery3/600/600",
  "https://picsum.photos/seed/gallery4/600/600",
  "https://picsum.photos/seed/gallery5/600/600",
  "https://picsum.photos/seed/gallery6/600/600",
];

const MMGVagamon = () => {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#2d5a27,#4a7c59,#8fbc8f)]" />
        <div className="absolute inset-0 bg-navy/50 bg-[radial-gradient(ellipse_at_top,_transparent_30%,_#0B1D3A_100%)]" />
        <ScrollReveal className="relative z-10 text-center px-6 mt-16">
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-display text-cream mb-4 tracking-wide text-shadow">
            MMG Vagamon
          </h1>
          <p className="text-lg sm:text-xl md:text-3xl font-display italic text-gold-light mb-8">
            Mango Mountain Garden — Vagamon | Ilaveezha Poonchira
          </p>
          <div className="inline-block border border-gold/40 px-6 py-2 rounded-full backdrop-blur-sm">
            <p className="text-xs tracking-[0.2em] text-cream uppercase">
              Idukki District, Kerala | Altitude: 1,100m
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* About */}
      <section className="py-16 md:py-24 px-6 bg-[#0c120f]">
        <ScrollReveal className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 w-full h-[600px] bg-[url('https://picsum.photos/seed/vagamonabout/800/800')] bg-cover bg-center rounded-t-full shadow-2xl relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9yZWN0Pgo8L3N2Zz4=')] pattern" />
            <Mountain size={100} className="text-gold/20" />
          </div>
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-display text-gold mb-8">
              A Sanctuary in the Mist
            </h2>
            <p className="text-muted text-lg leading-relaxed font-light">
              Spread across 35 acres, Mango Mountain Garden (MMG) is a unique blend
              of natural beauty and green urban planning. Imagine waking up to birdsong,
              surrounded by lush greenery, in your own handcrafted farmhouse with a
              soothing sandalwood breeze.
            </p>
            <p className="text-muted text-lg leading-relaxed font-light">
              Today, this historic plantation is being thoughtfully reimagined
              into a boutique estate community, offering a limited collection of
              private residences within a living.
            </p>
            <p className="text-muted text-lg leading-relaxed font-light">
              This is not a plotted development. It is a curated plantation
              ecosystem, supported by a hospitality backbone designed for
              continuity, stewardship, and refinement.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Highlights */}
      <section className="py-16 md:py-24 px-6 bg-navy">
        <ScrollReveal className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </ScrollReveal>
      </section>

      {/* The Integrated Resort Layer */}
      <section className="py-16 md:py-24 px-6 bg-[#0a0a0a]">
        <ScrollReveal className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display text-gold mb-4">
              What the resort layer provides
            </h2>
            <div className="w-24 h-px bg-gold/50 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 border border-white/5 bg-[#121212] hover:border-gold/30 transition-colors">
              <Trees size={32} className="text-gold mb-6" />
              <h3 className="text-xl font-display text-cream mb-3">
                Professional Estate Stewardship
              </h3>
              <p className="text-muted text-sm leading-relaxed font-light">
                Expert management of your plantation year-round
              </p>
            </div>
            <div className="p-8 border border-white/5 bg-[#121212] hover:border-gold/30 transition-colors">
              <Key size={32} className="text-gold mb-6" />
              <h3 className="text-xl font-display text-cream mb-3">
                Managed Rental Programs
              </h3>
              <p className="text-muted text-sm leading-relaxed font-light">
                Earn passive income when you're away
              </p>
            </div>
            <div className="p-8 border border-white/5 bg-[#121212] hover:border-gold/30 transition-colors">
              <TrendingUp size={32} className="text-gold mb-6" />
              <h3 className="text-xl font-display text-cream mb-3">
                Long-Term Value Preservation
              </h3>
              <p className="text-muted text-sm leading-relaxed font-light">
                Designed for continuity and appreciation
              </p>
            </div>
            <div className="p-8 border border-white/5 bg-[#121212] hover:border-gold/30 transition-colors">
              <ShieldCheck size={32} className="text-gold mb-6" />
              <h3 className="text-xl font-display text-cream mb-3">
                Complete Plantation Lifestyle
              </h3>
              <p className="text-muted text-sm leading-relaxed font-light">
                A full living ecosystem, not just a home
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Why Invest in MMG? */}
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

      {/* Amenities Grid */}
      <section className="py-16 md:py-24 px-6 bg-[#0c120f]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-display text-gold mb-4">
              Resort Amenities
            </h2>
            <div className="w-24 h-px bg-gold/50 mx-auto" />
          </ScrollReveal>

          <ScrollReveal className="flex flex-wrap justify-center gap-12">
            {amenities.map((am) => (
              <div
                key={am.label}
                className="flex flex-col items-center gap-4 group"
              >
                <am.icon
                  size={36}
                  className="text-muted group-hover:text-gold transition-colors duration-300"
                />
                <span className="text-sm tracking-widest uppercase text-cream/70 font-light">
                  {am.label}
                </span>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Location & Nearby Destinations */}
      <section className="py-16 md:py-24 px-6 bg-navy">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-display text-gold mb-4">
              Location & Nearby Destinations
            </h2>
            <div className="w-24 h-px bg-gold/50 mx-auto" />
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="w-full aspect-[16/9] bg-[#0c120f] border border-white/5 rounded-sm flex flex-col items-center justify-center p-6 text-center"
            >
              <span className="text-2xl font-display text-cream mb-2">Site Map — Coming Soon</span>
              <span className="text-sm text-muted font-light">Detailed site map will be available shortly.</span>
            </motion.div>

            {/* Right side - Nearby Attractions */}
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6 }}
               className="space-y-6"
            >
              <h3 className="text-3xl font-display text-gold">Nearby Attractions</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Vagamon Meadows",
                  "Ilaveezha Poonchira Lake",
                  "Parakunnu Church",
                  "Vagamon Pine Forest",
                  "Kurisumala Ashram",
                  "Green Valley (Mundakayam)",
                  "Peermade Spice Gardens",
                  "Pala Town"
                ].map((place, idx) => (
                  <span key={idx} className="px-5 py-2 bg-gold/10 text-gold text-sm uppercase tracking-wider rounded-full border border-gold/20">
                    {place}
                  </span>
                ))}
              </div>
              <p className="text-xs text-muted/60 mt-4 uppercase tracking-widest font-light">
                Distances and directions available on request.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="py-16 md:py-24 px-6 bg-navy">
        <div className="max-w-7xl mx-auto mb-16 px-4">
          <h2 className="text-4xl font-display text-gold mb-4 text-center">
            Gallery
          </h2>
          <div className="w-24 h-px bg-gold/50 mx-auto mb-12" />

          <ScrollReveal>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {galleryImages.map((src, i) => (
                <div
                  key={i}
                  className="w-full bg-[#141414] rounded-sm relative group overflow-hidden border border-white/5"
                  style={{ height: `${[300, 450, 350, 500, 320, 400][i]}px` }}
                >
                  <img
                    src={src}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt="Gallery item"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-navy/40 z-10 backdrop-blur-sm duration-300">
                    <span className="text-gold font-display italic text-xl">
                      View Details
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Investment Schemes */}
      <section className="py-24 px-6 bg-[#0c120f]">
        <ScrollReveal className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display text-gold mb-4">
              Investment Schemes
            </h2>
            <div className="w-24 h-px bg-gold/50 mx-auto" />
          </div>
          <InvestmentSchemes />
        </ScrollReveal>
      </section>

      {/* Booking CTA */}
      <section className="py-16 md:py-32 px-6 bg-[#0a0a0a] border-t border-white/5 text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-display text-cream mb-8">
            Ready to escape to the hills?
          </h2>
          <a
            href="mailto:info@navakamresorts.com"
            className="inline-block px-10 py-5 bg-gold text-navy font-display text-xl uppercase tracking-widest hover:bg-gold-light transition-colors hover:scale-105 duration-300"
          >
            Enquire Now
          </a>
        </ScrollReveal>
      </section>
      <MobileStickyCTA />
    </PageTransition>
  );
};

export default MMGVagamon;
