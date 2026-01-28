import React from 'react';

const Comparison: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <h2 className="text-4xl font-bold mb-6 text-white">
        Performance Comparison
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 p-6 rounded-lg border border-white/10 text-center">
          <h3 className="text-lg font-bold mb-2 text-gray-400">Li-Ion</h3>
          <p className="text-3xl font-bold text-white mb-2">3000mAh</p>
          <p className="text-sm text-gray-400">3 year lifespan</p>
        </div>
        <div className="bg-brand-green/20 p-6 rounded-lg border-2 border-brand-green text-center">
          <h3 className="text-lg font-bold mb-2 text-brand-green">StaroCell</h3>
          <p className="text-3xl font-bold text-white mb-2">5000mAh</p>
          <p className="text-sm text-gray-300">20 year lifespan</p>
        </div>
        <div className="bg-white/5 p-6 rounded-lg border border-white/10 text-center">
          <h3 className="text-lg font-bold mb-2 text-gray-400">Standard</h3>
          <p className="text-3xl font-bold text-white mb-2">2500mAh</p>
          <p className="text-sm text-gray-400">2 year lifespan</p>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
