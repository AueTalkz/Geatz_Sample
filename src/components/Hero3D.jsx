import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Icosahedron, MeshDistortMaterial, PerspectiveCamera, Environment, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingObject() {
  const meshRef = useRef();
  const { mouse, viewport } = useThree();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.2;
      meshRef.current.rotation.y = time * 0.2;
      
      // Parallax effect
      const targetX = (mouse.x * viewport.width) / 10;
      const targetY = (mouse.y * viewport.height) / 10;
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron ref={meshRef} args={[1, 15]} scale={2.2}>
        <MeshDistortMaterial
          color="#2563eb"
          distort={0.4}
          speed={3}
          roughness={0}
          metalness={1}
          emissive="#06b6d4"
          emissiveIntensity={0.2}
        />
      </Icosahedron>
    </Float>
  );
}

export default function Hero3D() {
  const isMobile = window.innerWidth < 768;
  
  return (
    <div style={{ width: '100%', height: isMobile ? '350px' : '450px' }}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#db2777" />
        <Environment preset="night" />
        <FloatingObject />
      </Canvas>
    </div>
  );
}
