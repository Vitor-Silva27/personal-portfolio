import { Header, HeroSection } from '@/components'
import { FollowCursor } from '@/components/FollowCursor/FollowCursor'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header.Root>
        <Header.Logo />
        <Header.Nav />
      </Header.Root>
      <HeroSection />
      <FollowCursor />
    </>
  )
}
