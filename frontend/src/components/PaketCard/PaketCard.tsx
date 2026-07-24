import Icons from '@icons';

import Ui from '@/ui';

import type { PaketCardProps } from './PaketCard.types';

const PaketCard = ({
  name,
  tagline,
  description,
  icon,
  features,
  highlighted = false,
  onRequestOffer,
}: PaketCardProps) => (
  <Ui.Card glass hover className={`flex flex-col p-8 ${highlighted ? 'border-brand-400/60' : ''}`}>
    {highlighted && <Ui.Badge label="Beliebt" style="primary" className="mb-4 self-start" />}
    <div className="flex size-11 items-center justify-center rounded-sm bg-linear-to-br from-brand-500/30 to-accent-500/20 text-brand-200">
      {icon}
    </div>
    <Ui.Text as="h3" variant="h3" className="mt-5" text={name} />
    <Ui.Text variant="eyebrowMuted" className="mt-1 text-brand-300" text={tagline} />
    <Ui.Text variant="body" className="mt-3" text={description} />
    <ul className="mt-5 flex flex-col gap-2">
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-2 text-sm text-ink-300">
          <Icons.Check size="xs" className="mt-0.5 shrink-0 text-brand-300" aria-hidden="true" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <div className="mt-auto flex flex-col items-start gap-3 pt-6">
      <Ui.Buttons
        container="button"
        onClick={onRequestOffer}
        label="Angebot anfragen"
        variant={highlighted ? 'primary' : 'secondary'}
        size="small"
        className="w-full"
      />
    </div>
  </Ui.Card>
);

export default PaketCard;
