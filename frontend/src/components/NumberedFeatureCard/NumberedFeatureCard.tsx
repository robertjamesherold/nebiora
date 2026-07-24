import Ui from '@/ui';

import type { NumberedFeatureCardProps } from './NumberedFeatureCard.types';

const NumberedFeatureCard = ({ index, title, description }: NumberedFeatureCardProps) => (
  <Ui.Card  glass  className="flex items-start gap-5 md:gap-7 xl:gap-8 p-6 ">
    <Ui.Text variant="indexLabel" className="flex h-full justify-center items-center">0{index + 1}</Ui.Text>
    <div className="flex flex-col h-full justify-center">
      <Ui.Text as="h3" variant="h3" text={title} />
      <Ui.Text variant="body" className="mt-1" text={description} />
    </div>
  </Ui.Card>
);

export default NumberedFeatureCard;
