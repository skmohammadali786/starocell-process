import React from 'react';

const Manufacturing: React.FC = () => {
  return (
    <div className="text-center max-w-4xl">
      <h2 className="text-4xl font-bold mb-6 text-white">
        Sustainable Manufacturing
      </h2>
      <p className="text-xl text-gray-300 mb-8">
        Our production process uses renewable energy and creates zero toxic waste.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 p-6 rounded-lg border border-white/10">
          <h3 className="text-2xl font-bold text-brand-green mb-2">100%</h3>
          <p className="text-gray-300">Renewable Energy</p>
        </div>
        <div className="bg-white/5 p-6 rounded-lg border border-white/10">
          <h3 className="text-2xl font-bold text-brand-green mb-2">0</h3>
          <p className="text-gray-300">Toxic Waste</p>
        </div>
        <div className="bg-white/5 p-6 rounded-lg border border-white/10">
          <h3 className="text-2xl font-bold text-brand-green mb-2">-50%</h3>
          <p className="text-gray-300">CO₂ Emissions</p>
        </div>
      </div>
    </div>
  );
};

export default Manufacturing;
