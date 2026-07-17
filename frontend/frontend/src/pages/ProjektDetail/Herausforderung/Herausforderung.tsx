import Components from '@components';

import Ui from '@/ui';

import type { HerausforderungProps } from './Herausforderung.types';

const Herausforderung = ({ project }: HerausforderungProps) => (
  <section className="px-6 py-20">
    <div className="mx-auto max-w-6xl">
      <Components.SectionHeading category="Herausforderung" heading="Die Ausgangslage" />
      <Ui.Text variant="body" className="mt-8 max-w-3xl" text={project.challenge} />
    </div>
  </section>
);

export default Herausforderung;
