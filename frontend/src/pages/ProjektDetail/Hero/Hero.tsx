import Components from '@components';

import type { HeroProps } from './Hero.types';

const Hero = ({ project }: HeroProps) => (
  <Components.PageHero
    breadcrumb={[{ label: 'Projekte', to: '/studio/projekte' }, { label: project.name }]}
    eyebrow={project.category}
    heading={project.name}
    description={project.challenge}
    buttons={[
      {
        label: 'Zur Website-Anfrage',
        variant: 'primary',
        container: 'link',
        to: '/studio/kontakt',
      },
    ]}
    stats={project.results}
  />
);

export default Hero;
