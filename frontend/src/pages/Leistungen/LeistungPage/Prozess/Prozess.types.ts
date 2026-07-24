import type { ProcessStep } from '@components/ProcessTimeline/ProcessTimeline.types';

type ProzessProps = {
  category: string;
  heading: string | [string, string];
  description?: string;
  steps: ProcessStep[];
};

export type { ProzessProps };
