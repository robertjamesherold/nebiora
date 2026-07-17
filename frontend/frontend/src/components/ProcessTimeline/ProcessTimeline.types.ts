import type { ReactNode } from 'react';

type ProcessStep = {
  title: string;
  description: string;
  icon?: ReactNode;
};

type ProcessTimelineProps = {
  steps: ProcessStep[];
  orientation?: 'vertical' | 'horizontal';
  className?: string;
};

export type { ProcessStep, ProcessTimelineProps };
