import type { Stat } from '@components/StatsGrid/StatsGrid.types';

import type { ButtonsProps } from '@/ui/Buttons/Buttons.types';

type PageHeroBreadcrumbItem = {
  label: string;
  to?: string; // omit `to` on the current/last item
};

type PageHeroProps = {
  breadcrumb?: PageHeroBreadcrumbItem[];
  eyebrow: string;
  heading?: string | [string, string];
  logo?: React.ReactNode;
  description: string;
  buttons?: ButtonsProps[];
  stats?: Stat[];
  className?: string;
};

export type { PageHeroBreadcrumbItem, PageHeroProps };
