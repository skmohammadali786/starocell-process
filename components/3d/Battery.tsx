import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useStore } from '../../store';
import { Section } from '../../types';
import * as THREE from 'three';
import { Html } from '@react-three/drei';

const BatteryModel: React.FC = () => {
  const activeSection = useStore((state) => state.activeSection);
  const groupRef = useRef<THREE.Group>(null);
  
  // Layers configuration matching StaroCell visual identity
  const layers = useMemo(() => [
    // Internal Components
    { id: 'core', name: 'Energy Core', color: '#ffffff', radius: 0.5, height: 3, baseY: 0, opacity: 1 },
    { id: 'electrolyte', name: 'Bio Electrolyte', color: '#10b981', radius: 0.8, height: 3.1, baseY: 0, opacity: 0.6, transparent: true },
    { id: 'membrane', name: 'Safety Membrane', color: '#06b6d4', radius: 0.9, height: 3.2, baseY: 0, opacity: 0.5, transparent: true },
    
    // Outer Shell
    { 
      id: 'casingBody', 
      name: 'StaroCell Body', 
      color: '#4B4846', 
      radius: 1.0, 
      height: 2.7, 
      baseY: -0.3, 
      opacity: 1, 
      metalness: 0.8, 
      roughness: 0.3,
      hasLabel: true
    },
    { 
      id: 'casingCap', 
      name: 'Positive Terminal', 
      color: '#ECECEC', 
      radius: 1.0, 
      height: 0.6, 
      baseY: 1.35, 
      opacity: 1, 
      metalness: 1.0, 
      roughness: 0.15 
    },
  ], []);

  // Animation Refs
  const expansionFactor = useRef(0);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Determine target state based on active section
    let tRotX = 0;
    let tRotY = state.clock.getElapsedTime() * 0.1; // Idle spin
    let tRotZ = Math.PI / 6; // Slight tilt
    let tPosX = 0;
    let tPosY = 0;
    let tPosZ = 0;
    let tExp = 0;

    switch (activeSection) {
      case Section.HERO:
        tRotZ = Math.PI / 4;
        tRotY = state.clock.getElapsedTime() * 0.2;
        break;
      case Section.EXPLODED:
        tRotZ = Math.PI / 2; // Horizontal
        tRotY = Math.PI / 4; // Angle to see layers
        tExp = 1; // Full expansion
        break;
      case Section.TECH_DEEP_DIVE:
        tPosX = -2; // Move left to make room for tech cards
        tRotZ = 0;
        tRotY = state.clock.getElapsedTime() * 0.5; // Fast spin
        break;
      case Section.COMPARISON:
        tPosX = 2; // Move right
        tRotZ = 0;
        break;
      case Section.MANUFACTURING:
        tPosY = -1;
        tRotX = Math.PI / 2; // Look from top-ish
        break;
      case Section.APPLICATIONS:
        tExp = 0.2; // Slight breath
        tPosZ = -2; // Push back slightly
        break;
      case Section.PARTNERS:
        tRotX = Math.PI / 6;
        tPosY = 1.5; // Move up out of way of logos
        break;
      case Section.ABOUT_US:
        tPosX = 3;
        tRotZ = -Math.PI / 6;
        break;
      case Section.SUSTAINABILITY:
        tPosX = 0;
        tPosY = 0;
        break;
      case Section.FOOTER:
        tPosZ = 3; // Zoom out
        break;
    }

    // Smooth Interpolation
    const speed = 2.5 * delta;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, tRotX, speed);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, tRotY, speed);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, tRotZ, speed);
    
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, tPosX, speed);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, tPosY, speed);
    groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, tPosZ, speed);

    expansionFactor.current = THREE.MathUtils.lerp(expansionFactor.current, tExp, speed);

  });

  return (
    <group ref={groupRef}>
      {layers.map((layer, index) => (
        <LayerMesh 
          key={layer.id} 
          layer={layer} 
          index={index} 
          expansionFactor={expansionFactor}
          isExploded={activeSection === Section.EXPLODED}
        />
      ))}
    </group>
  );
};

const LayerMesh: React.FC<{ 
  layer: any, 
  index: number, 
  expansionFactor: React.MutableRefObject<number>,
  isExploded: boolean
}> = ({ layer, index, expansionFactor, isExploded }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = React.useState(false);

  useFrame(() => {
    if (meshRef.current) {
      const baseY = layer.baseY || 0;
      let explodeOffset = 0;
      if (layer.id === 'casingCap') explodeOffset = 2.0;
      else if (layer.id === 'casingBody') explodeOffset = 0.5;
      else if (layer.id === 'membrane') explodeOffset = -0.5;
      else if (layer.id === 'electrolyte') explodeOffset = -1.5;
      else if (layer.id === 'core') explodeOffset = -2.5;

      const currentOffset = baseY + (explodeOffset * expansionFactor.current);
      
      meshRef.current.position.y = currentOffset;
    }
  });

  return (
    <group>
        <mesh 
          ref={meshRef}
          onPointerOver={() => isExploded && setHovered(true)}
          onPointerOut={() => isExploded && setHovered(false)}
        >
          <cylinderGeometry args={[layer.radius, layer.radius, layer.height, 64]} />
          <meshPhysicalMaterial 
              color={hovered ? '#ffffff' : layer.color}
              transparent={layer.transparent}
              opacity={layer.opacity}
              metalness={layer.metalness || 0.1}
              roughness={layer.roughness || 0.5}
              emissive={layer.id === 'core' ? '#10b981' : '#000000'}
              emissiveIntensity={layer.id === 'core' ? 0.5 : 0}
              transmission={layer.transparent ? 0.2 : 0}
              thickness={0.5}
              clearcoat={layer.id === 'casingBody' ? 1 : 0}
              clearcoatRoughness={0.1}
          />

          {isExploded && hovered && (
              <Html distanceFactor={10}>
              <div className="bg-black/80 backdrop-blur-md border border-brand-green/30 p-2 rounded text-xs w-32 text-white pointer-events-none transform translate-x-4">
                  <strong className="block text-brand-green">{layer.name}</strong>
                  <span className="text-gray-300">Detailed component function description here.</span>
              </div>
              </Html>
          )}
        </mesh>
    </group>
  );
};

export default BatteryModel;
