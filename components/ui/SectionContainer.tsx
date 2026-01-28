import React, { useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useStore } from '../../store';
import { Section } from '../../types';

interface Props {
  id: Section;
  children: React.ReactNode;
  className?: string;
}

const SectionContainer: React.FC<Props> = ({ id, children, className = "" }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.3 }); 
  const setActiveSection = useStore(state => state.setActiveSection);

  useEffect(() => {
    if (isInView) {
      setActiveSection(id);
    }
  }, [isInView, id, setActiveSection]);

  const isHero = id === Section.HERO;

  return (
    <section 
      ref={ref} 
      id={id} 
      className={`w-full relative flex items-center justify-center p-6 ${isHero ? 'min-h-screen' : 'min-h-[60vh] py-24'} ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
