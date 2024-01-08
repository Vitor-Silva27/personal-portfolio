"use client";
import Link from "next/link";
import { motion } from 'framer-motion';
interface CtaProps {
    link: string;
    text: string;
    icon?: string;
    secondary?: boolean;
    target?: string;
}

export const Cta = ({link, text, secondary, target = ""}: CtaProps) => {
  return (
    <Link href={link} target={target} className="w-full min-w-72">
    <motion.div
      className={"flex justify-center items-center gap-12 p-4 h-20 hover:bg-yellow-400 hover:font-bold " + (secondary ? "bg-transparent border-2 border-zinc-950 text-zinc-950 hover:border-none" : "bg-zinc-950 text-zinc-100 hover:text-zinc-950")}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      transition={{ type: "spring", stiffness: 300, damping: 50, mass: 0.5 }}>
            <p className="text-xl 2xl:text-2xl">{text}</p>
      </motion.div>
    </Link>
  )
}
