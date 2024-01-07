import { SocialsItem } from "./components/SocialsItem"

interface ISocials {
    name: string
    link: string
    icon: string
}

export const Socials = ({socials}: {socials: ISocials[]}) => {
  return (
    <ul className="flex gap-4 items-center justify-center mt-4">
        {socials.map((s, i) => (
            <SocialsItem key={i} name={s.name} link={s.link} icon={s.icon} />
        ))}
    </ul>
  )
}
