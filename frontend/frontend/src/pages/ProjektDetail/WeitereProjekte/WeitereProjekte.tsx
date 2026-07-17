import Components from '@components';
import { ProjectsData } from '@data';

import type { WeitereProjekteProps } from './WeitereProjekte.types';

const WeitereProjekte = ({ project }: WeitereProjekteProps) => {
  const relatedProjects = ProjectsData.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Components.SectionHeading category="Weitere Projekte" heading="Mehr aus unserer Arbeit" />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedProjects.map((item) => (
            <Components.ProjectCard
              key={item.slug}
              name={item.name}
              category={item.category}
              gradient={item.gradient}
              image={item.image}
              to={`/projekte/${item.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeitereProjekte;
