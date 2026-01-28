import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Section } from '../../types';
import { useStore } from '../../store';

const Hero: React.FC = () => {
  const openModal = useStore(state => state.openModal);

  const scrollToSpecs = () => {
    const element = document.getElementById(Section.EXPLODED);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="text-center z-10 max-w-4xl mx-auto flex flex-col items-center justify-center h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-brand-cyan uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
          Introducing StaroCell-V1
        </span>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
          Powering the Future <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-cyan">
            Naturally.
          </span>
        </h1>
        <p className="text-brand-light/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
          The world's first scalable, bio-inspired energy storage solution. 
          Cost-effective, non-toxic, and engineered for the next century.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
                onClick={() => openModal('partner')}
                className="group relative px-8 py-3 bg-brand-green text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105"
            >
                <span className="relative z-10 flex items-center gap-2">
                    Partner with Us <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            <button 
                onClick={scrollToSpecs}
                className="px-8 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
            >
                Technical Specs
            </button>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="text-brand-gray w-8 h-8" />
      </motion.div>
    </div>
  );
};

export default Hero;
