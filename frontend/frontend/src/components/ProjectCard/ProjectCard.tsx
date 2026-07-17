import Ui from '@/ui';

import type { ProjectCardProps } from './ProjectCard.types';

const ProjectCard = ({ name, category,  to = 'kontakt', image }: ProjectCardProps) => (
  <Ui.Card as="Link" to={to} className="group relative flex rounded-sm overflow-hidden ">
    <div className={`relative w-full flex h-72 flex-col justify-end overflow-hidden transition-all duration-500 ease-in-out `}>
      {image && (
        <img src={image} alt={name} className="relative inset-0  h-full w-full object-cover group-hover:scale-105    group-hover:-translate-y-6 transition-all duration-500 ease-in-out" />
      )}
      <div className="absolute inset-0 bg-linear-to-t from-brand-950/90 to-transparent transition-opacity group-hover:opacity-0 duration-500 ease-in-out" />

      <div className="absolute inset-x-0 bottom-0   flex-col gap-2 w-full  h-fit to-transparent p-7 overflow-hidden  group-hover:translate-y-10  transition-all duration-500 ease-in-out">
        <div className={`absolute z-0 inset-0 bg-brand-800/60 transition-opacity backdrop-blur-2xl mask-t-from-0  mask-b-from-100 mask-linear-from-75% `  } />
        <Ui.Text variant="eyebrowMuted" text={category} className={`relative z-20 font-bold! text-brand-100} group-hover:opacity-0  overflow-hidden transition-all duration-500 ease-in-out`} />
        <Ui.Text as="h2" variant="h2"  className={`mt-2  z-30 font-bold! relative group-hover:-translate-y-10 transition-all duration-500 ease-in-out text-brand-50  group-hover:text-brand-150`} text={name} />
      </div>
    </div>
  </Ui.Card>
);

export default ProjectCard;
