import Components from '@components';

import type { TechnologienProps } from './Technologien.types';

const Technologien = ({ project }: TechnologienProps) => (
  <section className="px-6 py-20">
    <div className="mx-auto max-w-6xl">
      <Components.SectionHeading category="Technologien" heading="Verwendete Technologien" />
      <Components.TechChipCloud items={project.technologies} className="mt-10" />
    </div>
  </section>
);

export default Technologien;
