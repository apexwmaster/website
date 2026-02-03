import AboutBanner from '@/components/home/about-banner';
import ExperienceSection from '@/components/home/experience-section';
import FenceCtaBanner from '@/components/home/fence-cta-banner';
import Hero from '@/components/home/hero';
import { ProcessSection } from '@/components/home/process';
import ProjectsBanner from '@/components/home/projects-banner';
import ResidentialSurveySection from '@/components/home/residential-survey-section';
import { getProcessSteps } from '@/sanity/lib/data';

export default async function Home() {
  const processSteps = await getProcessSteps();

  return (
    <div>
      <main>
        <Hero />
        <AboutBanner />
        <FenceCtaBanner />
        <ResidentialSurveySection />
        <ProcessSection steps={processSteps} />
        <ExperienceSection />
        <ProjectsBanner />
      </main>
    </div>
  );
}
