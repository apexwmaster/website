import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';
import ClientCategoryCard from './client-category-card';
import { ClientCategory } from './clients-data';

interface ClientsSectionProps {
  categories: ClientCategory[];
}

function ClientsSection({ categories }: ClientsSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeader
          highlightedWord="Clients"
          size="base"
          className="mb-1">
          Our Clients
        </SectionHeader>
        <p className="text-base md:text-xl leading-relaxed mb-4 w-full md:w-3/4">
          We&apos;re proud to partner with state agencies, engineering
          firms, and contractors across Indiana, delivering excellence
          on every project.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <ClientCategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ClientsSection;
