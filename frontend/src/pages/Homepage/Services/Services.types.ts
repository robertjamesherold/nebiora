type ServicesProps = {
  category: string;
  heading: string[];
  description: string;
  cards: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
};

export type { ServicesProps };
