import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function Globe({ color = "#2563eb" }) {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.1;
      meshRef.current.rotation.z = Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2}>
        <MeshDistortMaterial
          color={color}
          distort={0.2}
          speed={2}
          roughness={0}
          metalness={1}
          wireframe
        />
      </Sphere>
      <Sphere args={[0.9, 64, 64]} scale={2}>
        <meshPhysicalMaterial
          color={color}
          transparent
          opacity={0.1}
          roughness={0}
          metalness={0.5}
          transmission={1}
          thickness={0.5}
        />
      </Sphere>
    </Float>
  );
}

export default function Globe3D({ color, height }) {
  const isMobile = window.innerWidth < 768;
  const finalHeight = height || (isMobile ? '250px' : '300px');
  
  return (
    <div style={{ width: '100%', height: finalHeight }}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Globe color={color} />
      </Canvas>
    </div>
  );
}
