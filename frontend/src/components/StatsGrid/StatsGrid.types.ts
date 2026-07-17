type Stat = {
  label: string;
  value: string;
};

type StatsGridProps = {
  stats: Stat[];
  className?: string;
};

export type { Stat, StatsGridProps };
