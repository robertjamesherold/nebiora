type PortfolioProps = {
  category: string;
  heading: string;
  description: string;
  projects: {
    name: string;
    category: string;
    gradient: string;
    image?: string;
    to?: string;
  }[];
};

export type { PortfolioProps };
