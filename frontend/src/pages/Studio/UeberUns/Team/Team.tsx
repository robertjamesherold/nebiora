import Components from '@components';

import TeamData from './Team.data';

const Team = () => (
  <section className="px-6 py-20 sm:py-28">
    <div className="mx-auto max-w-6xl">
      <Components.SectionHeading
        category={TeamData.category}
        heading={TeamData.heading}
        description={TeamData.description}
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TeamData.members.map((member) => (
          <Components.TeamCard key={member.name} {...member} />
        ))}
      </div>
    </div>
  </section>
);

export default Team;
