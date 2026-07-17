import type { ReactNode } from 'react';

type Benefit = {
  title: string;
  description: string;
  icon: ReactNode;
};

type WarumNebioraProps = {
  category: string;
  heading: string | [string, string];
  description?: string;
  benefits: Benefit[];
};

export type { Benefit, WarumNebioraProps };
