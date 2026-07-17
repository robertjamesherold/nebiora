import Components from '@components';
import { ProjectsData } from '@data';

import Ui from '@/ui';

import ReferenzenData from './Referenzen.data';

const relevant = ProjectsData.filter((project) => project.services.includes('Branding'));

const Referenzen = () => (
  <section className="px-6 py-20">
    <div className="mx-auto max-w-6xl">
      <Components.SectionHeading
        category={ReferenzenData.category}
        heading={ReferenzenData.heading}
        description={ReferenzenData.description}
        align="center"
        size="md"
        className="mx-auto max-w-2xl"
      />
      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {relevant.map((project) => (
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
      <div className="mt-10 flex justify-center">
        <Ui.Buttons container="link" to="/studio/projekte" label="Alle Projekte ansehen" variant="secondary" />
      </div>
    </div>
  </section>
);

export default Referenzen;
