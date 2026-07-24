import Components from '@components';

import { LeistungSections } from './';
import type { LeistungPageData } from './LeistungPage.types';

const LeistungPage = ({ data }: { data: LeistungPageData }) => (
  <main>
    <Components.PageMeta title={data.pageMeta.title} description={data.pageMeta.description} />
    <LeistungSections.Hero {...data.hero} />
    <LeistungSections.Beschreibung {...data.beschreibung} />
    <LeistungSections.Vorteile {...data.vorteile} />
    <LeistungSections.Prozess {...data.prozess} />
    <LeistungSections.Technologien {...data.technologien} />
    <LeistungSections.FAQ {...data.faq} />
    <LeistungSections.Cta {...data.cta} />
  </main>
);

export default LeistungPage;
