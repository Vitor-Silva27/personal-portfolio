import Link from "next/link"

export const HeaderNav = () => {
  return (
    <nav className="hidden gap-10 list-none font-display text-xl tracking-widest text-zinc-600 md:flex">
        <Link href="#about"><li>About me</li></Link>
        <Link href="#skills"><li>Skills</li></Link>
        <Link href="#projects"><li>Projects</li></Link>
        <Link href="#contact"><li>Contact</li></Link>
    </nav>
  )
}
