import Components from '@components';
import { ProjectsData } from '@data';

import ProjectGridData from './ProjectGrid.data';

const ProjectGrid = () => (
  <section className="px-6 py-20 sm:py-28">
    <div className="mx-auto max-w-6xl">
      <Components.SectionHeading
        category={ProjectGridData.category}
        heading={ProjectGridData.heading}
        description={ProjectGridData.description}
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {ProjectsData.map((project) => (
          <Components.ProjectCard
            key={project.slug}
            name={project.name}
            category={project.category}
            gradient={project.gradient}
            image={project.image}
            to={`/projekte/${project.slug}`}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectGrid;
