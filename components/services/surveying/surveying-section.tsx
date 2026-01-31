import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';
import BenefitCard from './benefit-card';
import { surveyingBenefits } from './surveying-data';

function SurveyingSection() {
  return (
    <section className="mt-16 md:mt-24">
      <Container>
        <SectionHeader size="base" className="mb-1">
          Surveying
        </SectionHeader>
        <p className="text-lg md:text-2xl italic font-medium mb-2">
          Trusted Surveying Services In{' '}
          <span className="text-primary">
            Northeast Indiana Since 2004
          </span>
        </p>
        <p className="text-base md:text-xl leading-relaxed mb-2 sm:mb-4">
          Apex Consulting and Surveying has provided surveying
          services in northeast Indiana since 2004. Our surveying
          services include topographic and boundary surveys. Our Land
          Surveying service includes boundary surveys, topographic
          survey, subsurface utility engineering (SUE) survey,
          construction staking and LiDar Drone survey.
        </p>

        {/* Blockquote */}
        <blockquote className="border-l-4 border-primary pl-6 py-2 mb-2 sm:mb-4 bg-gray-50 rounded-r-lg">
          <p className="text-gray-700 leading-relaxed text-base md:text-xl">
            Apex Is Certified To Use Unmanned Aviation Vehicles (UAV)
            Or Lidar Drones For Surveying. Our LiDAR Drone Surveying
            Service Is Our New Innovative Surveying Equipment. LiDAR,
            Or Light Detection And Ranging, Uses A Laser Pulse To
            Create The Earth&apos;s Surface. LiDAR Drones Are Typical
            Drones That Are Made To Carry A LiDAR Sensor. They Are
            Used To Collect Surface Data That Can Be Used To Create
            Detailed 3D Models For Many Applications And Industries,
            Such As Agriculture, Forestry, Archaeology, Mining,
            Insurance, Construction, Inspection, And Transportation.
          </p>
        </blockquote>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6">
          {surveyingBenefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SurveyingSection;
