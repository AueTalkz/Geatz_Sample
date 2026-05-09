import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { Float, Environment, Text } from '@react-three/drei';
import * as THREE from 'three';
import { useWindowSize } from '../hooks/useWindowSize';
import logo from '../assets/logo.png';

function FloatingLogo() {
  const meshRef = useRef();
  const texture = useLoader(THREE.TextureLoader, logo);
  const { mouse, viewport } = useThree();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(time * 0.4) * 0.2;
      meshRef.current.rotation.x = Math.cos(time * 0.3) * 0.1;
      
      // Parallax effect
      const targetX = (mouse.x * viewport.width) / 15;
      const targetY = (mouse.y * viewport.height) / 15;
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={3.5}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial 
          map={texture} 
          transparent={true} 
          side={THREE.DoubleSide} 
          alphaTest={0.1}
        />
      </mesh>
      
      {/* Decorative glow behind logo */}
      <mesh position={[0, 0, -0.1]} scale={4}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial 
          color="#2563eb" 
          transparent={true} 
          opacity={0.15} 
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  
  return (
    <div style={{ width: '100%', height: isMobile ? '350px' : isTablet ? '400px' : '450px', cursor: 'grab' }}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Environment preset="night" />
        <FloatingLogo />
      </Canvas>
    </div>
  );
}
