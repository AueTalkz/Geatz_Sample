import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

export default function FloatingBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 300 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="bg-mesh">
      <motion.div 
        className="bg-orb orb-purple"
        style={{ x: useTransform(smoothX, [ -0.5, 0.5], [ -50, 50]), y: useTransform(smoothY, [ -0.5, 0.5], [ -50, 50]) }}
      />
      <motion.div 
        className="bg-orb orb-blue"
        style={{ x: useTransform(smoothX, [ -0.5, 0.5], [ 100, -100]), y: useTransform(smoothY, [ -0.5, 0.5], [ 100, -100]) }}
      />
      <motion.div 
        className="bg-orb orb-pink"
        style={{ x: useTransform(smoothX, [ -0.5, 0.5], [ -80, 80]), y: useTransform(smoothY, [ -0.5, 0.5], [ 80, -80]) }}
      />
      <div className="noise-overlay"></div>
    </div>
  );
}
