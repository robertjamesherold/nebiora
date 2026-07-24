import Components from '@components';

import Hooks from '@/hooks';

import type { ProzessProps } from './Prozess.types';

const Prozess = ({ category, heading, description, steps }: ProzessProps) => {
  const breakpoint = Hooks.useBreakpoint();
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl lg:max-w-6xl">
        <Components.SectionHeading
          category={category}
          heading={heading}
          description={description}
          align="center"
          size="md"
          className="mx-auto max-w-2xl"
        />
        <Components.ProcessTimeline
          orientation={breakpoint === 'lg' || breakpoint === 'xl' || breakpoint === '2xl' ? 'horizontal' : 'vertical'}
          steps={steps}
          className="mt-14 mx-auto max-w-3xl lg:max-w-full"
        />
      </div>
    </section>
  );
};

export default Prozess;
