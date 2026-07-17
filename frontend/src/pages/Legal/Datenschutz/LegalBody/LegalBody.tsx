import Ui from '@/ui';

import LegalBodyData from './LegalBody.data';

const LegalBody = () => (
  <section className="px-6 pb-28">
    <div className="mx-auto max-w-3xl space-y-12">
      {LegalBodyData.sections.map((item) => (
        <article key={item.heading}>
          <Ui.Text as="h2" variant="h3Large" text={item.heading} />
          <div className="mt-4 space-y-3">
            {item.body.map((paragraph, index) => (
              <Ui.Text key={index} variant="body" className="leading-relaxed" text={paragraph} />
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default LegalBody;
