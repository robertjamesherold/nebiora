import { ProjectsData } from '@data';

import type { PortfolioProps } from './Portfolio.type';

const PortfolioData: PortfolioProps = {
  category: 'Projekte',
  heading: 'Auftritte, die im Kopf bleiben.',
  description:
    'Eine Auswahl aktueller Arbeiten aus Branding, Web und \nE-Commerce — für Marken, die sich abheben wollen.',
  projects: ProjectsData.map((project) => ({
    name: project.name,
    category: project.category,
    gradient: project.gradient,
    image: project.image,
    to: `/projekte/${project.slug}`,
  })),
};

export default PortfolioData;
