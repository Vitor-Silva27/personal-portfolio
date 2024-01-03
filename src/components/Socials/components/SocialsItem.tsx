import Image from "next/image";

interface SocialsItemProps {
  name: string;
  link: string;
  icon: string;
}
export const SocialsItem = ({icon, link, name}: SocialsItemProps) => {
  return (
    <li><a href={link} target="_blank" rel="noreferrer"><Image className="transition-all hover:-translate-y-1 hover:brightness-0 hover:invert object-contain" src={icon} alt={name} width={32} height={32} /></a></li>
  )
}
