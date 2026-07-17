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

export function Wifi({ size = 'md', strokeWidth, ...props }: IconProps) {
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
      <path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>
    </svg>
  );
}
