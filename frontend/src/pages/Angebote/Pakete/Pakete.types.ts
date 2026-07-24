import type { ReactNode } from 'react';

type PaketeProps = {
  category: string;
  heading: string | [string, string];
  description?: string;
  packages: {
    name: string;
    tagline: string;
    description: string;
    icon: ReactNode;
    features: string[];
    highlighted?: boolean;
  }[];
};

export type { PaketeProps };
