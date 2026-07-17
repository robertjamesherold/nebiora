type TeamMember = {
  name: string;
  role: string;
  photo: string;
  bio?: string;
};

type TeamProps = {
  category: string;
  heading: string | [string, string];
  description?: string;
  members: TeamMember[];
};

export type { TeamMember, TeamProps };
