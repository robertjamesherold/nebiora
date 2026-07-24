import Components from '@components';

import Ui from '@/ui';

import { AboutData } from '.';

const About = () => {
  return (
    <section id="studio" className="px-6 py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-4 h-full justify-center">
          <Components.SectionHeading
            category={AboutData.category}
            heading={[AboutData.heading[0], AboutData.heading[1]]}
            description={AboutData.description}
          />

          <Ui.Buttons
            container="link"
            to={AboutData.buttonLink}
            label={AboutData.buttonText}
            variant="primary"
            size="small"
            className="mt-4 w-fit"
          />
        </div>

        <div className="grid grid-cols-1 grid-rows-3 gap-4">
          {AboutData.cards.map((card, i) => (
            <Components.NumberedFeatureCard
              key={card.title}
              index={i}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
