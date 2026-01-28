import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Thermometer, RefreshCw, Cpu, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: "Vascular Electrolyte Flow",
    desc: "Inspired by plant xylem, our electrolyte circulates through micro-channels, maintaining optimal ion distribution and preventing stagnation."
  },
  {
    icon: Thermometer,
    title: "Endothermic Cooling",
    desc: "The chemical reaction within StaroCell naturally absorbs heat, eliminating the need for heavy external cooling systems found in EVs."
  },
  {
    icon: Zap,
    title: "Solid-State Interface",
    desc: "A semi-permeable membrane derived from cellulose allows 99.9% ion efficiency while blocking dendrite formation completely."
  },
  {
    icon: RefreshCw,
    title: "Molecular Self-Healing",
    desc: "The organic polymer casing contains micro-capsules that automatically seal minor punctures, extending durability in rugged environments."
  },
  {
    icon: Cpu,
    title: "AI-Native BMS",
    desc: "Embedded neural processing units predict cell degradation patterns years in advance, optimizing charging cycles in real-time."
  },
  {
    icon: ShieldCheck,
    title: "Impact Resistant",
    desc: "Non-Newtonian fluid dynamics within the core instantly harden upon sudden impact, protecting the structural integrity during accidents."
  }
];

const TechDeepDive: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center z-10 py-10">
      <motion.div
         initial={{ opacity: 0, y: -20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         className="text-center mb-16 max-w-3xl"
      >
        <span className="text-brand-cyan font-mono text-sm tracking-wider uppercase block mb-3">System Architecture</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Bio-Mimetic Engineering</h2>
        <p className="text-brand-light/80 text-lg leading-relaxed">
          We didn't just improve the battery; we reimagined how energy moves. 
          By abandoning the "jelly-roll" design of traditional lithium cells, 
          StaroCell achieves a 40% higher energy density by volume.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {features.map((feat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 hover:border-brand-green/30 hover:bg-white/10 transition-all group"
          >
            <div className="mb-4">
              <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-black transition-colors">
                <feat.icon size={22} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{feat.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechDeepDive;