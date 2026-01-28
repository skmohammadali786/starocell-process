import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Recycle } from 'lucide-react';

const ExplodedView: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto h-full flex flex-col justify-end pb-20 pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-black/60 backdrop-blur-xl border border-white/10 p-8 rounded-2xl max-w-lg ml-auto mr-4 pointer-events-auto shadow-2xl"
      >
        <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-brand-green rounded-full"></div>
            <div>
                <h2 className="text-3xl font-bold text-white leading-none">Anatomy of Innovation</h2>
                <span className="text-xs text-brand-cyan font-mono tracking-widest uppercase">Structural Breakdown</span>
            </div>
        </div>

        <p className="text-sm text-gray-300 mb-6 leading-relaxed">
          StaroCell replaces traditional heavy metals with a bio-derived internal architecture. 
          By utilizing a compressed organic carbon core suspended in a plant-based electrolyte, 
          we achieve high energy density without the volatility of lithium-ion chemistries.
        </p>
        
        <div className="grid grid-cols-1 gap-4 mb-6">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <ShieldCheck className="text-brand-green w-5 h-5 mt-0.5" />
                <div>
                    <h4 className="text-white text-sm font-semibold">Graphene-Polymer Casing</h4>
                    <p className="text-xs text-gray-400 mt-1">Lightweight, impact-resistant, and thermally insulating outer shell designed to withstand 50G shocks.</p>
                </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <Zap className="text-brand-cyan w-5 h-5 mt-0.5" />
                <div>
                    <h4 className="text-white text-sm font-semibold">Bio-Electrolyte Matrix</h4>
                    <p className="text-xs text-gray-400 mt-1">Non-toxic, high-conductivity fluid that operates efficiently from -30°C to 60°C without degradation.</p>
                </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <Recycle className="text-brand-light w-5 h-5 mt-0.5" />
                <div>
                    <h4 className="text-white text-sm font-semibold">Organic Separator</h4>
                    <p className="text-xs text-gray-400 mt-1">Cellulose-based membrane ensuring safe ion transport and 100% end-of-life recyclability.</p>
                </div>
            </div>
        </div>

        {/* Technical Specs Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-white/5 rounded-lg border border-white/5">
            <div>
                <div className="text-[10px] uppercase text-gray-500 mb-1">Energy Density</div>
                <div className="text-white font-mono font-bold">450 Wh/kg</div>
            </div>
            <div>
                <div className="text-[10px] uppercase text-gray-500 mb-1">Cycle Life</div>
                <div className="text-white font-mono font-bold">5000+</div>
            </div>
            <div>
                <div className="text-[10px] uppercase text-gray-500 mb-1">Charging (0-80%)</div>
                <div className="text-white font-mono font-bold">8 Minutes</div>
            </div>
             <div>
                <div className="text-[10px] uppercase text-gray-500 mb-1">Thermal Range</div>
                <div className="text-white font-mono font-bold">-30°C to 60°C</div>
            </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
            <span className="text-[10px] font-bold border border-brand-green/20 text-brand-green bg-brand-green/5 px-2 py-1 rounded">ZERO COBALT</span>
            <span className="text-[10px] font-bold border border-brand-green/20 text-brand-green bg-brand-green/5 px-2 py-1 rounded">ZERO NICKEL</span>
            <span className="text-[10px] font-bold border border-brand-green/20 text-brand-green bg-brand-green/5 px-2 py-1 rounded">NON-FLAMMABLE</span>
        </div>
        
        <div className="mt-4 text-[10px] text-gray-500 uppercase tracking-wider text-right">
            Interactive Model • Hover components to identify
        </div>
      </motion.div>
    </div>
  );
};

export default ExplodedView;