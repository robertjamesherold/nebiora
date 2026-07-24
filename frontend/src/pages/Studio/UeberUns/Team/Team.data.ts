import Robert from '@assets/images/Robert-James-Herold_Portrait.png';

import type { TeamProps } from './Team.types';

const TeamData: TeamProps = {
  category: 'Team',
  heading: 'Die Menschen hinter Nebiora.studio',
  description: 'Vier Spezialist:innen, ein gemeinsamer Anspruch — jedes Projekt so zu betreuen, als wäre es unser eigenes.',
  members: [
    {
      name: 'Robert James Herold',
      role: 'Gründer & Creative Direction',
      photo: Robert,
      bio: 'BA in Mediendesign, spezialisiert UX/UI Design und digitale Strategie. Robert ist der kreative Kopf hinter Nebiora.studio und sorgt dafür, dass jedes Projekt eine klare visuelle Identität erhält.',
    },
  ],
};

export default TeamData;
