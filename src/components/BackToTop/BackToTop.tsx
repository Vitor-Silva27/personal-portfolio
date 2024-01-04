"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

export const BackToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
        {showTopBtn && 
        <motion.div 
            onClick={goToTop} 
            className="flex items-center justify-center w-16 h-16 rounded-full bg-zinc-950 fixed bottom-28 right-28 cursor-pointer z-50"
            initial={{ opacity: 0, y: 80, }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{
                y: {
                    duration: 0.5,
                    ease: 'linear',
                    repeat: 0,
                },
                opacity: {
                    duration: 0.2,
                    ease: 'easeInOut',

                }
            }
            }
        >
            <Image src={"/arrow-up.svg"} alt="arrow-up" width={22} height={12}/>
        </motion.div>}

        </AnimatePresence>
    );
}
