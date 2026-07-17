import Ui from '@/ui';

import type { ServiceCardProps } from './ServiceCard.types';

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => (
  <Ui.Card   className="p-7">
    <div className="flex size-11 items-center justify-center rounded-sm bg-linear-to-br from-brand-500/30 to-accent-500/20 text-brand-200">
      <Ui.Icon strokeWidth={1.6}>{icon}</Ui.Icon>
    </div>
    <Ui.Text as="h3" variant="h3" className="mt-5">
      {title}
    </Ui.Text>
    <Ui.Text variant="body" className="mt-2 leading-relaxed">
      {description}
    </Ui.Text>
  </Ui.Card>
);

export default ServiceCard;
