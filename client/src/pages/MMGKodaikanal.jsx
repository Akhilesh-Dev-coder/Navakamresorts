import { Cloud, Droplets, Sun, Snowflake, MapPin, BedDouble } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import MobileStickyCTA from '../components/MobileStickyCTA';

const attractions = [
  'Kodaikanal Lake', 'Bryant Park', "Coaker's Walk", 'Bear Shola Falls', 'Pillar Rocks', 'Green Valley Views'
];

const rooms = [
  { name: 'Deluxe Lake View', bed: 'King Size', capacity: '2 Adults', view: 'Lake / Valley', img: 'https://picsum.photos/seed/kodai1/600/400' },
  { name: 'Premium Forest Suite', bed: 'King Size + Sofa Bed', capacity: '3 Adults', view: 'Pine Forest', img: 'https://picsum.photos/seed/kodai2/600/400' },
  { name: 'Family Cottage', bed: '2 Queen Size', capacity: '4 Adults', view: 'Valley / Garden', img: 'https://picsum.photos/seed/kodai3/600/400' }
];

const seasons = [
  { icon: Sun, title: 'Spring Bloom', desc: 'Pleasant days with blooming Kurinji flowers.' },
  { icon: Droplets, title: 'Monsoon Mystique', desc: 'Misty hills and revived waterfalls.' },
  { icon: Cloud, title: 'Autumn Haze', desc: 'Clear skies and cool, refreshing air.' },
  { icon: Snowflake, title: 'Winter Frost', desc: 'Crisp mornings and warm fireside evenings.' }
];

const MMGKodaikanal = () => {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#2d3a5a,#4a5a8f,#8fa0bc)]" />
        <div className="absolute inset-0 bg-navy/50 bg-[radial-gradient(ellipse_at_top,_transparent_10%,_#0B1D3A_100%)]" />
        <ScrollReveal className="relative z-10 text-center px-6 mt-16 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-display text-cream mb-4 tracking-wide text-shadow">
            MMG Resorts Kodaikanal
          </h1>
          <p className="text-lg sm:text-xl md:text-3xl font-display italic text-gold-light mb-8">
            Serenity Above the Clouds
          </p>
          <div className="inline-block border border-gold/40 px-6 py-2 rounded-full backdrop-blur-sm">
            <p className="text-xs tracking-[0.2em] text-cream uppercase">25 Acre Farm Land Vattakanal Kodaikanal | Hill Station Retreat | 2,133m</p>
          </div>
        </ScrollReveal>
      </section>

      {/* About */}
      <section className="py-16 md:py-24 px-6 bg-[#0a0c16]">
        <ScrollReveal className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-display italic text-cream leading-relaxed mb-10">
            "Perched on the Princess of Hill Stations, MMG Resorts Kodaikanal offers a timeless escape into colonial-era charm and Himalayan-like solitude."
          </p>
          <p className="text-muted text-lg leading-relaxed font-light">
            Whether you're seeking tranquil lakeside walks, misty pine forests, or warm fireside evenings, Kodaikanal delivers it all with Navakam's signature luxury. Breathe in the crisp mountain air and let time slow down.
          </p>
        </ScrollReveal>
      </section>

      {/* Room Types */}
      <section className="py-16 md:py-24 px-6 bg-[#0e121e]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-display text-gold mb-4">Accommodations</h2>
            <div className="w-24 h-px bg-gold/50 mx-auto" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room, idx) => (
              <ScrollReveal key={room.name} delay={idx * 0.1}>
                <div className="bg-[#141824] rounded-sm overflow-hidden border border-white/5 hover:border-gold/30 transition-colors duration-300">
                  <div className="h-64 bg-cover bg-center relative" style={{ backgroundImage: `url(${room.img})` }}>
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#c9a84c_0%,_transparent_50%)]" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-display text-cream mb-6">{room.name}</h3>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-3 text-sm text-muted font-light">
                        <BedDouble size={16} className="text-gold" /> {room.bed}
                      </li>
                      <li className="flex items-center gap-3 text-sm text-muted font-light">
                        <MapPin size={16} className="text-gold" /> {room.view}
                      </li>
                      <li className="flex items-center gap-3 text-sm text-muted font-light">
                        <span className="text-gold font-bold ml-1 text-xs px-1 border border-gold/30 rounded-sm">Max</span> {room.capacity}
                      </li>
                    </ul>
                    <a 
                      href={`https://wa.me/919746566077?text=Hello!%20I%20am%20interested%20in%20booking%20the%20${room.name.replace(/ /g, '%20')}%20at%20MMG%20Kodaikanal.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center w-full py-3 bg-gold/10 hover:bg-gold text-gold hover:text-navy transition-colors uppercase tracking-widest text-sm font-medium"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Highlights */}
      <section className="py-16 md:py-24 px-6 bg-[#0a0c16]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-display text-gold mb-4">Seasons in Kodai</h2>
            <div className="w-24 h-px bg-gold/50 mx-auto" />
          </ScrollReveal>

          <ScrollReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {seasons.map((season) => (
              <div key={season.title} className="text-center group">
                <div className="w-20 h-20 mx-auto rounded-full border border-gold/30 bg-[#121624] flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                  <season.icon size={32} className="text-gold group-hover:text-navy transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-display text-cream mb-2">{season.title}</h3>
                <p className="text-muted text-sm font-light max-w-[200px] mx-auto leading-relaxed">{season.desc}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Attractions Nearby */}
      <section className="py-16 md:py-24 px-6 bg-navy">
        <ScrollReveal className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display text-gold mb-4">Nearby Attractions</h2>
            <div className="w-24 h-px bg-gold/50 mx-auto" />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {attractions.map((attraction, idx) => (
              <span key={idx} className="px-6 py-3 bg-[#121212] border border-white/5 text-muted hover:text-cream hover:border-gold/30 transition-all duration-300 cursor-default rounded-full text-sm font-light uppercase tracking-wider shadow-md hover:shadow-gold/5 hover:-translate-y-1">
                {attraction}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </section>
      <MobileStickyCTA />
    </PageTransition>
  );
};

export default MMGKodaikanal;
