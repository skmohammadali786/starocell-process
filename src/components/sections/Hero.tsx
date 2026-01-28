import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center h-full">
      <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter text-white">
        STAROCELL
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8">
        Next Generation Bio-Organic Battery Technology
      </p>
      <p className="text-brand-green text-lg mb-12">
        5000mAh | 20 Year Lifespan | 100% Recyclable
      </p>
      <ArrowDown className="w-8 h-8 text-brand-cyan animate-bounce" />
    </div>
  );
};

export default Hero;
