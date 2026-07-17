import type { BadgeProps } from './Badge.types';
import BadgeVariants from './Badge.variants';

const Badge = ({ style, label, dot = true, className = '' }: BadgeProps) => (
  <span
    className={`${BadgeVariants.base} ${style ? BadgeVariants.style[style] : BadgeVariants.style.secondary} ${className}`}
  >
    {dot && <span className="size-1.5 rounded-full bg-aurora-300" />}
    {label}
  </span>
);

export default Badge;
