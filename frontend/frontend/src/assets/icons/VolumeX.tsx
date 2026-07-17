import type { SVGProps } from 'react';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: IconSize;
}

const DIMENSIONS: Record<IconSize, { width: number; height: number; strokeWidth: number }> = {
  xs: { width: 16, height: 16, strokeWidth: 1.6 },
  sm: { width: 20, height: 20, strokeWidth: 2 },
  md: { width: 24, height: 24, strokeWidth: 2.5 },
  lg: { width: 32, height: 32, strokeWidth: 3 },
  xl: { width: 40, height: 40, strokeWidth: 3.5 },
  xxl: { width: 48, height: 48, strokeWidth: 4 },
};

export function VolumeX({ size = 'md', strokeWidth, ...props }: IconProps) {
  const dimensions = DIMENSIONS[size];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimensions.width}
      height={dimensions.height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth ?? dimensions.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>
    </svg>
  );
}
