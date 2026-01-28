import React from 'react';
import { motion } from 'framer-motion';

const AboutUs: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto z-10 grid md:grid-cols-2 gap-16 items-center">
       <motion.div
         initial={{ opacity: 0, scale: 0.95 }}
         whileInView={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.8 }}
         className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-black/50"
       >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gray/20 to-brand-black flex flex-col items-center justify-center p-8 text-center">
            <div className="w-24 h-24 rounded-full border border-brand-green/30 flex items-center justify-center mb-6 relative">
               <div className="w-16 h-16 rounded-full bg-brand-green/20 blur-md animate-pulse"></div>
               <div className="absolute inset-0 border-t-2 border-brand-green/50 rounded-full animate-spin duration-[3s]"></div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Established 2021</h3>
            <p className="text-brand-cyan uppercase tracking-widest text-xs">Stockholm • San Francisco • Tokyo</p>
          </div>
       </motion.div>

       <motion.div
         initial={{ opacity: 0, x: 20 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.8, delay: 0.2 }}
       >
         <div className="flex items-center gap-3 mb-4">
             <div className="w-8 h-1 bg-brand-green"></div>
             <span className="text-brand-green uppercase tracking-wider text-sm font-bold">About StaroCell</span>
         </div>
         <h2 className="text-4xl font-bold text-white mb-6 leading-tight">Redefining the Molecular Structure of Energy Storage</h2>
         <p className="text-gray-400 mb-6 text-lg leading-relaxed">
           StaroCell began with a simple yet radical question: <span className="text-white italic">Why does clean energy rely on dirty chemistry?</span>
         </p>
         <p className="text-gray-400 mb-8 leading-relaxed">
           Our team of 40+ material scientists and chemical engineers spent 4 years developing a carbon-neutral alternative to lithium-ion. 
           We are not just a battery company; we are an infrastructure company building the backbone of a post-oil world.
         </p>
         
         <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <h4 className="text-white font-bold text-2xl">50+</h4>
              <p className="text-xs text-gray-500 uppercase mt-1">Patents Filed</p>
            </div>
            <div>
              <h4 className="text-white font-bold text-2xl">$120M</h4>
              <p className="text-xs text-gray-500 uppercase mt-1">R&D Investment</p>
            </div>
             <div>
              <h4 className="text-white font-bold text-2xl">0%</h4>
              <p className="text-xs text-gray-500 uppercase mt-1">Cobalt Used</p>
            </div>
         </div>
       </motion.div>
    </div>
  );
};

export default AboutUs;