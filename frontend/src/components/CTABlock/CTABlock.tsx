import Ui from '@/ui';

import type { CTABlockProps } from './CTABlock.types';

const CTABlock = ({ heading, description, buttons, className = '' }: CTABlockProps) => (
  <section className="px-6 py-20 sm:py-28">
    <div className="mx-auto max-w-6xl">
      <Ui.Card glass className={`flex flex-col items-center gap-6 p-10 text-center sm:p-14 ${className}`}>
        <Ui.Text as="h2" variant="h2Large" className='whitespace-break-spaces' text={heading} />
        {description && <Ui.Text variant="lead" className="max-w-xl" text={description} />}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          {buttons.map((button, index) => (
            <Ui.Buttons key={index} {...button} />
          ))}
        </div>
      </Ui.Card>
    </div>
  </section>
);

export default CTABlock;
