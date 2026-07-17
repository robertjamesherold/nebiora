import Components from '@components';

import type { ErgebnisseProps } from './Ergebnisse.types';

const Ergebnisse = ({ project }: ErgebnisseProps) => (
  <section className="px-6 py-20">
    <div className="mx-auto max-w-6xl">
      <Components.SectionHeading category="Ergebnisse" heading="Was sich verändert hat" />
      <Components.StatsGrid stats={project.results} className="mt-14" />
    </div>
  </section>
);

export default Ergebnisse;
