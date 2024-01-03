import { Header, HeroSection } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header.Root>
        <Header.Logo />
        <Header.Nav />
      </Header.Root>
      <HeroSection />
    </>
  )
}
