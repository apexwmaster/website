import PageHero from '@/components/shared/page-hero';
import { ContactForm } from '@/components/contact/contact-form';

function ContactPage() {
  return (
    <main>
      <PageHero
        title="Contact Apex"
        description="Share your project details with Apex Consulting & Surveying, Inc. Whether you’re planning early concepts or preparing for construction, our team is ready to support your transportation, municipal, and site development work."
      />
      <ContactForm />
    </main>
  );
}

export default ContactPage;
