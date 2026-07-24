import type { ProcessStep } from '@components/ProcessTimeline/ProcessTimeline.types';

type TimelineProps = {
  category: string;
  heading: string | [string, string];
  description?: string;
  steps: ProcessStep[];
};

export type { TimelineProps };
