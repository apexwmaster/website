import {
  ConstructionInspectionSection,
  IndotSection,
  RightOfWaySection,
  StormwaterSection,
  SurveyingSection,
} from '@/components/services';
import PageHero from '@/components/shared/page-hero';
import React from 'react';

function Services() {
  return (
    <main>
      <PageHero
        title="Our Services"
        description="APEX currently provides professional services for the Indiana Department of Transportation (INDOT), local municipalities, county, contractors, developers, and architect/engineering consulting firms. Our goal is always to go the extra mile to find a way so that we can complete the work faster and give cost savings to our clients."
      />
      <IndotSection />
      <SurveyingSection />
      <RightOfWaySection />
      <ConstructionInspectionSection />
      <StormwaterSection />
    </main>
  );
}

export default Services;
