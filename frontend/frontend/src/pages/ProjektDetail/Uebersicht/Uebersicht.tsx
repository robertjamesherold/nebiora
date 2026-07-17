import Ui from '@/ui';

import type { UebersichtProps } from './Uebersicht.types';

const Uebersicht = ({ project }: UebersichtProps) => (
  <section className="px-6 py-20">
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <Ui.Text variant="caption" text="Kunde" />
        <Ui.Text as="h4" variant="h4" className="mt-2" text={project.client} />
      </div>
      <div>
        <Ui.Text variant="caption" text="Branche" />
        <Ui.Text as="h4" variant="h4" className="mt-2" text={project.industry} />
      </div>
      <div>
        <Ui.Text variant="caption" text="Zeitraum" />
        <Ui.Text as="h4" variant="h4" className="mt-2" text={project.timeframe} />
      </div>
      <div>
        <Ui.Text variant="caption" text="Leistungen" />
        <Ui.Text as="h4" variant="h4" className="mt-2" text={project.services.join(' · ')} />
      </div>
    </div>
  </section>
);

export default Uebersicht;
