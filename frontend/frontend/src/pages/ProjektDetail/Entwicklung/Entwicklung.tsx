import Components from '@components';

import Ui from '@/ui';

import type { EntwicklungProps } from './Entwicklung.types';

const Entwicklung = ({ project }: EntwicklungProps) => (
  <section className="px-6 py-20">
    <div className="mx-auto max-w-6xl">
      <Components.SectionHeading category="Entwicklung" heading="Technische Umsetzung" />
      <Ui.Text variant="body" className="mt-8 max-w-3xl" text={project.development} />
    </div>
  </section>
);

export default Entwicklung;
