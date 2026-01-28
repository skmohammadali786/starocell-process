import React from 'react';

const TechDeepDive: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <h2 className="text-4xl font-bold mb-6 text-brand-cyan">
        Revolutionary Technology
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/5 p-6 rounded-lg border border-white/10">
          <h3 className="text-xl font-bold mb-3 text-brand-green">Bio-Organic Core</h3>
          <p className="text-gray-300">Sustainable energy storage using organic compounds</p>
        </div>
        <div className="bg-white/5 p-6 rounded-lg border border-white/10">
          <h3 className="text-xl font-bold mb-3 text-brand-green">Safety Membrane</h3>
          <p className="text-gray-300">Advanced protection against thermal runaway</p>
        </div>
        <div className="bg-white/5 p-6 rounded-lg border border-white/10">
          <h3 className="text-xl font-bold mb-3 text-brand-green">Long Lifespan</h3>
          <p className="text-gray-300">20+ years of reliable performance</p>
        </div>
        <div className="bg-white/5 p-6 rounded-lg border border-white/10">
          <h3 className="text-xl font-bold mb-3 text-brand-green">Recyclable</h3>
          <p className="text-gray-300">100% recyclable materials</p>
        </div>
      </div>
    </div>
  );
};

export default TechDeepDive;
