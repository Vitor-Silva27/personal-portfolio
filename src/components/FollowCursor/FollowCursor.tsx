"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const FollowCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
    },
  };

  return (
    <motion.div
      className="hidden fixed lg:block top-0 left-0 w-12 h-12 rounded-full bg-yellow-400 -z-10 -translate-x-2/4 -translate-y-2/4"
      variants={variants}
      animate="default"
      transition={{
        x: {
          duration: 0.3,
          ease: 'linear',
          repeat: 0,
          type: 'spring',
          stiffness: 400,
          damping: 20,
        },
        y: {
          duration: 0.3,
          ease: 'linear',
          repeat: 0,
          type: 'spring',
          stiffness: 400,
          damping: 20,
        },
        default: {
          duration: 1,
          repeat: Infinity,
        },
      }}
    ></motion.div>
  );
};