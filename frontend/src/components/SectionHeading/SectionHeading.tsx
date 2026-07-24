import Ui from '@/ui';

import type { SectionHeadingProps } from './SectionHeading.types';
import SectionHeadingVariant from './SectionHeading.variants';

const SectionHeading = ({
  category,
  heading,
  description,
  align = 'left',
  size = 'md',
  className = '',
}: SectionHeadingProps) => (
  <div className={`${SectionHeadingVariant.align[align]} ${className} "flex flex-col items-start justify-center gap-4"`}>
    <Ui.Text variant="eyebrow">{category}</Ui.Text>
    <Ui.Text as="h2" variant={SectionHeadingVariant.headingVariant[size]} className="mt-2" text={Array.isArray(heading) ? heading.join(' ') : heading} />
    <Ui.Text variant="body" className="mt-4 whitespace-break-spaces " text={description} />
  </div>
);

export default SectionHeading;
