import React from 'react';
import { motion } from 'motion/react';

export const SparkleStar: React.FC<{ className?: string; delay?: number; size?: number }> = ({ 
  className = '', 
  delay = 0, 
  size = 24 
}) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: [0.8, 1.2, 0.8],
        opacity: [0.4, 1, 0.4],
        rotate: [0, 15, -15, 0]
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
    >
      <path
        d="M12 2L14.8 8.4L21.2 11.2L14.8 14L12 20.4L9.2 14L2.8 11.2L9.2 8.4L12 2Z"
        fill="#FFB703"
      />
    </motion.svg>
  );
};

export const FloatingCloud: React.FC<{ className?: string; duration?: number; yRange?: number }> = ({
  className = '',
  duration = 8,
  yRange = 15
}) => {
  return (
    <motion.div
      className={`absolute pointer-events-none opacity-20 ${className}`}
      animate={{
        y: [0, yRange, 0],
        x: [0, 8, 0]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg width="120" height="80" viewBox="0 0 120 80" fill="currentColor">
        <path d="M100 50C100 41.7 93.3 35 85 35C83.8 35 82.6 35.1 81.5 35.4C77.4 26.5 68.4 20 57.8 20C43.5 20 31.7 30.6 29.8 44.4C26.5 44.8 24 47.6 24 51C24 54.9 27.1 58 31 58H100C103.9 58 107 54.9 107 51C107 47.6 104.5 44.8 101.2 44.4C101.2 44.4 100 44.4 100 50Z" />
      </svg>
    </motion.div>
  );
};

export const FloatingItem: React.FC<{ 
  children: React.ReactNode; 
  className?: string; 
  duration?: number;
  delay?: number;
}> = ({
  children,
  className = '',
  duration = 6,
  delay = 0
}) => {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{
        y: [0, -12, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
    >
      {children}
    </motion.div>
  );
};

export const RainbowDecor: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`pointer-events-none ${className}`}>
      <svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-15">
        <path d="M10 100C10 50.2944 50.2944 10 100 10C149.706 10 190 50.2944 190 100" stroke="#FF6B6B" strokeWidth="12" strokeLinecap="round" />
        <path d="M28 100C28 60.2386 60.2386 28 100 28C139.761 28 172 60.2386 172 100" stroke="#FFB703" strokeWidth="12" strokeLinecap="round" />
        <path d="M46 100C46 70.1828 70.1828 46 100 46C129.817 46 154 70.1828 154 100" stroke="#00C896" strokeWidth="12" strokeLinecap="round" />
        <path d="M64 100C64 80.1177 80.1177 64 100 64C119.882 64 136 80.1177 136 100" stroke="#4F46E5" strokeWidth="12" strokeLinecap="round" />
      </svg>
    </div>
  );
};
