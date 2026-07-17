import Components from '@components';
import { ProjectsData } from '@data';
import { useParams } from 'react-router-dom';

import Ui from '@/ui';

import Bildergalerie from './Bildergalerie';
import Cta from './Cta';
import Designprozess from './Designprozess';
import Entwicklung from './Entwicklung';
import Ergebnisse from './Ergebnisse';
import Herausforderung from './Herausforderung';
import Hero from './Hero';
import Kundenfeedback from './Kundenfeedback';
import Loesung from './Loesung';
import Technologien from './Technologien';
import Uebersicht from './Uebersicht';
import WeitereProjekte from './WeitereProjekte';

const ProjektDetail = () => {
  const { slug } = useParams();
  const project = ProjectsData.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="px-6 py-32 text-center">
        <Components.PageMeta
          title="Projekt nicht gefunden"
          description="Dieses Projekt existiert nicht oder wurde entfernt."
        />
        <Ui.Text as="h1" variant="h1" text="Projekt nicht gefunden" />
        <Ui.Text variant="lead" className="mt-4" text="Dieses Projekt existiert nicht oder wurde entfernt." />
        <Ui.Buttons
          container="link"
          to="/studio/projekte"
          label="Alle Projekte ansehen"
          variant="primary"
          size="sm"
          className="mt-8 inline-flex"
        />
      </main>
    );
  }

  return (
    <main>
      <Components.PageMeta title={project.name} description={project.challenge} />
      <Hero project={project} />
      <Uebersicht project={project} />
      <Herausforderung project={project} />
      <Loesung project={project} />
      <Designprozess project={project} />
      <Entwicklung project={project} />
      <Ergebnisse project={project} />
      <Bildergalerie project={project} />
      <Technologien project={project} />
      <Kundenfeedback project={project} />
      <WeitereProjekte project={project} />
      <Cta />
    </main>
  );
};

export default ProjektDetail;
