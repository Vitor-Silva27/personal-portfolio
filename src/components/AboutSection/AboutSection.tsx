"use client";
import {motion} from "framer-motion";

interface IAboutSectionProps {
  title: string;
  p1: string;
  p2: string;
  s: string;
}

export const AboutSection = ({p1, p2, s, title}: IAboutSectionProps) => {

  return (
    <section className="relative py-32 sm:py-96 flex w-full flex-col items-center justify-center lg:items-start xl:pl-16 overflow-x-hidden" id="about">
            <motion.h2 className='font-display text-9xl md:text-10xl absolute text-slate-200 left-8 -z-20 tracking-widest mb-8 text-nowrap' >{title}</motion.h2>
            <div className='w-4/5 leading-relaxed'>
                <motion.p initial={{ opacity: 0, y: 100 }} transition={{ duration: 0.5 }} whileInView={{ opacity: 1, y: 0 }} className='text-zinc-600 text-xl sm:text-4xl my-8 lg:ml-80'>{p1}</motion.p>
                <motion.p initial={{ opacity: 0, y: 100 }} transition={{ duration: 0.5, delay: 0.25 }} whileInView={{ opacity: 1, y: 0 }} className='text-zinc-600 text-xl sm:text-4xl my-8 lg:ml-80'>{p2}<strong>{s}</strong></motion.p>
            </div>
    </section>
  )
}
