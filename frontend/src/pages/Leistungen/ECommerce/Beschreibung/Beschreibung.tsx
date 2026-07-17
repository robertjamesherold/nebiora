import Components from '@components';

import Ui from '@/ui';

import BeschreibungData from './Beschreibung.data';

const Beschreibung = () => (
  <section className="px-6 py-20">
    <Components.SectionHeading
      category={BeschreibungData.category}
      heading={BeschreibungData.heading}
      align="center"
      size="lg"
      className="mx-auto max-w-2xl"
    />
    <div className="mx-auto mt-14 max-w-3xl space-y-4">
      {BeschreibungData.paragraphs.map((paragraph, index) => (
        <Ui.Text key={index} variant="body" text={paragraph} />
      ))}
    </div>
  </section>
);

export default Beschreibung;
