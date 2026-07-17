import type { TeamProps } from './Team.types';

const TeamData: TeamProps = {
  category: 'Team',
  heading: 'Die Menschen hinter Nebiora.studio',
  description: 'Vier Spezialist:innen, ein gemeinsamer Anspruch — jedes Projekt so zu betreuen, als wäre es unser eigenes.',
  members: [
    {
      name: 'Julia Falk',
      role: 'Gründerin & Creative Direction',
      photo: 'https://picsum.photos/seed/team-julia/600/600',
      bio: 'Verantwortet Design und Markenführung — mit einem Blick für Details, die den Unterschied machen.',
    },
    {
      name: 'Tobias Reinhardt',
      role: 'Lead Developer',
      photo: 'https://picsum.photos/seed/team-tobias/600/600',
      bio: 'Baut schnelle, wartbare Systeme und sorgt dafür, dass aus Entwürfen stabile Produkte werden.',
    },
    {
      name: 'Nora Vogel',
      role: 'UX/UI Design',
      photo: 'https://picsum.photos/seed/team-nora/600/600',
      bio: 'Gestaltet Nutzererlebnisse, die intuitiv wirken, weil sie gründlich durchdacht sind.',
    },
    {
      name: 'Simon Achterberg',
      role: 'Projektmanagement',
      photo: 'https://picsum.photos/seed/team-simon/600/600',
      bio: 'Hält Zeitpläne, Budgets und Kommunikation zusammen — ruhig, verlässlich, transparent.',
    },
  ],
};

export default TeamData;
