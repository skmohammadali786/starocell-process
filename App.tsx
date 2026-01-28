import React, { useState } from 'react';
import Scene from './components/3d/Scene';
import SectionContainer from './components/ui/SectionContainer';
import Hero from './components/sections/Hero';
import ExplodedView from './components/sections/ExplodedView';
import TechDeepDive from './components/sections/TechDeepDive';
import Comparison from './components/sections/Comparison';
import Manufacturing from './components/sections/Manufacturing';
import Applications from './components/sections/Applications';
import AboutUs from './components/sections/AboutUs';
import Footer from './components/sections/Footer';
import Modal from './components/ui/Modal';
import { Section } from './types';
import { Menu, X, CheckCircle2 } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useStore } from './store';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  // Modal State from Store
  const activeModal = useStore(state => state.activeModal);
  const closeModal = useStore(state => state.closeModal);
  const openModal = useStore(state => state.openModal);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const scrollTo = (id: Section) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setFormStatus('submitting');

      const formData = new FormData(e.currentTarget);
      
      try {
          const response = await fetch("https://formspree.io/f/xwvvdrdk", {
              method: "POST",
              body: formData,
              headers: {
                  'Accept': 'application/json'
              }
          });
          
          if (response.ok) {
              setFormStatus('success');
          } else {
              setFormStatus('idle');
          }
      } catch (error) {
          setFormStatus('idle');
      }
  };

  // Reset form when modal closes
  React.useEffect(() => {
      if(!activeModal) setFormStatus('idle');
  }, [activeModal]);

  return (
    <div className="relative w-full text-brand-light font-sans selection:bg-brand-green selection:text-black">
      {/* 3D Background */}
      <Scene />
      
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference">
        <div className="text-2xl font-bold tracking-tighter text-white">
            STAROCELL
        </div>
        <div className="flex items-center gap-6">
            <button onClick={() => openModal('partner')} className="hidden md:block text-sm font-bold text-brand-green hover:underline">
                PARTNER ACCESS
            </button>
            <button 
                onClick={toggleMenu}
                className="p-2 hover:bg-white/10 rounded-full transition-colors z-50"
            >
                {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
            </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-brand-black/95 backdrop-blur-xl flex flex-col items-center justify-center"
            >
                <div className="flex flex-col gap-8 text-2xl font-light text-center">
                    <button onClick={() => scrollTo(Section.HERO)} className="hover:text-brand-green transition-colors">Home</button>
                    <button onClick={() => scrollTo(Section.EXPLODED)} className="hover:text-brand-green transition-colors">Technology</button>
                    <button onClick={() => scrollTo(Section.COMPARISON)} className="hover:text-brand-green transition-colors">Comparison</button>
                    <button onClick={() => scrollTo(Section.APPLICATIONS)} className="hover:text-brand-green transition-colors">Applications</button>
                    <button onClick={() => scrollTo(Section.ABOUT_US)} className="hover:text-brand-green transition-colors">About Us</button>
                    <button onClick={() => scrollTo(Section.FOOTER)} className="hover:text-brand-green transition-colors">Contact</button>
                </div>
            </motion.div>
        )}
      </AnimatePresence>

      {/* Modals */}
      <Modal isOpen={activeModal === 'partner'} onClose={closeModal} title="Partner with StaroCell">
        {formStatus === 'success' ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 className="w-16 h-16 text-brand-green mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Application Received</h3>
                <p className="text-gray-400">Our team will review your details and contact you within 48 hours.</p>
                <button onClick={closeModal} className="mt-8 text-brand-cyan hover:underline">Close</button>
            </div>
        ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-gray-300 mb-4 text-sm">
                    We are currently accepting applications for pilot programs in the Automotive and Utility sectors. 
                    Please provide your organization details.
                </p>
                <input name="name" required type="text" placeholder="Full Name" className="w-full bg-black/50 border border-white/20 p-3 rounded focus:border-brand-green outline-none text-white focus:bg-black/80 transition-all" />
                <input name="email" required type="email" placeholder="Work Email" className="w-full bg-black/50 border border-white/20 p-3 rounded focus:border-brand-green outline-none text-white focus:bg-black/80 transition-all" />
                <input name="company" required type="text" placeholder="Company / Organization" className="w-full bg-black/50 border border-white/20 p-3 rounded focus:border-brand-green outline-none text-white focus:bg-black/80 transition-all" />
                <select name="sector" className="w-full bg-black/50 border border-white/20 p-3 rounded focus:border-brand-green outline-none text-white focus:bg-black/80 transition-all">
                    <option value="" disabled selected>Industry Sector</option>
                    <option value="ev">Automotive / EV</option>
                    <option value="grid">Grid Storage</option>
                    <option value="consumer">Consumer Electronics</option>
                    <option value="investor">Investment</option>
                </select>
                <textarea name="message" placeholder="Project Details" rows={4} className="w-full bg-black/50 border border-white/20 p-3 rounded focus:border-brand-green outline-none text-white focus:bg-black/80 transition-all"></textarea>
                <button type="submit" disabled={formStatus === 'submitting'} className="w-full bg-brand-green text-black font-bold py-3 rounded hover:bg-brand-green/90 transition-colors disabled:opacity-50">
                    {formStatus === 'submitting' ? 'Processing...' : 'Submit Application'}
                </button>
            </form>
        )}
      </Modal>

      <Modal isOpen={activeModal === 'privacy'} onClose={closeModal} title="Privacy Policy">
        <div className="text-gray-300 space-y-4 text-sm leading-relaxed">
            <p><strong>Last Updated: January 2026</strong></p>
            <p>At StaroCell, we take your privacy seriously. This policy outlines how we collect, use, and protect your data.</p>
            <h4 className="text-white font-bold">1. Information Collection</h4>
            <p>We only collect information necessary for business communication, including names, emails, and company details provided voluntarily via our contact forms.</p>
            <h4 className="text-white font-bold">2. Data Usage</h4>
            <p>Your data is used solely to respond to inquiries, process partnership applications, and provide updates about our technology. We do not sell data to third parties.</p>
            <h4 className="text-white font-bold">3. Security</h4>
            <p>We employ enterprise-grade encryption to protect all digital records.</p>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'terms'} onClose={closeModal} title="Terms of Service">
        <div className="text-gray-300 space-y-4 text-sm leading-relaxed">
            <p><strong>1. Acceptance</strong><br/>By accessing this website, you agree to these terms.</p>
            <p><strong>2. Intellectual Property</strong><br/>All content, 3D models, and trademarks (StaroCell) are the exclusive property of StaroCell Energy Systems.</p>
            <p><strong>3. Disclaimer</strong><br/>The performance metrics shown are based on V1 laboratory prototypes. Commercial results may vary based on implementation.</p>
            <p><strong>4. Forward-Looking Statements</strong><br/>This site contains forward-looking statements regarding future product capabilities which are subject to R&D outcomes.</p>
        </div>
      </Modal>

      {/* Scrollable Content Overlay */}
      <div className="relative z-10 w-full">
        <SectionContainer id={Section.HERO}>
            <Hero />
        </SectionContainer>
        
        <SectionContainer id={Section.EXPLODED}>
            <ExplodedView />
        </SectionContainer>
        
        <SectionContainer id={Section.TECH_DEEP_DIVE}>
            <TechDeepDive />
        </SectionContainer>

        <SectionContainer id={Section.COMPARISON}>
            <Comparison />
        </SectionContainer>
        
        <SectionContainer id={Section.MANUFACTURING}>
             <Manufacturing />
        </SectionContainer>
        
        <SectionContainer id={Section.APPLICATIONS}>
            <Applications />
        </SectionContainer>
        
        <SectionContainer id={Section.SUSTAINABILITY}>
             <div className="text-center">
                <h2 className="text-4xl font-bold mb-6 text-brand-green">Net Zero Impact</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    From raw organic materials to full recyclability at end-of-life.
                    We don't just store energy; we protect the source of it.
                </p>
            </div>
        </SectionContainer>
        
        <SectionContainer id={Section.ABOUT_US}>
            <AboutUs />
        </SectionContainer>

        <SectionContainer id={Section.FOOTER}>
            <Footer />
        </SectionContainer>
      </div>
    </div>
  );
}

export default App;
