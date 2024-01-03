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

  const style = {
    transform: 'translate(-50%, -50%)',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#FFDD00',
    opacity: 1,
    zIndex: -1,
  };

  const variants = {
    default: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
    },
  };

  return (
    <motion.div
      className={`fixed top-0 left-0`}
      style={style}
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