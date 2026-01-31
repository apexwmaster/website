import Container from '@/components/shared/container';

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: '100+', label: 'INDOT Projects Completed' },
  { value: '20+', label: 'Years of Experience' },
  { value: '50+', label: 'Clients Served' },
  { value: '50+', label: 'LPA Projects Delivered' },
];

function StatsBanner() {
  return (
    <section data-navbar-theme="dark" className="py-12 bg-gray-900">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-white/80 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default StatsBanner;
