import AboutBanner from '@/components/home/about-banner';
import ExperienceSection from '@/components/home/experience-section';
import Hero from '@/components/home/hero';
import { ProcessSection } from '@/components/home/process';
import ProjectsBanner from '@/components/home/projects-banner';
import { getProcessSteps } from '@/sanity/lib/data';

export default async function Home() {
  const processSteps = await getProcessSteps();

  return (
    <div>
      <main>
        <Hero />
        <AboutBanner />
        <ProcessSection steps={processSteps} />
        <ExperienceSection />
        <ProjectsBanner />
      </main>
    </div>
  );
}
