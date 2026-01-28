import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { 
    label: 'Manufacturing Cost', 
    unit: '$/kWh', 
    starocell: 80, 
    liion: 130, 
    max: 150, 
    inverse: true // Lower is better
  },
  { 
    label: 'Energy Density', 
    unit: 'Wh/kg', 
    starocell: 450, 
    liion: 260, 
    max: 500, 
    inverse: false 
  },
  { 
    label: 'Cycle Life', 
    unit: 'Cycles', 
    starocell: 5000, 
    liion: 2000, 
    max: 5500, 
    inverse: false 
  },
  { 
    label: 'Carbon Footprint', 
    unit: 'kg CO2/kWh', 
    starocell: 10, 
    liion: 85, 
    max: 100, 
    inverse: true 
  },
];

const Comparison: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center z-10">
      <motion.div
         initial={{ opacity: 0, x: -30 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-white">Outperforming the Status Quo</h2>
        <p className="text-brand-light/70 mb-8 text-lg leading-relaxed">
            Traditional lithium-ion batteries are expensive, volatile, and environmentally damaging. 
            StaroCell redefines the standard with superior performance at a fraction of the ecological and financial cost.
        </p>
        <ul className="space-y-4 text-brand-light/90">
            <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-green rounded-full shadow-[0_0_10px_#10b981]"></div>
                <span>4x Lower Manufacturing Cost</span>
            </li>
            <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-green rounded-full shadow-[0_0_10px_#10b981]"></div>
                <span>2.5x Longer Lifespan</span>
            </li>
            <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-green rounded-full shadow-[0_0_10px_#10b981]"></div>
                <span>Zero Risk of Thermal Runaway</span>
            </li>
        </ul>
      </motion.div>

      <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
        <div className="flex justify-end gap-6 mb-8 text-sm font-semibold">
           <div className="flex items-center gap-2">
             <div className="w-3 h-3 bg-brand-gray rounded-sm"></div>
             <span className="text-gray-500">Li-Ion</span>
           </div>
           <div className="flex items-center gap-2">
             <div className="w-3 h-3 bg-brand-green rounded-sm shadow-[0_0_8px_#10b981]"></div>
             <span className="text-white">StaroCell V1</span>
           </div>
        </div>

        <div className="space-y-8">
          {metrics.map((metric, i) => (
            <div key={i}>
              <div className="flex justify-between mb-2 text-sm">
                <span className="text-gray-300 font-medium">{metric.label}</span>
                <span className="text-gray-500 text-xs">{metric.unit}</span>
              </div>
              
              {/* Li-Ion Bar */}
              <div className="relative h-2 bg-white/5 rounded-full mb-2 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(metric.liion / metric.max) * 100}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="absolute top-0 left-0 h-full bg-brand-gray rounded-full"
                />
              </div>

              {/* StaroCell Bar */}
              <div className="relative h-4 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(metric.starocell / metric.max) * 100}%` }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-green to-brand-cyan rounded-full"
                />
                <motion.span 
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   transition={{ delay: 1.2 }}
                   className="absolute right-2 top-0 h-full flex items-center text-[10px] font-bold text-black"
                >
                    {metric.starocell}
                </motion.span>
              </div>
              
              {metric.inverse && (
                <div className="text-[10px] text-brand-green mt-1 text-right">
                  Lower is better
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comparison;