import Components from '@components';

import Ui from '@/ui';

import type { DesignprozessProps } from './Designprozess.types';

const Designprozess = ({ project }: DesignprozessProps) => (
  <section className="px-6 py-20">
    <div className="mx-auto max-w-6xl">
      <Components.SectionHeading category="Designprozess" heading="Wie wir vorgegangen sind" />
      <Ui.Text variant="body" className="mt-8 max-w-3xl" text={project.designProcess} />
    </div>
  </section>
);

export default Designprozess;
