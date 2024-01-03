import { SocialsItem } from "./components/SocialsItem"

export const Socials = () => {
    const s = [
        {
            name: "Github",
            link: "https://github.com/Vitor-Silva27",
            icon: "/github.svg"
        },
        {
            name: "Linkedin",
            link: "https://www.linkedin.com/in/joao-vitor-p-silva/",
            icon: "/linkedin.svg"
        },
        {
            name: "Resume",
            link: "#",
            icon: "/resume.svg"
        }
    ]
  return (
    <ul className="flex gap-4 items-center justify-center mt-4">
        {s.map((s, i) => (
            <SocialsItem key={i} name={s.name} link={s.link} icon={s.icon} />
        ))}
    </ul>
  )
}
