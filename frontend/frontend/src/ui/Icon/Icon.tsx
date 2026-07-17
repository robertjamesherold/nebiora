import type { IconProps } from './Icon.types';

const Icon = ({
  children,
  viewBox = '0 0 24 24',
  strokeWidth = 1.8,
  className = 'size-5',
}: IconProps) => (
  <svg
    viewBox={viewBox}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

export default Icon;
