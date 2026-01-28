import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  "EcoDrive Motors", "Nordic Grid Solutions", "Future Aviation", "GreenTech Labs", "Pacific Energy", "Solaris Systems", "Hyperion Transport", "Terra Storage"
];

const Partners: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto text-center z-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-brand-gray uppercase tracking-widest text-sm mb-12 font-semibold">
            Trusted by Industry Leaders
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 opacity-80">
            {partners.map((partner, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="text-2xl md:text-3xl font-bold text-white/20 hover:text-white transition-colors cursor-default select-none"
            >
                {partner}
            </motion.div>
            ))}
        </div>
        
        <div className="mt-24 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </motion.div>
    </div>
  );
};

export default Partners;