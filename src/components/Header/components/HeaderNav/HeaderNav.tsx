import Link from "next/link"

export const HeaderNav = () => {
  return (
    <nav className="hidden gap-10 list-none font-display text-xl tracking-widest text-zinc-600 md:flex">
        <Link className="transition-all hover:-translate-y-1 hover:text-zinc-950" href="#about"><li>About me</li></Link>
        <Link className="transition-all hover:-translate-y-1 hover:text-zinc-950" href="#skills"><li>Skills</li></Link>
        <Link className="transition-all hover:-translate-y-1 hover:text-zinc-950" href="#projects"><li>Projects</li></Link>
        <Link className="transition-all hover:-translate-y-1 hover:text-zinc-950" href="#contact"><li>Contact</li></Link>
    </nav>
  )
}
