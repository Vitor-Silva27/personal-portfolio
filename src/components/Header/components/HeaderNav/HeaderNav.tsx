"use client";

import Link from "next/link"
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher"
import { useCycle, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface IHeaderNavProps {
  about: string;
  projects: string;
  contact: string;
  lang: string;
}

export const HeaderNav = ({about, contact,projects, lang}: IHeaderNavProps) => {
  const [mobileNavOpen, setMobileNavOpen] = useCycle(false, true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleButtonClick = () => {
    if (isSmallScreen) {
      setMobileNavOpen();
    }
  };

  return (
    <div>
        <button className="sm:hidden" onClick={handleButtonClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="20" viewBox="0 0 32 20" fill="none">
          <path d="M32 9.9688C32 10.2626 31.8595 10.5443 31.6095 10.752C31.3594 10.9597 31.0203 11.0764 30.6667 11.0764H1.33333C0.979711 11.0764 0.640573 10.9597 0.390525 10.752C0.140476 10.5443 0 10.2626 0 9.9688C0 9.67503 0.140476 9.3933 0.390525 9.18557C0.640573 8.97785 0.979711 8.86115 1.33333 8.86115H30.6667C31.0203 8.86115 31.3594 8.97785 31.6095 9.18557C31.8595 9.3933 32 9.67503 32 9.9688ZM1.33333 2.21529H30.6667C31.0203 2.21529 31.3594 2.09859 31.6095 1.89087C31.8595 1.68314 32 1.40141 32 1.10764C32 0.813879 31.8595 0.532145 31.6095 0.324422C31.3594 0.116698 31.0203 0 30.6667 0H1.33333C0.979711 0 0.640573 0.116698 0.390525 0.324422C0.140476 0.532145 0 0.813879 0 1.10764C0 1.40141 0.140476 1.68314 0.390525 1.89087C0.640573 2.09859 0.979711 2.21529 1.33333 2.21529ZM30.6667 17.7223H1.33333C0.979711 17.7223 0.640573 17.839 0.390525 18.0467C0.140476 18.2544 0 18.5362 0 18.8299C0 19.1237 0.140476 19.4054 0.390525 19.6132C0.640573 19.8209 0.979711 19.9376 1.33333 19.9376H30.6667C31.0203 19.9376 31.3594 19.8209 31.6095 19.6132C31.8595 19.4054 32 19.1237 32 18.8299C32 18.5362 31.8595 18.2544 31.6095 18.0467C31.3594 17.839 31.0203 17.7223 30.6667 17.7223Z" fill="#020917"/>
        </svg>
        </button>
        <motion.nav 
          className={"sm:flex gap-10 list-none font-display sm:text-xl tracking-widest text-zinc-600 sm:items-center " + (mobileNavOpen ? "flex flex-col fixed top-0 right-0 bottom-0 left-0 bg-slate-100 z-50 p-8 text-3xl h-screen pt-28" : " hidden")}
          >
            <Link onClick={handleButtonClick} className="transition-all hover:-translate-y-1 hover:text-zinc-950" href="#about"><motion.li initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} >{about}</motion.li></Link>
            <Link onClick={handleButtonClick} className="transition-all hover:-translate-y-1 hover:text-zinc-950" href="#projects"><motion.li initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}>{projects}</motion.li></Link>
            <Link onClick={handleButtonClick} className="transition-all hover:-translate-y-1 hover:text-zinc-950" href="#contact"><motion.li  initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5  }}>{contact}</motion.li></Link>
            <LanguageSwitcher currLang={lang} />
            <button className="transition-all hover:-translate-y-1 text-zinc-600  hover:text-zinc-950 flex gap-5 items-center sm:hidden absolute bottom-28" onClick={handleButtonClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M19.7081 18.2931C19.801 18.386 19.8747 18.4963 19.9249 18.6177C19.9752 18.7391 20.0011 18.8692 20.0011 19.0006C20.0011 19.132 19.9752 19.2621 19.9249 19.3835C19.8747 19.5048 19.801 19.6151 19.7081 19.7081C19.6151 19.801 19.5048 19.8747 19.3835 19.9249C19.2621 19.9752 19.132 20.0011 19.0006 20.0011C18.8692 20.0011 18.7391 19.9752 18.6177 19.9249C18.4963 19.8747 18.386 19.801 18.2931 19.7081L10.0006 11.4143L1.70806 19.7081C1.52042 19.8957 1.26592 20.0011 1.00056 20.0011C0.735192 20.0011 0.480697 19.8957 0.293056 19.7081C0.105415 19.5204 5.23096e-09 19.2659 0 19.0006C-5.23096e-09 18.7352 0.105415 18.4807 0.293056 18.2931L8.58681 10.0006L0.293056 1.70806C0.105415 1.52042 0 1.26592 0 1.00056C0 0.735192 0.105415 0.480697 0.293056 0.293056C0.480697 0.105415 0.735192 0 1.00056 0C1.26592 0 1.52042 0.105415 1.70806 0.293056L10.0006 8.58681L18.2931 0.293056C18.4807 0.105415 18.7352 -5.23096e-09 19.0006 0C19.2659 5.23096e-09 19.5204 0.105415 19.7081 0.293056C19.8957 0.480697 20.0011 0.735192 20.0011 1.00056C20.0011 1.26592 19.8957 1.52042 19.7081 1.70806L11.4143 10.0006L19.7081 18.2931Z" fill="currentColor"/>
              </svg>
              <p>Close menu</p>
            </button>
        </motion.nav>
    </div>
  )
}
