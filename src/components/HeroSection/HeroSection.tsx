import Image from "next/image"
import { Cta } from "../Cta/Cta"

export const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center w-full sm:items-center px-8 py-20 md:py-32">

    <h1 className="sm:w-3/4 sm:text-center text-zinc-500 md:text-xl lg:text-2xl">Hello, welcome to my portfolio, i am Vitor,
      <span className="block font-display tracking-widest text-zinc-950 mt-4 text-5xl md:text-5xl lg:text-7xl 2xl:text-8xl">A Developer with a keen eye for details.</span>
    </h1>
    <p className="my-6 sm:w-1/2 sm:text-center text-zinc-700 lg:text-xl 2xl:text-2xl">I am a <strong>Full stack developer</strong>. Currently working with <strong>javascript</strong>, using mostly <strong>React.js</strong> and <strong>Node.js</strong>.</p>
    <div className="flex flex-col gap-5 mt-10 justify-center items-center">
      <Cta link="/#contact" text="Get in touch" icon="/send-message.svg"/>
      <ul className="flex gap-4 items-center justify-center mt-4">
        <li><a href="https://github.com/Vitor-Silva27" target="_blank" rel="noreferrer"><Image className="transition-all hover:-translate-y-1 object-contain" src="/github.svg" alt="Github" width={28} height={28} /></a></li>
        <li><a href="https://www.linkedin.com/in/joao-vitor-p-silva/" target="_blank" rel="noreferrer"><Image className="transition-all hover:-translate-y-1 object-contain" src="/linkedin.svg" alt="Linkedin" width={28} height={28} /></a></li>
        <li><a href="#" target="_blank" rel="noreferrer"><Image className="transition-all hover:-translate-y-1 hover: fill-zinc-950 object-contain" src="/resume.svg" alt="Resume" width={24} height={28} /></a></li>
      </ul>
    </div>
  </section>
  )
}
