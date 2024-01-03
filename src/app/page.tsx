import { AboutSection, Header, HeroSection, FollowCursor } from '@/components';

export default function Home() {
  return (
    <>
      <FollowCursor />
      <Header.Root>
        <Header.Logo />
        <Header.Nav />
      </Header.Root>
      <HeroSection />
      <AboutSection />
    </>
  )
}
