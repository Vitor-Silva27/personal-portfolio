import { AboutSection, Header, HeroSection, FollowCursor, SkillsSection, BackToTop } from '@/components';

export default function Home() {
  return (
    <>
      <FollowCursor />
      <BackToTop />
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
