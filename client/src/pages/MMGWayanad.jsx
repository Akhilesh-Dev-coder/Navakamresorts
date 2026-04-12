import { CheckCircle2, ArrowRight } from "lucide-react";
import PageTransition from "../components/PageTransition";
import ScrollReveal from "../components/ScrollReveal";
import MobileStickyCTA from "../components/MobileStickyCTA";

const packages = [
  {
    title: "Weekend Escape",
    duration: "2 Nights / 3 Days",
    points: [
      "Welcome drink on arrival",
      "Treehouse accommodation",
      "Guided plantation walk",
    ],
  },
  {
    title: "Family Bonding",
    duration: "3 Nights / 4 Days",
    points: [
      "Family Villa stay",
      "All meals included",
      "Private bonfire",
      "Jeep safari",
    ],
  },
  {
    title: "Honeymoon in the Wild",
    duration: "4 Nights / 5 Days",
    points: [
      "Luxury suite with jacuzzi",
      "Candlelight jungle dinner",
      "Couple spa therapy",
    ],
  },
];

const experiences = [
  {
    title: "Stay",
    subtitle: "Treehouse cottages and jungle villas",
    desc: "Sleep in the canopy. Our elevated treehouses and spacious jungle villas blend rustic charm with modern luxury, offering unobstructed views of the primeval forest.",
    img: "https://picsum.photos/seed/wayanadstay/800/600",
  },
  {
    title: "Explore",
    subtitle: "Guided wildlife walks, plantation tours, waterfall hikes",
    desc: "Venture into the wild with our expert naturalists. Discover hidden waterfalls, track exotic bird species, and wander through spice plantations.",
    img: "https://picsum.photos/seed/wayanadexplore/800/600",
  },
  {
    title: "Rejuvenate",
    subtitle: "Forest spa, open-air yoga, organic cuisine",
    desc: "Find inner peace at our forest spa using ancient Ayurvedic therapies. Practice yoga as the sun rises over the peaks, and dine on farm-to-table organic cuisine.",
    img: "https://picsum.photos/seed/wayanadrejuvenate/800/600",
  },
];

const MMGWayanad = () => {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#1a3a1a,#2d5a27,#6b8f3e)]" />
        <div className="absolute inset-0 bg-navy/60 bg-[radial-gradient(ellipse_at_bottom_right,_transparent_0%,_#0B1D3A_100%)]" />
        <ScrollReveal className="relative z-10 text-center px-6 mt-16 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-display text-cream mb-4 tracking-wide text-shadow">
            MMG Wayanad
          </h1>
          <p className="text-lg sm:text-xl md:text-3xl font-display italic text-gold-light mb-8">
            Wild Luxury in the Western Ghats
          </p>
          <div className="inline-block border border-gold/40 px-6 py-2 rounded-full backdrop-blur-sm">
            <p className="text-xs tracking-[0.2em] text-cream uppercase">
              Ambhalavayal, Wayanad | Jungle Retreat
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* About */}
      <section className="py-16 md:py-24 px-6 bg-[#0a0f0a]">
        <ScrollReveal className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-4xl font-display italic text-cream leading-relaxed mb-10">
            "MMG Resorts Wayanad is a sanctuary of refined wilderness living."
          </p>
          <p className="text-muted text-lg leading-relaxed font-light">
            Surrounded by different plantations, spice gardens, and wildlife
            corridors of the Western Ghats, the resort offers an immersive yet
            luxurious stay for nature lovers, families, and solo explorers
            alike.
          </p>
        </ScrollReveal>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-24 px-6 bg-[#0e1610]">
        <div className="max-w-6xl mx-auto space-y-24">
          {experiences.map((exp, idx) => (
            <ScrollReveal
              key={exp.title}
              className={`flex flex-col ${idx % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-16`}
            >
              <div
                className="flex-1 w-full h-[400px] relative overflow-hidden group shadow-2xl bg-cover bg-center"
                style={{ backgroundImage: `url(${exp.img})` }}
              >
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 bg-navy" />
                <div className="absolute bottom-6 left-6 text-white/50 font-display text-8xl italic font-bold">
                  0{idx + 1}
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <h2 className="text-4xl lg:text-5xl font-display text-gold mb-2">
                  {exp.title}
                </h2>
                <h3 className="text-lg text-cream tracking-widest uppercase font-light mb-6">
                  {exp.subtitle}
                </h3>
                <p className="text-muted text-lg leading-relaxed font-light">
                  {exp.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Packages Preview */}
      <section className="py-16 md:py-24 px-6 bg-[#0a0f0a]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-display text-gold mb-4">
              Curated Packages
            </h2>
            <div className="w-24 h-px bg-gold/50 mx-auto" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <ScrollReveal key={pkg.title} delay={idx * 0.1}>
                <div className="bg-[#121c15] p-8 border border-white/5 hover:border-gold/30 transition-colors duration-300 h-full flex flex-col">
                  <h3 className="text-2xl font-display text-cream mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-sm tracking-widest uppercase text-gold-light mb-8">
                    {pkg.duration}
                  </p>

                  <ul className="space-y-4 mb-10 flex-grow">
                    {pkg.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className="text-gold shrink-0 mt-0.5"
                        />
                        <span className="text-muted font-light text-sm">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button className="flex items-center gap-2 text-gold hover:text-gold-light uppercase tracking-widest text-sm transition-colors group w-fit">
                    View Details
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <MobileStickyCTA />
    </PageTransition>
  );
};

export default MMGWayanad;
