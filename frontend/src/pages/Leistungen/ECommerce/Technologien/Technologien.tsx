import Components from '@components';

import TechnologienData from './Technologien.data';

const Technologien = () => (
  <section className="px-6 py-20">
    <div className="mx-auto max-w-6xl">
      <Components.SectionHeading
        category={TechnologienData.category}
        heading={TechnologienData.heading}
        description={TechnologienData.description}
        align="center"
        size="md"
        className="mx-auto max-w-2xl"
      />
      <Components.TechChipCloud items={TechnologienData.items} className="mt-10 justify-center" />
    </div>
  </section>
);

export default Technologien;
