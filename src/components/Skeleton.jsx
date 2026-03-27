import { motion } from 'framer-motion';

export default function Skeleton({ width, height, borderRadius = '12px', style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
      style={{
        width: width || '100%',
        height: height || '200px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: borderRadius,
        ...style
      }}
    />
  );
}
