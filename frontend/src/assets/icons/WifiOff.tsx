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

export function WifiOff({ size = 'md', strokeWidth, ...props }: IconProps) {
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
      <line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>
    </svg>
  );
}
