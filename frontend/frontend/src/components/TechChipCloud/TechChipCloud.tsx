import Ui from '@/ui';

import type { TechChipCloudProps } from './TechChipCloud.types';

const TechChipCloud = ({ items, className = '' }: TechChipCloudProps) => (
  <ul role="list" className={`flex flex-wrap gap-3 ${className}`}>
    {items.map((item) => (
      <li key={item}>
        <Ui.Badge label={item} dot={false} style="secondary" />
      </li>
    ))}
  </ul>
);

export default TechChipCloud;
