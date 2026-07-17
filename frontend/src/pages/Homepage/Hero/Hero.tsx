import Components from '@components';

import Ui from '@/ui';

import { HeroData } from './';

const Hero = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center px-6 pt-32 pb-20"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <Ui.Badge label={HeroData.badge} className="mb-8" />
        <Ui.Text as="h1" variant="h1" text={HeroData.heading} />
        <Ui.Text variant="lead" className="mt-6 max-w-xl" text={HeroData.description} />
        <div className="mt-10 grid grid-cols-1 items-center gap-4 sm:grid-cols-2 ">
          {HeroData.button.map((button) => (
            <Ui.Buttons
              key={button.text}
              container={button.container}
              href={button.link}
              label={button.text}
              variant={button.variant}
            />
          ))}
        </div>
        <Components.StatsGrid stats={HeroData.STATS} className="mt-20" />
      </div>
    </section>
  );
};

export default Hero;
