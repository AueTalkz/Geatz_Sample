import { useRef } from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { Float, Environment, MeshPhysicalMaterial, Sphere, Decal } from '@react-three/drei';
import * as THREE from 'three';
import { useWindowSize } from '../hooks/useWindowSize';
import logo from '../assets/logo.png';

function LogoBubble() {
  const meshRef = useRef();
  const texture = useLoader(THREE.TextureLoader, logo);
  const { mouse, viewport } = useThree();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Smooth continuous rotation
      meshRef.current.rotation.y = time * 0.2;
      
      // Magnetic tilt towards mouse
      const tiltX = (mouse.y * Math.PI) / 6; // Up to 30 degrees
      const tiltY = (mouse.x * Math.PI) / 6;
      
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -tiltX, 0.1);
      meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, -tiltY * 0.5, 0.1);

      // Breathing pulse effect
      const pulse = 1 + Math.sin(time * 1.5) * 0.05;
      meshRef.current.scale.set(pulse, pulse, pulse);
      
      // Dynamic parallax
      const targetX = (mouse.x * viewport.width) / 10;
      const targetY = (mouse.y * viewport.height) / 10;
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);
    }
  });

  return (
    <Float speed={4} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        {/* The Glass Bubble */}
        <Sphere args={[1.8, 64, 64]}>
          <meshPhysicalMaterial
            roughness={0}
            transmission={1}
            thickness={1}
            envMapIntensity={2}
            clearcoat={1}
            clearcoatRoughness={0}
            color="#ffffff"
            attenuationColor="#2563eb"
            attenuationDistance={0.5}
          />
        </Sphere>

        {/* The Logo with high-quality mapping */}
        <Sphere args={[1.82, 64, 64]}>
          <meshBasicMaterial transparent opacity={0} />
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={[3, 3, 3]}
            map={texture}
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
