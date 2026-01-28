import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Settings, Droplets, TrendingUp } from 'lucide-react';

const stats = [
    { 
      icon: Settings, 
      label: "Retrofit Ready", 
      desc: "Compatible with 90% of existing Li-Ion coating lines." 
    },
    { 
      icon: Droplets, 
      label: "Aqueous Process", 
      desc: "Water-based manufacturing eliminates toxic NMP solvents." 
    },
    { 
      icon: Factory, 
      label: "No Dry Rooms", 
      desc: "Stable chemistry removes the need for expensive humidity control." 
    },
    { 
      icon: TrendingUp, 
      label: "40% Lower CapEx", 
      desc: "Significantly reduced facility costs compared to traditional plants." 
    },
];

const Manufacturing: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between z-10 gap-8 md:gap-20 pointer-events-none">
       {/* Left Side: Narrative */}
       <motion.div 
         initial={{ opacity: 0, x: -30 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.8 }}
         className="md:w-1/3 text-left pointer-events-auto"
       >
          <span className="text-brand-green uppercase tracking-wider text-sm font-bold mb-3 block">
              Production Efficiency
          </span>
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              Gigafactory <br/> Compatible.
          </h2>
          <p className="text-brand-light/80 text-lg mb-6 leading-relaxed">
              The bottleneck of the energy transition isn't just chemistry—it's manufacturing speed. 
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
              StaroCell utilizes a proprietary aqueous binder system that allows existing battery plants to switch production lines in weeks, not years. By removing the need for toxic solvent recovery and massive dry rooms, we slash energy consumption per cell produced by over 60%.
          </p>
          
          <div className="flex items-center gap-4 text-xs font-mono text-brand-cyan">
            <span className="border border-brand-cyan/30 px-2 py-1 rounded">ISO 9001 Ready</span>
            <span className="border border-brand-cyan/30 px-2 py-1 rounded">Zero-NMP</span>
          </div>
       </motion.div>

       {/* Right Side: Technical Specs Grid */}
       <div className="md:w-1/3 grid grid-cols-1 gap-4 pointer-events-auto">
          {stats.map((stat, i) => (
              <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-xl hover:bg-white/5 transition-colors group flex items-start gap-4"
              >
                  <div className="min-w-[40px] h-10 bg-brand-gray/20 rounded-lg flex items-center justify-center text-brand-light group-hover:text-brand-green transition-colors">
                      <stat.icon size={20} />
                  </div>
                  <div>
                      <h3 className="text-white font-bold text-sm mb-1">{stat.label}</h3>
                      <p className="text-xs text-gray-400 leading-normal">{stat.desc}</p>
                  </div>
              </motion.div>
          ))}
       </div>
    </div>
  );
};

export default Manufacturing;