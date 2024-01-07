"use client";

import { Socials } from "../Socials/Socials"
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

export const ContactSection = () => {
    const { register, handleSubmit } = useForm<FormData>();

    function onSubmit(data: FormData) {
      sendEmail(data);
    }

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
            name: "EMail",
            link: "mailto:ps.joaovitor27@gmail.com",
            icon: "/mail.svg"
        }
    ]

  return (
      <section id="contact" className="flex flex-col items-center font-display relative py-32 sm:py-96 z-10 bg-slate-100">
        <h2 className="text-9xl md:text-10xl absolute text-slate-200 top-0 -z-20">Contact</h2>
        <div className="flex flex-col items-start justify-center">
            <p className="font-body mb-2 text-xl text-zinc-700">Did you Like my portfolio?</p>
            <h3 className="font-display text-9xl text-zinc-950">Get in touch!</h3>
        </div>
        <form className="flex flex-col gap-4 mt-10 w-3/4 max-w-xl font-body mb-8"  onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-4 mb-6">
                <input  {...register('name', { required: true })} type="text" placeholder="Name" className="outline-none bg-transparent border-b-2 border-zinc-950 w-full text-xl focus:border-yellow-400 placeholder:text-zinc-700" />
                <input  {...register('email', { required: true })} type="email" placeholder="Email" className="outline-none bg-transparent border-b-2 border-zinc-950 w-full text-xl focus:border-yellow-400 placeholder:text-zinc-700"/>
            </div>
            <textarea {...register('message', { required: true })} placeholder="Message" className="resize-none outline-none bg-transparent border-b-2 border-zinc-950 w-full text-xl focus:border-yellow-400 placeholder:text-zinc-700"/>
            <button type="submit" className="mt-16 flex justify-center items-center gap-12 p-4 h-20 hover:bg-yellow-400 hover:font-bold bg-zinc-950 text-zinc-100 hover:text-zinc-950">Send</button>
        </form>
        <Socials socials={s}/>
    </section>
  )
}
