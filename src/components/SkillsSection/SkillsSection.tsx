"use client";

import {useScroll, useTransform, motion} from 'framer-motion';

export const SkillsSection = () => {
  const {scrollYProgress} = useScroll();
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 800]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -800]);

  return (
    <section id='skills' className='flex flex-col items-center font-display relative py-32 sm:py-96 overflow-x-hidden'>
      <h2 className="text-9xl md:text-10xl absolute text-slate-200 top-0 -z-20">Skills</h2>
      <motion.ul 
        className="flex gap-4 text-5xl 2xl:text-7xl text-nowrap  relative -right-1/4"
        style={{x: x2}}
      >
        <li>Html</li>
        <li>Css</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>tailwind</li>
        <li>Ui design</li>
        <li>figma</li>
        <li>Html</li>
        <li>Css</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>tailwind</li>
        <li>Ui design</li>
        <li>figma</li>
      </motion.ul>

      <motion.ul className="flex gap-4 text-5xl 2xl:text-7xl mt-12 text-nowrap relative -left-1/4" style={{x: x1}}>
        <li>Node.js</li>
        <li>Express</li>
        <li>nest.js</li>
        <li>sql</li>
        <li>prisma.io</li>
        <li>java</li>
        <li>Rest</li>
        <li>Git</li>
        <li>docker</li>
        <li>jest</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>nest.js</li>
        <li>sql</li>
        <li>prisma.io</li>
        <li>java</li>
        <li>Rest</li>
        <li>Git</li>
        <li>docker</li>
        <li>jest</li>
      </motion.ul>
    </section>
  )
}
