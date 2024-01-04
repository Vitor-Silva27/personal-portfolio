import { AboutSection, Header, HeroSection, FollowCursor, SkillsSection } from '@/components';

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
      <SkillsSection />
    </>
  )
}
