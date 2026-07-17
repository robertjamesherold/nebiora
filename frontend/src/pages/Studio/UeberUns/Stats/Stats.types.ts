type Stat = {
  label: string;
  value: string;
};

type StatsProps = {
  category: string;
  heading: string | [string, string];
  description?: string;
  stats: Stat[];
};

export type { Stat, StatsProps };
