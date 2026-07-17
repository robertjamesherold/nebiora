import Components from '@components';

import Ui from '@/ui';

import type { LoesungProps } from './Loesung.types';

const Loesung = ({ project }: LoesungProps) => (
  <section className="px-6 py-20">
    <div className="mx-auto max-w-6xl">
      <Components.SectionHeading category="Lösung" heading="Unser Ansatz" />
      <Ui.Text variant="body" className="mt-8 max-w-3xl" text={project.solution} />
    </div>
  </section>
);

export default Loesung;
