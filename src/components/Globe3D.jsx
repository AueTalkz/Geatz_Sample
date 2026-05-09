import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { useWindowSize } from '../hooks/useWindowSize';

function Globe({ color = "#2563eb" }) {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.2;
      meshRef.current.rotation.z = Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.2}>
        <MeshDistortMaterial
          color={color}
          distort={0.4}
          speed={3}
          roughness={0.1}
          metalness={0.9}
        />
      </Sphere>
      <Sphere args={[0.95, 64, 64]} scale={1.2}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
        />
      </Sphere>
    </Float>
  );
}

export default function Globe3D({ color, height }) {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const finalHeight = height || (isMobile ? '160px' : '220px');
  
  return (
    <div style={{ width: '100%', height: finalHeight, overflow: 'hidden' }}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 40 }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={1} color={color} />
        <spotLight position={[0, 5, 0]} intensity={2} />
        <Globe color={color} />
        <Environment preset="night" />
        <ContactShadows position={[0, -1.5, 0]} opacity={0.5} scale={10} blur={2.5} far={4} />
      </Canvas>
    </div>
  );
}
