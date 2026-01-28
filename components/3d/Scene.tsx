import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import BatteryModel from './Battery';
import ParticleSystem from './Particles';

const Scene: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 bg-brand-black">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "default" }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#06b6d4" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#10b981" />
          
          <BatteryModel />
          <ParticleSystem />
          
          <Environment preset="city" />
          
          <ContactShadows 
            position={[0, -2.5, 0]} 
            opacity={0.4} 
            scale={10} 
            blur={2.5} 
            far={4} 
            resolution={256} 
            color="#06b6d4" 
          />
        </Suspense>
      </Canvas>
      {/* Vignette Overlay for cinematic feel */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#000000_120%)] opacity-60" />
    </div>
  );
};

export default Scene;