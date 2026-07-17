import Components from '@components';

import type { BildergalerieProps } from './Bildergalerie.types';

const Bildergalerie = ({ project }: BildergalerieProps) => (
  <section className="px-6 py-20">
    <div className="mx-auto max-w-6xl">
      <Components.SectionHeading category="Bildergalerie" heading="Einblicke in das Projekt" />
      <Components.ProjectGallery images={project.gallery} className="mt-10" />
    </div>
  </section>
);

export default Bildergalerie;
