import { AboutSection, Header, HeroSection, FollowCursor, SkillsSection, BackToTop, ContactSection } from '@/components';
import { ProjectsSection } from '@/components/ProjectsSection/ProjectsSection';
import { myProjectsCardsEn, myProjectsCardsPt } from '@/utils/data/ProjectsCards';
import { useTranslations, useLocale } from 'next-intl';
export default function Home() {
  const t = useTranslations('Index');
  const locale = useLocale();
  const projects = locale === 'en' ? myProjectsCardsEn : myProjectsCardsPt;

  return (
    <>
      <FollowCursor />
      <BackToTop />
      <Header.Root>
        <Header.Logo />
        <Header.Nav about={t('nav.about')} contact={t('nav.contact')} projects={t('nav.projects')} lang={t('nav.lang')}/>
      </Header.Root>
      <HeroSection title={t('hero.title')} cta={t('hero.cta')} description={t('hero.description')} welcome={t('hero.welcome')}/>
      <AboutSection p1={t('about.p1')} p2={t('about.p2')} s={t('about.s')} title={t('about.title')} />
      <SkillsSection title={t('skills.title')} />
      <ProjectsSection title={t('projects.title')} projects={projects} ctaText={t('projects.ctaText')} secondaryText={t('projects.secondaryText')}/>
      <ContactSection sectionTitle={t('contact.sectionTitle')} confirmation={t('contact.confirmation')} cta={t('contact.cta')} title1={t('contact.title1')} title2={t('contact.title2')} placeholderName={t('contact.placeholderName')} placeholderMessage={t('contact.placeholderMessage')}/>
    </>
  )
}
