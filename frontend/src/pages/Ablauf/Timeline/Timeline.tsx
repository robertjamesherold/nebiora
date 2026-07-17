import Components from '@components';

import { TimelineData } from './';

const Timeline = () => {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <Components.SectionHeading
          category={TimelineData.category}
          heading={TimelineData.heading}
          description={TimelineData.description}
        />
        <Components.ProcessTimeline steps={TimelineData.steps} className="mt-16" />
      </div>
    </section>
  );
};

export default Timeline;
