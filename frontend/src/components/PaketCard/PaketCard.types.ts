import type { ReactNode } from 'react';

type PaketCardProps = {
  name: string;
  tagline: string;
  description: string;
  icon: ReactNode;
  features: string[];
  highlighted?: boolean;
  onRequestOffer: () => void;
};

export type { PaketCardProps };
