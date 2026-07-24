
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

export const Quotes = ({ size = 'md', ...props }: IconProps) => {
  const { width, height, strokeWidth } = DIMENSIONS[size];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 15 12"
      strokeWidth={strokeWidth}
      stroke="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
   <path
      fill="currentColor"
      d="M1.714 0C1.26 0 .824.14.502.39S0 .98 0 1.334v4c0 .354.18.693.502.943s.758.39 1.212.39c.228 0 .446.07.606.196.161.125.251.295.251.471V8c0 .354-.18.693-.502.943-.321.25-.757.39-1.212.39a1 1 0 0 0-.606.196A.6.6 0 0 0 0 10v1.333c0 .177.09.347.251.472.16.125.379.195.606.195 1.364 0 2.672-.421 3.637-1.172S6 9.061 6 8V1.333C6 .98 5.82.641 5.498.391S4.74 0 4.286 0zM10.714 0c-.454 0-.89.14-1.212.39S9 .98 9 1.334v4c0 .354.18.693.502.943s.758.39 1.212.39c.228 0 .446.07.606.196.161.125.251.295.251.471V8c0 .354-.18.693-.502.943-.321.25-.757.39-1.212.39a1 1 0 0 0-.606.196A.6.6 0 0 0 9 10v1.333c0 .177.09.347.251.472.16.125.379.195.606.195 1.364 0 2.672-.421 3.637-1.172S15 9.061 15 8V1.333c0-.353-.18-.692-.502-.942S13.74 0 13.286 0z"
    />
  </svg>
);}

export default Quotes;