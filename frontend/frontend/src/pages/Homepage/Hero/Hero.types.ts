type HeroProps = {
  badge: string;
  heading: string;
  description: string;
  button: {
    text: string;
    link: string;
    variant: 'primary' | 'secondary';
    container: 'anchor';
  }[];
  STATS: {
    value: string;
    label: string;
  }[];
};

export type { HeroProps };
