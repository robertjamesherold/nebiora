import type { ReactNode } from 'react';

type CardProps = {
  as?: 'div' | 'a' | 'Link';
  href?: string;
  to?: string;
  glass?: boolean;
  hover?: boolean;
  className?: string;
  children: ReactNode;
};

export type { CardProps };
