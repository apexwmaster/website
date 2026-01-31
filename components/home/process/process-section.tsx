import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';
import ProcessStep from './process-step';
import { ProcessStepData } from './process-step';

interface ProcessSectionProps {
  steps: ProcessStepData[];
}

function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <section data-navbar-theme="light" className="mt-16 md:mt-24">
      <Container>
        {/* Section Header */}
        <div className="mb-6 md:mb-4">
          <SectionHeader highlightedWord="Process" size="base">
            Our Process
          </SectionHeader>
          <p className="text-base md:text-lg w-full md:w-4/5">
            From initial surveys to final construction staking, our
            proven four-step process ensures your project is completed
            with accuracy, on time, and within budget.
          </p>
        </div>

        {/* Process Steps */}
        <div className="flex flex-col gap-6 sm:gap-16 md:gap-20 lg:gap-24">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.stepNumber}
              data={step}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProcessSection;
