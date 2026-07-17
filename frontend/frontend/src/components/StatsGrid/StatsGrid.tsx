import type { StatsGridProps } from './StatsGrid.types';

const StatsGrid = ({ stats, className = '' }: StatsGridProps) => (
  <dl className={`grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-16 ${className}`}>
    {stats.map((stat) => (
      <div key={stat.label}>
        <dt className="sr-only">{stat.label}</dt>
        <dd className="font-display text-3xl font-semibold text-star-50">{stat.value}</dd>
        <dd className="mt-1 text-sm text-ink-400">{stat.label}</dd>
      </div>
    ))}
  </dl>
);

export default StatsGrid;
