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
            className="flex items-center justify-center w-16 h-16 rounded-full bg-zinc-950 fixed inset-x-0 mx-auto bottom-14 md:bottom-28 md:inset-x-auto  md:right-28 cursor-pointer z-50"
            initial={{ opacity: 0, y: 80, }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.3, ease: "linear" }}
        >
            <Image src={"/arrow-up.svg"} alt="arrow-up" width={22} height={12}/>
        </motion.div>}

        </AnimatePresence>
    );
}
