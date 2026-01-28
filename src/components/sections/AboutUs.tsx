import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-4xl text-center">
      <h2 className="text-4xl font-bold mb-6 text-white">
        About StaroCell
      </h2>
      <p className="text-xl text-gray-300 mb-8">
        Founded in 2024, StaroCell is pioneering the next generation of battery technology.
        Our mission is to create sustainable, high-performance energy storage solutions
        that power a cleaner future.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 p-6 rounded-lg border border-white/10">
          <h3 className="text-3xl font-bold text-brand-green mb-2">50+</h3>
          <p className="text-gray-300">Patents Filed</p>
        </div>
        <div className="bg-white/5 p-6 rounded-lg border border-white/10">
          <h3 className="text-3xl font-bold text-brand-green mb-2">100+</h3>
          <p className="text-gray-300">Team Members</p>
        </div>
        <div className="bg-white/5 p-6 rounded-lg border border-white/10">
          <h3 className="text-3xl font-bold text-brand-green mb-2">$50M</h3>
          <p className="text-gray-300">Funding Raised</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
