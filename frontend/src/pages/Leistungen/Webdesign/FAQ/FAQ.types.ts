import type { FAQItem } from '@components/FAQAccordion/FAQAccordion.types';

type FAQProps = {
  category: string;
  heading: string | [string, string];
  description?: string;
  items: FAQItem[];
};

export type { FAQProps };
