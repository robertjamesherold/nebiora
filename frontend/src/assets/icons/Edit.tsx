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

export function Edit({ size = 'md', strokeWidth, ...props }: IconProps) {
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
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  );
}
