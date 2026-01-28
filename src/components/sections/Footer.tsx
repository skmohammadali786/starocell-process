import React from 'react';
import { useStore } from '../../store';

const Footer: React.FC = () => {
  const openModal = useStore(state => state.openModal);

  return (
    <div className="max-w-6xl w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">STAROCELL</h3>
          <p className="text-gray-400">
            Next generation bio-organic battery technology for a sustainable future.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-3">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#about-us" className="hover:text-brand-green">About Us</a></li>
            <li><button onClick={() => openModal('partner')} className="hover:text-brand-green">Partner with Us</button></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">Legal</h4>
          <ul className="space-y-2 text-gray-400">
            <li><button onClick={() => openModal('privacy')} className="hover:text-brand-green">Privacy Policy</button></li>
            <li><button onClick={() => openModal('terms')} className="hover:text-brand-green">Terms of Service</button></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
        © 2026 StaroCell Energy Systems. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
