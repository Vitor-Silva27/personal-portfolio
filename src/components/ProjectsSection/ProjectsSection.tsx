import { ProjectCard } from "./components/ProjectCard";

interface IProjectsSectionProps {
    projects: IProject[];
    title: string;
    ctaText: string;
    secondaryText: string;
}

export const ProjectsSection = ({projects, title, ctaText, secondaryText}: IProjectsSectionProps) => {
  return (
    <section id='projects' className='flex flex-col items-center font-display relative py-32 sm:py-96 xl:px-28 overflow-x-hidden'>
      <h2 className="text-9xl md:text-10xl absolute text-slate-200 top-0 -z-20">{title}</h2>
      <ul className="flex flex-col gap-60">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} ctaText={ctaText} secondaryText={secondaryText}/>
        ))}
      </ul>
    </section>
  )
}
