import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [cursorType, setCursorType] = useState('default'); // 'default', 'hover', 'view'

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = (e) => {
      const target = e.target;
      if (target.closest('.showcase-item') || target.closest('.glass-card.view-detail')) {
        setCursorType('view');
      } else if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button')
      ) {
        setCursorType('hover');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="custom-cursor"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        animate={{
          scale: cursorType === 'hover' ? 2.5 : cursorType === 'view' ? 3.5 : 1,
          backgroundColor: cursorType === 'hover' ? 'rgba(6, 182, 212, 0.4)' : cursorType === 'view' ? 'rgba(219, 39, 119, 0.6)' : 'rgba(255, 255, 255, 0.8)',
          border: cursorType === 'hover' ? '2px solid rgba(6, 182, 212, 0.6)' : cursorType === 'view' ? '2px solid rgba(219, 39, 119, 0.8)' : 'none',
        }}
      >
        <AnimatePresence>
          {cursorType === 'view' && (
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              style={{ fontSize: '4px', color: '#fff', fontWeight: 900, letterSpacing: '0.5px' }}
            >
              VIEW
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.div
        className="custom-cursor-dot"
        style={{
          translateX: cursorX,
          translateY: cursorY,
        }}
      />
    </>
  );
}
