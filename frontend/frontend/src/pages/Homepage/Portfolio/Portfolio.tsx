import Components from '@components';

import { PortfolioData } from '.';

const Portfolio = () => {
  return (
    <section id="projekte" className="px-6 py-28">
      <div className="mx-auto max-w-6xl ">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Components.SectionHeading
            category={PortfolioData.category}
            heading={PortfolioData.heading}
            description={PortfolioData.description}
            align="left"
            size="md"
                      className="mx-auto max-w-lg sm:text-center"

          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PortfolioData.projects.map((project) => (
            <Components.ProjectCard
              key={project.name}
              name={project.name}
              category={project.category}
              gradient={project.gradient}
              image={project.image}
              to={project.to}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
