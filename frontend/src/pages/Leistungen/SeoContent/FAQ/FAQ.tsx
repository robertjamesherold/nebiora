import Components from '@components';

import FAQData from './FAQ.data';

const FAQ = () => (
  <section className="px-6 py-20">
    <div className="mx-auto max-w-6xl">
      <Components.SectionHeading
        category={FAQData.category}
        heading={FAQData.heading}
        description={FAQData.description}
        align="center"
        size="md"
        className="mx-auto max-w-2xl"
      />
      <Components.FAQAccordion items={FAQData.items} className="mt-10 mx-auto max-w-3xl" />
    </div>
  </section>
);

export default FAQ;
