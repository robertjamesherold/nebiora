import Components from '@components';

import type { TechnologienProps } from './Technologien.types';

const Technologien = ({ category, heading, description, items }: TechnologienProps) => (
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
      <Components.TechChipCloud items={items} className="mt-10 justify-center" />
    </div>
  </section>
);

export default Technologien;
