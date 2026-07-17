import Components from '@components';

import WarumNebioraData from './WarumNebiora.data';

const WarumNebiora = () => (
  <section className="px-6 py-20 sm:py-28">
    <div className="mx-auto max-w-6xl">
      <Components.SectionHeading
        category={WarumNebioraData.category}
        heading={WarumNebioraData.heading}
        description={WarumNebioraData.description}
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {WarumNebioraData.benefits.map((benefit) => (
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

export default WarumNebiora;
