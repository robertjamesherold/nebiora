import type { AboutProps } from './About.types';

const AboutData: AboutProps = {
  category: 'Studio',
  heading: ['Ein kleines Studio mit', 'großem\n Anspruch.'],
  description:
    'Nebiora.studio wurde gegründet, weil Unternehmen für einen professionellen Onlineauftritt zu oft zwischen Agentur, Freelancer und Baukasten hin- und herspringen müssen. Wir bündeln Design, Entwicklung und Strategie in einem Team — damit Ihr Projekt aus einem Guss bleibt, von der ersten Idee bis zum täglichen Betrieb.',
  buttonText: 'Lernen Sie uns kennen',
  buttonLink: '/studio/ueber-uns',

  cards: [
    {
      title: 'Klarheit',
      description: 'Sie wissen immer, woran wir arbeiten.',
    },
    {
      title: 'Tempo',
      description: 'Erste Entwürfe innerhalb von zwei Wochen.',
    },
    {
      title: 'Verantwortung',
      description: 'Wir betreuen, was wir bauen.',
    },
  ],
};

export default AboutData;
