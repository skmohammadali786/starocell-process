import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Car, Home, Factory } from 'lucide-react';

const apps = [
    { icon: Car, title: "EV Transportation", desc: "High density energy for extended range." },
    { icon: Home, title: "Residential Storage", desc: "Safe, non-toxic backup for homes." },
    { icon: Factory, title: "Grid Stabilization", desc: "Scalable modules for utility providers." },
    { icon: Zap, title: "Consumer Electronics", desc: "Longer life for portable devices." }
];

const Applications: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto w-full z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Universal Application</h2>
        <p className="text-gray-400">Powered by versatility. Designed for everything.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {apps.map((app, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors group"
            >
                <div className="w-12 h-12 bg-brand-green/20 rounded-full flex items-center justify-center mb-6 text-brand-green group-hover:scale-110 transition-transform">
                    <app.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{app.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{app.desc}</p>
            </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Applications;