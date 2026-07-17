import Components from '@components';

import StatsData from './Stats.data';

const Stats = () => (
  <section className="px-6 py-20 sm:py-28">
    <div className="mx-auto max-w-6xl">
      <Components.SectionHeading
        category={StatsData.category}
        heading={StatsData.heading}
        description={StatsData.description}
      />

      <Components.StatsGrid stats={StatsData.stats} className="mt-14" />
    </div>
  </section>
);

export default Stats;
