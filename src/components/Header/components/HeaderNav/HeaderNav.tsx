import Link from "next/link"
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher"

interface IHeaderNavProps {
  about: string;
  projects: string;
  contact: string;
  lang: string;
}

export const HeaderNav = ({about, contact,projects, lang}: IHeaderNavProps) => {
  return (
    <>
    <nav className="gap-5 sm:gap-10 list-none font-display sm:text-xl tracking-widest text-zinc-600 flex items-center">
        <Link className="transition-all hover:-translate-y-1 hover:text-zinc-950" href="#about"><li>{about}</li></Link>
        <Link className="transition-all hover:-translate-y-1 hover:text-zinc-950" href="#projects"><li>{projects}</li></Link>
        <Link className="transition-all hover:-translate-y-1 hover:text-zinc-950" href="#contact"><li>{contact}</li></Link>
        <LanguageSwitcher currLang={lang}/>
    </nav>
    </>
  )
}
