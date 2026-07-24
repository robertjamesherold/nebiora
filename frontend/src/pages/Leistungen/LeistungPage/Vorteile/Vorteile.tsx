import Components from '@components';

import type { VorteileProps } from './Vorteile.types';

const Vorteile = ({ category, heading, description, benefits }: VorteileProps) => (
  <section className="px-6 py-20">
    <div className="mx-auto max-w-6xl">
      <Components.SectionHeading
        category={category}
        heading={heading}
        description={description}
        align="center"
        size="md"
        className="mx-auto max-w-2xl"
      />
      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit) => (
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
