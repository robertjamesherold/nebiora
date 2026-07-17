type Position = {
  title: string;
  type: string;
  location: string;
};

type OffeneStellenProps = {
  category: string;
  heading: string | [string, string];
  description?: string;
  positions: Position[];
};

export type { OffeneStellenProps, Position };
