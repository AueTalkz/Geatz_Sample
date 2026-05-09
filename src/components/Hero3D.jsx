import { useRef } from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { Float, Environment, MeshPhysicalMaterial, Sphere, Decal } from '@react-three/drei';
import * as THREE from 'three';
import { useWindowSize } from '../hooks/useWindowSize';
import logo from '../assets/logo.png';

function LogoBubble() {
  const meshRef = useRef();
  const logoRef = useRef();
  const texture = useLoader(THREE.TextureLoader, logo);
  const { mouse, viewport } = useThree();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.15;
      meshRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;
      
      // Parallax effect
      const targetX = (mouse.x * viewport.width) / 12;
      const targetY = (mouse.y * viewport.height) / 12;
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        {/* The Glass Bubble */}
        <Sphere args={[1.8, 64, 64]}>
          <meshPhysicalMaterial
            roughness={0}
            transmission={1}
            thickness={0.5}
            envMapIntensity={1.5}
            clearcoat={1}
            clearcoatRoughness={0.1}
            color="#ffffff"
          />
        </Sphere>

        {/* The Logo inside/on the bubble */}
        <Sphere args={[1.81, 64, 64]}>
          <meshBasicMaterial transparent opacity={0} />
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={[2.5, 2.5, 2.5]}
            map={texture}
          />
        </Sphere>
        
        {/* Inner glow */}
        <Sphere args={[1.5, 32, 32]}>
          <meshBasicMaterial 
            color="#2563eb" 
            transparent 
            opacity={0.05} 
          />
        </Sphere>
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  
  return (
    <div style={{ width: '100%', height: isMobile ? '350px' : isTablet ? '400px' : '500px', cursor: 'grab' }}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#2563eb" />
        <Environment preset="city" />
        <LogoBubble />
      </Canvas>
    </div>
  );
}
