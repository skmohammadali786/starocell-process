import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useStore } from '../../store';
import { Section } from '../../types';

const Footer: React.FC = () => {
  const openModal = useStore(state => state.openModal);

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(Section.ABOUT_US)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full max-w-4xl mx-auto text-center z-10 pb-10">
       <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
       >
           <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
               The Future is StaroCell.
           </h2>
           <p className="text-xl text-brand-gray mb-12 max-w-2xl mx-auto">
               Join the revolution in sustainable energy storage. 
               We are looking for pilot partners in the EV and Grid sectors.
           </p>

           <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
               <button 
                   onClick={() => openModal('partner')}
                   className="flex items-center gap-2 bg-brand-cyan text-black px-8 py-4 rounded-full font-bold hover:bg-brand-cyan/90 transition-all hover:px-10"
               >
                   Contact Sales Team <ArrowRight size={20} />
               </button>
               <button className="flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                   <Download size={20} /> Download Whitepaper
               </button>
           </div>
       </motion.div>

       <div className="mt-32 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
           <p>© 2026 StaroCell Energy Systems. All rights reserved.</p>
           <div className="flex gap-6 mt-4 md:mt-0">
               <a href="#" onClick={(e) => scrollToAbout(e)} className="hover:text-white transition-colors">About Us</a>
               <button onClick={() => openModal('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
               <button onClick={() => openModal('terms')} className="hover:text-white transition-colors">Terms of Service</button>
               <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
           </div>
       </div>
    </div>
  );
};

export default Footer;
