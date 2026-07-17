import Components from '@components';

import FAQData from './FAQ.data';

const FAQ = () => (
  <section className="px-6 py-20 sm:py-28">
    <div className="mx-auto max-w-6xl">
      <Components.SectionHeading
        category={FAQData.category}
        heading={FAQData.heading}
        description={FAQData.description}
        align="center"
      />

      <Components.FAQAccordion items={FAQData.items} className="mt-10 mx-auto max-w-3xl" />
    </div>
  </section>
);

export default FAQ;
