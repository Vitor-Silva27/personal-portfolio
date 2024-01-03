export const AboutSection = () => {
  return (
    <section className="py-32 sm:py-64 flex" id="about">
        <div className='w-2/5 hidden lg:block bg-yellow-400 h-80'></div>
        <div className='w-full flex flex-col items-center justify-center lg:items-start sm:text-center lg:pl-16 lg:text-left xl:w-3/5'>
            <h2 className='font-display text-3xl sm:text-6xl tracking-widest mb-8' >A little bit about me</h2>
            <div className='w-10/12 2xl:w-4/6'>
                <p className='text-zinc-600 text-base sm:text-xl my-2'>My name is Vitor Silva. I am a programmer based in Brazil. I have been studying programming since 2020, and I am passionate about development. I always strive to give my best in any work I do. </p>
                <p className='text-zinc-600 text-base sm:text-xl my-2'>I am a quick learner, highly curious, and dedicated. My goal is to develop software solutions that improve and simplify people&apos;s lives, and have a great impact in society.</p>
            </div>
        </div>
    </section>
  )
}
