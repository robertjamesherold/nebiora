import Components from '@components';

import VorteileData from './Vorteile.data';

const Vorteile = () => (
  <section className="px-6 py-20">
    <div className="mx-auto max-w-6xl">
      <Components.SectionHeading
        category={VorteileData.category}
        heading={VorteileData.heading}
        description={VorteileData.description}
        align="center"
        size="md"
        className="mx-auto max-w-2xl"
      />
      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {VorteileData.benefits.map((benefit) => (
          <Components.ServiceCard
            key={benefit.title}
            title={benefit.title}
            description={benefit.description}
            icon={benefit.icon}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Vorteile;
