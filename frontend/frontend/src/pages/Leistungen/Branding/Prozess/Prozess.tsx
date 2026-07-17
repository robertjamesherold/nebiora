import Components from '@components';

import ProzessData from './Prozess.data';

const Prozess = () => (
  <section className="px-6 py-20">
    <div className="mx-auto max-w-6xl">
      <Components.SectionHeading
        category={ProzessData.category}
        heading={ProzessData.heading}
        description={ProzessData.description}
        align="center"
        size="md"
        className="mx-auto max-w-2xl"
      />
      <Components.ProcessTimeline orientation="horizontal" steps={ProzessData.steps} className="mt-14" />
    </div>
  </section>
);

export default Prozess;
