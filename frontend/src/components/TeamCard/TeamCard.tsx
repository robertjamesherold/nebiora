import Ui from '@/ui';

import type { TeamCardProps } from './TeamCard.types';

const TeamCard = ({ name, role, photo, bio, className = '' }: TeamCardProps) => (
  <Ui.Card className={`overflow-hidden p-0 ${className}`}>
    <img src={photo} alt={name} className="aspect-square w-full object-cover" />
    <div className="p-6">
      <Ui.Text as="h3" variant="h3" text={name} />
      <Ui.Text variant="bodyMuted" className="mt-1" text={role} />
      {bio && <Ui.Text variant="body" className="mt-3 leading-relaxed" text={bio} />}
    </div>
  </Ui.Card>
);

export default TeamCard;
