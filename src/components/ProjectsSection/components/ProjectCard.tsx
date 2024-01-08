"use client";

import { Cta } from "@/components"
import Image from "next/image"
import { motion, stagger } from "framer-motion"

interface IProjectCardProps {
  project: IProject;
  ctaText: string;
  secondaryText: string;
}

export const ProjectCard = ({project, ctaText, secondaryText}: IProjectCardProps) => {


  return (
    <div className={"flex flex-col xl:flex-row gap-20 items-center 3xl:gap-40" + (project.backward ? " xl:flex-row-reverse" : "")}>
      <motion.div initial={{ opacity: 0, y: 100 }} transition={{ duration: 0.5 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}  className="flex items-center justify-center w-full xl:w-1/2" style={{backgroundColor: project.color}}>
        <Image className="object-cover h-96 xl:h-full" src={project.image} alt={project.name} width={688} height={848} />
      </motion.div>
      <div className="font-body w-5/6 xl:w-1/2 3xl:max-w-2xl">
          <motion.h3 initial={{ opacity: 0, y: 100 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.25 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl 2xl:text-5xl tracking-widest font-display">{project.name}</motion.h3>
          <motion.p initial={{ opacity: 0, y: 100 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} whileInView={{ opacity: 1, y: 0 }} className="text-sm text-zinc-600 font-bold">{project.roles.join(" & ")}</motion.p>
          {project.description.map((d, i) => (
            <motion.p initial={{ opacity: 0, y: 100 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.75 + i * 0.25 }} whileInView={{ opacity: 1, y: 0 }} className="text-zinc-700 2xl:text-xl mt-5 sxl:mt-10 leading-normal" key={i}>{d}</motion.p>
          ))}
          <ul className="my-10 flex gap-6 items-center">
            {project.techs.map((t, i) => (
              <li key={i} className="relative" title={t}>
                <Image src={`/${t}-icon.png`} alt={t} width={32} height={32} className="object-contain" />
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-8 mt-16 lg:w-3/4 lg:flex-row">
            {project.liveLink && <Cta text={ctaText} link={project.liveLink} target="_blank"/>}
            {project.githubLink && <Cta text={secondaryText} link={project.githubLink} target="_blank" secondary/>}
            {!project.githubLink && !project.liveLink && <p className="text-zinc-600 text-base sm:text-xl">{project.reason}</p>}
          </div>
      </div>

    </div>
  )
}
