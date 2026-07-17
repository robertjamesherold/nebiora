import type { ReactNode } from 'react';

type VorteileProps = {
  category: string;
  heading: string | [string, string];
  description?: string;
  benefits: {
    title: string;
    description: string;
    icon: ReactNode;
  }[];
};

export type { VorteileProps };
