import { AboutSection, Header, HeroSection, FollowCursor, SkillsSection, BackToTop, ContactSection } from '@/components';
import { ProjectsSection } from '@/components/ProjectsSection/ProjectsSection';
import { myProjectsCards } from '@/utils/data/ProjectsCards';

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
      <ProjectsSection projects={myProjectsCards}/>
      <ContactSection />
    </>
  )
}
