"use client";
import { motion, useIsPresent } from "framer-motion";
import { Cta } from "../Cta/Cta";
import { Socials } from "../Socials/Socials";

interface IHeroSectionProps {
  welcome: string;
  title: string;
  description: string;
  cta: string;
}

export const HeroSection = ({ cta, description, title, welcome }: IHeroSectionProps) => {
  const isPresent = useIsPresent();
  const s = [
    {
      name: "Github",
      link: "https://github.com/Vitor-Silva27",
      icon: "/github.svg",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/joao-vitor-p-silva/",
      icon: "/linkedin.svg",
    },
    {
      name: "Whatsapp",
      link: "https://web.whatsapp.com/send?phone=5586988629841",
      icon: "/whatsapp.svg",
    },
  ];
  return (
    <section className="flex flex-col justify-center w-full sm:items-center px-8 py-10 xsm:py-20 md:py-32">
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleY: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originY: isPresent ? 0 : 1 }}
        className="fixed top-0 right-0 bottom-0 left-0 w-full h-full bg-yellow-400 z-50 overflow-hidden"
      />
      <motion.h1
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.25 }}
        whileInView={{ opacity: 1 }}
        className="sm:w-3/4 sm:text-center text-zinc-500 md:text-xl lg:text-2xl"
      >
        {welcome}
        <span className="block font-display tracking-widest text-zinc-950 mt-4 text-5xl sm:text-7xl 2xl:text-8xl">{title}</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.75 }}
        className="my-6 sm:w-1/2 sm:text-center text-zinc-700 lg:text-xl 2xl:text-2xl"
      >{description}</motion.p>
      <div className="flex flex-col gap-5 mt-10 justify-center items-center">
        <Cta link="#contact" text={cta} />
        <Socials socials={s} />
      </div>
    </section>
  );
};