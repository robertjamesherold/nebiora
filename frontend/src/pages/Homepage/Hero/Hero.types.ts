type HeroProps = {
  badge: string;
  heading: string;
  description: string;
  button: {
    text: string;
    link: string;
    variant: 'primary' | 'secondary';
    container: 'link';
  }[];

};

export type { HeroProps };
