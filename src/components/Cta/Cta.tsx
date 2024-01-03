"use client";
import Link from "next/link";
import { motion } from 'framer-motion';
import { useRef, useState } from "react";
interface CtaProps {
    link: string;
    text: string;
    icon: string;
}

export const Cta = ({link, text, icon}: CtaProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const [position, setPosition] = useState({x:0,y:0});
    
    const handleMouse = (e: any) => {
        const { clientX, clientY } = e;
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
            const { height, width, left, top } = rect;
            const middleX = clientX - (left + width / 2);
            const middleY = clientY - (top + height / 2);
            setPosition({ x: middleX, y: middleY });
        }
    };

    const reset = () => {
        setPosition({x:0, y:0})
    }
    const { x, y } = position;
    
  return (
    <Link href={link}>
    <motion.div
      className="flex justify-center items-center gap-12 p-4 bg-zinc-950 w-full min-w-72 h-20 hover:bg-yellow-400 text-zinc-100 hover:text-zinc-950 hover:font-bold"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{x, y}}
      transition={{ type: "spring", stiffness: 300, damping: 50, mass: 0.5 }}>
            <p className="text-xl">{text}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25" fill="none">
            <path d="M20.1452 10.9947L2.50505 0.717769C2.20771 0.547519 1.86664 0.473638 1.52718 0.50594C1.18771 0.538243 0.86591 0.675201 0.604518 0.89862C0.343126 1.12204 0.154517 1.42134 0.0637466 1.75678C-0.0270237 2.09221 -0.0156594 2.44789 0.0963299 2.77658L3.35136 12.4726C3.35095 12.4761 3.35095 12.4797 3.35136 12.4833C3.35078 12.4868 3.35078 12.4905 3.35136 12.494L0.0963299 22.2114C0.00664411 22.47 -0.0209687 22.7467 0.0158091 23.0184C0.0525869 23.2901 0.152682 23.5489 0.307694 23.7729C0.462705 23.997 0.66811 24.1798 0.906667 24.3061C1.14523 24.4323 1.40998 24.4983 1.6787 24.4985C1.97025 24.4978 2.25668 24.4203 2.5103 24.2735L20.141 13.9794C20.4011 13.8307 20.6177 13.6141 20.7687 13.3517C20.9196 13.0894 20.9995 12.7907 21 12.4865C21.0005 12.1822 20.9217 11.8833 20.7717 11.6204C20.6217 11.3575 20.4058 11.14 20.1463 10.9904L20.1452 10.9947ZM1.6787 22.7838V22.7741L4.84343 13.3525H10.9188C11.1416 13.3525 11.3552 13.2621 11.5128 13.1014C11.6703 12.9406 11.7588 12.7225 11.7588 12.4951C11.7588 12.2677 11.6703 12.0496 11.5128 11.8888C11.3552 11.728 11.1416 11.6377 10.9188 11.6377H4.85183L1.685 2.21927L1.6787 2.20641L19.3189 12.4769L1.6787 22.7838Z" fill="currentColor"/>
            </svg>
      </motion.div>
    </Link>
  )
}
