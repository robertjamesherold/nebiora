import Icons from '@icons';

import Ui from '@/ui';

import type { TestimonialCardProps } from './TestimonialCard.types';

const TestimonialCard = ({ quote, author, role, company, className = '' }: TestimonialCardProps) => (
  <Ui.Card glass className={`flex flex-col gap-6 p-8 sm:p-10 ${className}`}>
    <Icons.Quotes size="xl" className="text-ink-50" aria-hidden="true" />
    <Ui.Text variant="lead" text={`„${quote}“`} />
    <div>
      <Ui.Text as="h4" variant="h4" text={author} />
      <Ui.Text variant="bodyMuted" text={company ? `${role} · ${company}` : role} />
    </div>
  </Ui.Card>
);

export default TestimonialCard;
