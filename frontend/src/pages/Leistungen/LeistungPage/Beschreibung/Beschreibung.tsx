import Components from '@components';

import Hooks from '@/hooks';
import Ui from '@/ui';

import type { BeschreibungProps } from './Beschreibung.types';

const Beschreibung = ({ category, heading, paragraphs }: BeschreibungProps) => {
  const breakpoint = Hooks.useBreakpoint();
  return (
    <section className="px-6 py-20">
      {breakpoint === 'md' || breakpoint === 'lg' || breakpoint === 'xl' || breakpoint === '2xl' ? (
        <Ui.Card className="glass-panel mx-auto max-w-4xl p-10 sm:p-12">
          <Components.SectionHeading category={category} heading={heading} align="left" size="lg" />
          <div className="mx-auto mt-14 max-w-full space-y-4 text-left">
            {paragraphs.map((paragraph, index) => (
              <Ui.Text key={index} variant="body" className="w-full  md:text-pretty!" text={paragraph} />
            ))}
          </div>
        </Ui.Card>
      ) : (
        <>
          <Components.SectionHeading category={category} heading={heading} align="left" size="lg" />
          <div className="mx-auto mt-14 max-w-3xl space-y-4 text-left">
            {paragraphs.map((paragraph, index) => (
              <Ui.Text key={index} variant="body" text={paragraph} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Beschreibung;
