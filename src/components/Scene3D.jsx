import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, PerspectiveCamera, Stars, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { useScroll } from 'framer-motion';
import { useWindowSize } from '../hooks/useWindowSize';

function BackgroundElements() {
  const sphereRef = useRef();
  const particlesRef = useRef();
  const { mouse, viewport } = useThree();
  const { scrollYProgress } = useScroll();
  const { width } = useWindowSize();
  
  // Custom particles
  const particlesCount = 3000;
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    const col = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 60;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 60;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 60;
      
      const r = Math.random();
      if (r > 0.6) {
        // Cyan/Blue
        col[i * 3] = 0.02;
        col[i * 3 + 1] = 0.71;
        col[i * 3 + 2] = 0.83;
      } else if (r > 0.3) {
        // Pink/Purple
        col[i * 3] = 0.86;
        col[i * 3 + 1] = 0.15;
        col[i * 3 + 2] = 0.47;
      } else {
        // White/Soft
        col[i * 3] = 0.8;
        col[i * 3 + 1] = 0.8;
        col[i * 3 + 2] = 1.0;
      }
    }
    return [pos, col];
  }, []);

  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const scroll = scrollYProgress.get();
    
    // Rotate sphere
    if (sphereRef.current) {
      sphereRef.current.rotation.x = time * 0.1 + scroll * 2;
      sphereRef.current.rotation.y = time * 0.15 + scroll * 3;
      
      // Move sphere towards mouse slightly
      const targetX = (mouse.x * viewport.width) / 4;
      const targetY = (mouse.y * viewport.height) / 4 - scroll * (isMobile ? 5 : 10);
      sphereRef.current.position.x = THREE.MathUtils.lerp(sphereRef.current.position.x, (isMobile ? 1 : 4) + targetX, 0.05);
      sphereRef.current.position.y = THREE.MathUtils.lerp(sphereRef.current.position.y, targetY, 0.05);
      
      // Scale based on scroll
      const s = 1 + scroll * 0.5;
      sphereRef.current.scale.set(s, s, s);
    }
    
    // Rotate and sway particles
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.03 + scroll * 0.5;
      particlesRef.current.rotation.x = Math.sin(time * 0.05) * 0.05 + scroll * 0.2;
      
      // Follow mouse
      particlesRef.current.position.x = THREE.MathUtils.lerp(particlesRef.current.position.x, mouse.x * 2, 0.05);
      particlesRef.current.position.y = THREE.MathUtils.lerp(particlesRef.current.position.y, mouse.y * 2 - scroll * 5, 0.05);
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[20, 20, 20]} intensity={1.5} color="#2563eb" />
      <pointLight position={[-20, -20, -20]} intensity={1} color="#db2777" />
      <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={2} color="#06b6d4" />

      <Stars radius={100} depth={50} count={isMobile ? 3000 : 7000} factor={6} saturation={0.5} fade speed={1.5} />
      
      <Environment preset="city" />

      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={isMobile ? 0.12 : 0.08}
          vertexColors
          transparent
          opacity={0.4}
          sizeAttenuation={true}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere ref={sphereRef} args={[1.5, 100, 100]} position={[isMobile ? 0 : 5, 0, -8]}>
          <MeshDistortMaterial
            color="#2563eb"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.9}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </Sphere>
      </Float>

      {!isMobile && (
        <Float speed={3} rotationIntensity={1} floatIntensity={1}>
          <Sphere args={[0.8, 64, 64]} position={[-6, 3, -12]}>
            <MeshDistortMaterial
              color="#db2777"
              attach="material"
              distort={0.6}
              speed={4}
              roughness={0.1}
              metalness={0.8}
              clearcoat={1}
            />
          </Sphere>
        </Float>
      )}
      
      <ContactShadows 
        position={[0, -10, 0]} 
        opacity={0.4} 
        scale={40} 
        blur={2} 
        far={15} 
        resolution={256} 
        color="#000000" 
      />
    </>
  );
}

export default function Scene3D() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: -1,
      background: '#050505'
    }}>
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={45} />
        <BackgroundElements />
      </Canvas>
    </div>
  );
}
