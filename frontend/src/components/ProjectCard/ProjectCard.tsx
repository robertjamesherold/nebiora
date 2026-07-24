import Ui from '@/ui';

import type { ProjectCardProps } from './ProjectCard.types';

const ProjectCard = ({ name, category,  to = 'kontakt', image }: ProjectCardProps) => (
  <Ui.Card as="Link"  to={to} className="group relative flex overflow-hidden h-72 justify-end items-end" >
    <img src={image} alt={name} className="absolute opacity-60 inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-100" />
    <div className="relative w-full h-fit p-7 group-hover:translate-y-10  transition-all duration-500 ease-in-out">
        <div className={`absolute z-0 inset-0 bg-brand-800/80 transition-opacity  mask-t-from-0  mask-b-from-100 mask-linear-from-75% `  } />
        <Ui.Text variant="eyebrowMuted" text={category} className={`relative z-20 font-bold! text-brand-100} group-hover:opacity-0  overflow-hidden transition-all duration-500 ease-in-out`} />
        <Ui.Text as="h2" variant="h2"  className={`mt-2  z-30 font-bold! relative group-hover:-translate-y-10 transition-all duration-500 ease-in-out text-brand-50  group-hover:text-brand-150`} text={name} />
      </div>
  </Ui.Card>
);

export default ProjectCard;
