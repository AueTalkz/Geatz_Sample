import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { Float, Environment, PerspectiveCamera, Sparkles, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useWindowSize } from '../hooks/useWindowSize';
import logo from '../assets/logo.png';

function HolographicLogo() {
  const meshRef = useRef();
  const ringRef = useRef();
  const texture = useLoader(THREE.TextureLoader, logo);
  const { mouse, viewport } = useThree();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Complex holographic rotation
      meshRef.current.rotation.y = Math.sin(time * 0.5) * 0.3;
      meshRef.current.rotation.x = Math.cos(time * 0.3) * 0.2;
      
      // Magnetic response
      const targetX = (mouse.x * viewport.width) / 8;
      const targetY = (mouse.y * viewport.height) / 8;
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);

      // Glitchy scale pulse
      const glitch = 1 + (Math.random() > 0.98 ? 0.05 : 0);
      const pulse = 1 + Math.sin(time * 2) * 0.02;
      meshRef.current.scale.set(pulse * glitch, pulse * glitch, pulse * glitch);
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = time * 0.5;
      ringRef.current.rotation.x = time * 0.2;
    }
  });

  return (
    <group>
      <Float speed={5} rotationIntensity={0.5} floatIntensity={1}>
        {/* Main Logo Plane with Bloom-like glow */}
        <mesh ref={meshRef} scale={4}>
          <planeGeometry args={[1.2, 1.2]} />
          <meshBasicMaterial 
            map={texture} 
            transparent={true} 
            side={THREE.DoubleSide}
            opacity={1}
          />
        </mesh>

        {/* Holographic Ghosting Effect */}
        <mesh position={[0, 0, -0.05]} scale={4.1}>
          <planeGeometry args={[1.2, 1.2]} />
          <meshBasicMaterial 
            map={texture} 
            transparent={true} 
            opacity={0.2} 
            color="#2563eb"
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* Cybernetic Energy Ring */}
        <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.5, 0.02, 16, 100]} />
          <meshBasicMaterial color="#2563eb" transparent opacity={0.3} />
        </mesh>
      </group>

      <Sparkles count={50} scale={6} size={2} speed={0.4} color="#2563eb" />
    </group>
  );
}

export default function Hero3D() {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  
  return (
    <div style={{ width: '100%', height: isMobile ? '350px' : isTablet ? '400px' : '550px', cursor: 'crosshair' }}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 7], fov: 40 }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Environment preset="night" />
        <HolographicLogo />
      </Canvas>
    </div>
  );
}
