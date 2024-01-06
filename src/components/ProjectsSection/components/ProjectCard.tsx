import { Cta } from "@/components"
import Image from "next/image"

interface IProjectCardProps {
  project: IProject;
}

export const ProjectCard = ({project}: IProjectCardProps) => {
  return (
    <div className={"flex flex-col xl:flex-row gap-20 items-center 3xl:gap-40" + (project.backward ? " xl:flex-row-reverse" : "")}>
      <div className="flex items-center justify-center w-full xl:w-1/2" style={{backgroundColor: project.color}}>
        <Image className="object-cover h-96 xl:h-full" src={project.image} alt={project.name} width={688} height={848} />
      </div>
      <div className="font-body w-5/6 xl:w-1/2 3xl:max-w-2xl">
          <h3 className="text-3xl 2xl:text-5xl tracking-widest font-display">{project.name}</h3>
          <p className="text-sm text-zinc-600 font-bold">{project.roles.join(" & ")}</p>
          {project.description.map((d, i) => (
            <p className="text-zinc-700 2xl:text-xl mt-5 sxl:mt-10 leading-normal" key={i}>{d}</p>
          ))}
          <ul className="my-10 flex gap-6 items-center">
            {project.techs.map((t, i) => (
              <li key={i}>
                <Image src={`/${t}-icon.png`} alt={t} width={32} height={32} className="object-contain"/>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-8 mt-16 lg:w-3/4 lg:flex-row">
            {project.liveLink && <Cta text="View Live Project" link={"#"} />}
            {project.githubLink && <Cta text="View Source Code" link={project.githubLink} secondary/>}
            {!project.githubLink && !project.liveLink && <p className="text-zinc-600 text-base sm:text-xl">Links are not available! {project.reason}</p>}
          </div>
      </div>

    </div>
  )
}
