import Components from '@components';

import type { FAQProps } from './FAQ.types';

const FAQ = ({ category, heading, description, items }: FAQProps) => (
  <section className="px-6 py-20">
    <div className="mx-auto max-w-6xl">
      <Components.SectionHeading
        category={category}
        heading={heading}
        description={description}
        align="center"
        size="md"
        className="mx-auto max-w-2xl"
      />
      <Components.FAQAccordion items={items} className="mt-10 mx-auto max-w-3xl" />
    </div>
  </section>
);

export default FAQ;
