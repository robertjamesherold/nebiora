import Icons from '@icons';

import Ui from '@/ui';

import type { FAQAccordionProps } from './FAQAccordion.types';

const FAQAccordion = ({ items, className = '' }: FAQAccordionProps) => (
  <div className={`flex flex-col gap-4  ${className}`}>
    {items.map((item) => (
      <Ui.Card key={item.question} className=" p-0 glass-panel overflow-hidden focus-within:ring-1 focus-within:ring-brand-400/50">
        <details className="group ">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 focus-visible:outline-none ">
            <Ui.Text as="h3" variant="h4" text={item.question} />
            <Icons.ChevronDown
              size="sm"
              className="shrink-0 text-ink-400 transition-transform duration-300 group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <Ui.Text variant="body" className="px-6 pb-6 leading-relaxed" text={item.answer} />
        </details>
      </Ui.Card>
    ))}
  </div>
);

export default FAQAccordion;
