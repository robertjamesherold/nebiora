import Components from '@components';

import ServicesData from './Services.data';

const Services = () => {
  return (
    <section id="leistungen" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Components.SectionHeading
          category={ServicesData.category}
          heading={[ServicesData.heading[0], ServicesData.heading[1]]}
          description={ServicesData.description}
          align="left"
          size="md"
          className="mx-auto max-w-lg sm:text-center"
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ServicesData.cards.map((service) => (
            <Components.ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
