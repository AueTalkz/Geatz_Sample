import { useRef } from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { Float, Environment, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { useWindowSize } from '../hooks/useWindowSize';
import logo from '../assets/logo.png';

function OrbitalLogo() {
  const groupRef = useRef();
  const logoRef = useRef();
  const orbitRing1 = useRef();
  const orbitRing2 = useRef();
  const orbitRing3 = useRef();
  const particle1 = useRef();
  const particle2 = useRef();
  const particle3 = useRef();
  const texture = useLoader(THREE.TextureLoader, logo);
  const { mouse } = useThree();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Logo: gentle levitation bob
    if (logoRef.current) {
      logoRef.current.position.y = Math.sin(t * 0.8) * 0.15;
      logoRef.current.rotation.z = Math.sin(t * 0.4) * 0.03;
    }

    // Whole group tracks the mouse softly
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y, mouse.x * 0.4, 0.03
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x, -mouse.y * 0.2, 0.03
      );
    }

    // Orbit rings spin at different speeds and axes
    if (orbitRing1.current) {
      orbitRing1.current.rotation.z = t * 0.35;
    }
    if (orbitRing2.current) {
      orbitRing2.current.rotation.z = -t * 0.25;
    }
    if (orbitRing3.current) {
      orbitRing3.current.rotation.z = t * 0.15;
    }

    // Orbiting particles
    if (particle1.current) {
      particle1.current.position.x = Math.cos(t * 0.7) * 2.8;
      particle1.current.position.y = Math.sin(t * 0.7) * 2.8;
      particle1.current.scale.setScalar(0.06 + Math.sin(t * 3) * 0.02);
    }
    if (particle2.current) {
      particle2.current.position.x = Math.cos(-t * 0.5 + 2) * 3.2;
      particle2.current.position.y = Math.sin(-t * 0.5 + 2) * 3.2;
      particle2.current.scale.setScalar(0.05 + Math.sin(t * 4) * 0.02);
    }
    if (particle3.current) {
      particle3.current.position.x = Math.cos(t * 0.3 + 4) * 3.6;
      particle3.current.position.y = Math.sin(t * 0.3 + 4) * 3.6;
      particle3.current.scale.setScalar(0.04 + Math.sin(t * 5) * 0.015);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main Logo — flat, crisp, no distortion */}
      <mesh ref={logoRef} scale={3.8}>
        <planeGeometry args={[1.2, 1.2]} />
        <meshBasicMaterial
          map={texture}
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Soft blue aura behind the logo */}
      <mesh position={[0, 0, -0.15]} scale={4.6}>
        <circleGeometry args={[0.6, 64]} />
        <meshBasicMaterial
          color="#2563eb"
          transparent
          opacity={0.08}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Orbit ring 1 — inner, thin */}
      <group ref={orbitRing1} rotation={[1.2, 0, 0]}>
        <mesh>
          <torusGeometry args={[2.6, 0.012, 16, 128]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.35} />
        </mesh>
      </group>

      {/* Orbit ring 2 — mid, tilted differently */}
      <group ref={orbitRing2} rotation={[0.6, 0.8, 0]}>
        <mesh>
          <torusGeometry args={[3.0, 0.008, 16, 128]} />
          <meshBasicMaterial color="#818cf8" transparent opacity={0.25} />
        </mesh>
      </group>

      {/* Orbit ring 3 — outer, wide tilt */}
      <group ref={orbitRing3} rotation={[1.8, 0.4, 0]}>
        <mesh>
          <torusGeometry args={[3.4, 0.006, 16, 128]} />
          <meshBasicMaterial color="#2563eb" transparent opacity={0.15} />
        </mesh>
      </group>

      {/* Orbiting energy dots */}
      <mesh ref={particle1}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color="#38bdf8" />
      </mesh>
      <mesh ref={particle2}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color="#818cf8" />
      </mesh>
      <mesh ref={particle3}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color="#2563eb" />
      </mesh>

      {/* Ambient particle field */}
      <Sparkles count={40} scale={8} size={1.5} speed={0.3} color="#38bdf8" />
    </group>
  );
}

export default function Hero3D() {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  return (
    <div style={{ width: '100%', height: isMobile ? '350px' : isTablet ? '400px' : '550px' }}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 38 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#38bdf8" />
        <pointLight position={[-5, -3, 5]} intensity={0.4} color="#818cf8" />
        <Environment preset="night" />
        <OrbitalLogo />
      </Canvas>
    </div>
  );
}
