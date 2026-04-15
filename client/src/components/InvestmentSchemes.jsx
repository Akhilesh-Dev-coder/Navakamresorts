import { motion } from 'framer-motion';

const schemes = [
  {
    id: "01",
    name: "Silver Oreo",
    initialInvestment: 20000,
    period: "25 Months",
    emiAmt: 25000,
    totalInvestment: 500000,
    monthlyReturn: 8000,
    returnPercent: 18.20,
    tier: "silver"
  },
  {
    id: "02",
    name: "Golden Era",
    initialInvestment: 30000,
    period: "25 Months",
    emiAmt: 30000,
    totalInvestment: 750000,
    monthlyReturn: 13000,
    returnPercent: 20.80,
    tier: "gold",
    featured: true
  },
  {
    id: "03",
    name: "Platinum Sushi",
    initialInvestment: 40000,
    period: "25 Months",
    emiAmt: 40000,
    totalInvestment: 1000000,
    monthlyReturn: 18000,
    returnPercent: 21.60,
    tier: "platinum"
  },
  {
    id: "04",
    name: "Diamond Core",
    initialInvestment: 50000,
    period: "25 Months",
    emiAmt: 50000,
    totalInvestment: 1250000,
    monthlyReturn: 25000,
    returnPercent: 24.00,
    tier: "diamond"
  }
];

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
};

const getTierStyles = (tier) => {
  switch (tier) {
    case 'silver': return 'bg-gray-300 text-gray-800';
    case 'gold': return 'bg-amber-100 text-amber-800';
    case 'platinum': return 'bg-slate-300 text-slate-800';
    case 'diamond': return 'bg-indigo-100 text-indigo-800';
    default: return 'bg-gray-200 text-gray-800';
  }
};

const InvestmentSchemes = () => {
  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <p className="text-sm text-cream/70 tracking-widest uppercase mb-4">
          All schemes run for 25 months | Returns range from 18.20% to 24.00% p.a. | EMI-based investment model
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 shrink-0">
        {schemes.map((scheme, idx) => (
          <motion.div
            key={scheme.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className={`flex flex-col bg-[#121212] border ${scheme.featured ? 'border-gold shadow-[0_0_15px_rgba(201,168,76,0.3)]' : 'border-white/10'} rounded-sm overflow-hidden relative group`}
          >
            {scheme.featured && (
              <div className="absolute top-4 right-4 bg-gold text-navy text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm z-10">
                Most Popular
              </div>
            )}
            
            <div className="p-8 pb-6 flex-grow flex flex-col justify-between">
              <div>
                <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm mb-6 ${getTierStyles(scheme.tier)}`}>
                  {scheme.tier}
                </span>
                
                <h3 className="text-3xl font-display text-cream mb-6">{scheme.name}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <p className="text-muted/60 mb-1">Initial</p>
                    <p className="font-semibold text-cream">{formatCurrency(scheme.initialInvestment)}</p>
                  </div>
                  <div>
                    <p className="text-muted/60 mb-1">EMI</p>
                    <p className="font-semibold text-cream">{formatCurrency(scheme.emiAmt)}</p>
                  </div>
                  <div>
                    <p className="text-muted/60 mb-1">Total</p>
                    <p className="font-semibold text-cream">{formatCurrency(scheme.totalInvestment)}</p>
                  </div>
                  <div>
                    <p className="text-muted/60 mb-1">Period</p>
                    <p className="font-semibold text-cream">{scheme.period}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-6 border-t border-white/5 mx-2 mb-2 rounded-sm relative overflow-hidden group-hover:bg-[#222] transition-colors">
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <p className="text-gold text-sm tracking-widest uppercase mb-2">Monthly Returns</p>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-display text-gold-light">{formatCurrency(scheme.monthlyReturn)}</span>
                  <span className="text-muted text-sm mb-1">/ Month</span>
                </div>
                <p className="text-gold/70 text-xs mt-1">({scheme.returnPercent.toFixed(2)}% p.a.)</p>
              </div>
            </div>
            
            <a 
              href="https://wa.me/919746566077?text=Hello!%20I%20am%20interested%20in%20your%20Investment%20Schemes%20and%20would%20like%20to%20enquire."
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full py-4 bg-gold text-navy font-display uppercase tracking-widest text-sm hover:bg-gold-light transition-colors mt-auto"
            >
              Enquire Now
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentSchemes;
