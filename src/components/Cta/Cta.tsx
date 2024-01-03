import Image from "next/image";
import Link from "next/link"

interface CtaProps {
    link: string;
    text: string;
    icon: string;
}

export const Cta = ({link, text, icon}: CtaProps) => {
  return (
    <Link href={link} className="flex justify-center items-center gap-12 p-4 bg-zinc-950 w-full min-w-72 h-20">
        <p className="text-xl text-zinc-100">{text}</p>
        <Image src={icon} alt={text + " icon"} height={18} width={18}/>
    </Link>
  )
}
