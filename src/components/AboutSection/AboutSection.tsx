export const AboutSection = () => {
  return (
    <section className="relative py-32 sm:py-96 flex w-full flex-col items-center justify-center lg:items-start xl:pl-16 overflow-x-hidden" id="about">
            <h2 className='font-display text-9xl md:text-10xl absolute text-slate-200 left-8 -z-20 tracking-widest mb-8 text-nowrap' >about me</h2>
            <div className='w-4/5 leading-relaxed'>
                <p className='text-zinc-600 text-xl sm:text-4xl my-8 lg:ml-80'>My name is Vitor Silva. I am a programmer based in Brazil. I have been studying programming since 2020, and I am passionate about development. I always strive to give my best in any work I do. </p>
                <p className='text-zinc-600 text-xl sm:text-4xl my-8 lg:ml-80'>I am a quick learner, highly curious, and dedicated. <strong>My goal is to develop software solutions that improve and simplify people&apos;s lives, and have a great impact in society.</strong></p>
            </div>
    </section>
  )
}
