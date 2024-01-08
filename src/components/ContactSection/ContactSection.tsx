"use client";

import { Socials } from "../Socials/Socials"
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';


interface IContactSectionProps {
  sectionTitle: string;
  title1: string;
  title2: string;
  placeholderName: string;
  placeholderMessage: string;
  confirmation: string;
  cta: string;
}



export const ContactSection = ({confirmation, cta, placeholderMessage, placeholderName,sectionTitle,title1, title2}: IContactSectionProps) => {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset, watch } = useForm<FormData>();

  const name = watch('name');
  const email = watch('email');
  const message = watch('message');

  function onSubmit(data: FormData) {
    sendEmail(data);
    reset();
  }

  const s = [
    {
      name: "Whatsapp",
      link: "https://web.whatsapp.com/send?phone=5586988629841",
      icon: "/whatsapp.svg",
    },
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
      name: "Email",
      link: "mailto:ps.joaovitor27@gmail.com",
      icon: "/mail.svg"
    },
  ]

  return (
    <section id="contact" className="flex flex-col sm:items-center font-display px-8 relative py-32 sm:py-96 mb-28">
      <h2 className="text-9xl md:text-10xl absolute text-slate-200 top-0 -z-20">{sectionTitle}</h2>
      <div className="flex flex-col items-start justify-center">
        <p className="font-body mb-2 sm:text-xl text-zinc-700">{title1}</p>
        <h3 className="font-display text-7xl sm:text-9xl text-zinc-950">{title2}</h3>
      </div>
      <form className="flex flex-col gap-4 mt-10 w-full sm:w-3/4 max-w-xl font-body mb-8 z-10 bg-slate-100" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input {...register('name', { required: true })} type="text" placeholder={placeholderName} className={`outline-none bg-transparent border-b-2 border-zinc-950 w-full text-xl focus:border-yellow-400 placeholder:text-zinc-700 py-6 ${errors.name ? 'border-red-500' : ''}`} />
          <input {...register('email', { required: true })} type="email" placeholder="Email" className={`outline-none bg-transparent border-b-2 border-zinc-950 w-full text-xl focus:border-yellow-400 placeholder:text-zinc-700  py-6 ${errors.email ? 'border-red-500' : ''}`} />    
          {errors.email?.message}      
        </div>
        <textarea {...register('message', { required: true })} placeholder={placeholderMessage} className={`resize-none outline-none bg-transparent border-b-2 border-zinc-950 w-full text-xl focus:border-yellow-400 placeholder:text-zinc-700 ${errors.message ? 'border-red-500' : ''}`} />
        <button type="submit" disabled={Object.keys(errors).length > 0 || !name || !email || !message} className={`mt-16 flex justify-center items-center gap-12 p-4 h-20 disabled:bg-zinc-400 disabled:hover:bg-zinc-400 disabled:hover:text-zinc-100 disabled:hover:font-normal hover:bg-yellow-400 hover:font-bold bg-zinc-950 text-zinc-100 hover:text-zinc-950 ${Object.keys(errors).length > 0 ? 'opacity-50 cursor-not-allowed' : ''}`}>{cta}</button>
        {isSubmitSuccessful && <p className="text-green-600 text-xl">{confirmation}</p>}
      </form>
      <Socials socials={s} />
    </section>
  )
}