import React from 'react';
import { Car, Zap, Smartphone } from 'lucide-react';

const Applications: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <h2 className="text-4xl font-bold mb-6 text-center text-white">
        Wide Range of Applications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 p-6 rounded-lg border border-white/10 text-center">
          <Car className="w-12 h-12 mx-auto mb-4 text-brand-green" />
          <h3 className="text-xl font-bold mb-2">Electric Vehicles</h3>
          <p className="text-gray-300">Extended range and faster charging</p>
        </div>
        <div className="bg-white/5 p-6 rounded-lg border border-white/10 text-center">
          <Zap className="w-12 h-12 mx-auto mb-4 text-brand-cyan" />
          <h3 className="text-xl font-bold mb-2">Grid Storage</h3>
          <p className="text-gray-300">Reliable renewable energy storage</p>
        </div>
        <div className="bg-white/5 p-6 rounded-lg border border-white/10 text-center">
          <Smartphone className="w-12 h-12 mx-auto mb-4 text-brand-green" />
          <h3 className="text-xl font-bold mb-2">Consumer Electronics</h3>
          <p className="text-gray-300">Longer battery life for devices</p>
        </div>
      </div>
    </div>
  );
};

export default Applications;
