import Link from "next/link"
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher"

export const HeaderNav = () => {
  return (
    <>
    <nav className="gap-5 sm:gap-10 list-none font-display sm:text-xl tracking-widest text-zinc-600 flex items-center">
        <Link className="transition-all hover:-translate-y-1 hover:text-zinc-950" href="#about"><li>About me</li></Link>
        <Link className="transition-all hover:-translate-y-1 hover:text-zinc-950" href="#projects"><li>Projects</li></Link>
        <Link className="transition-all hover:-translate-y-1 hover:text-zinc-950" href="#contact"><li>Contact</li></Link>
        <LanguageSwitcher />
    </nav>
    </>
  )
}
