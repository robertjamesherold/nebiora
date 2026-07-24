import type { BeschreibungProps } from './Beschreibung/Beschreibung.types';
import type { CtaProps } from './Cta/Cta.types';
import type { FAQProps } from './FAQ/FAQ.types';
import type { HeroProps } from './Hero/Hero.types';
import type { ProzessProps } from './Prozess/Prozess.types';
import type { TechnologienProps } from './Technologien/Technologien.types';
import type { VorteileProps } from './Vorteile/Vorteile.types';

type LeistungPageData = {
  pageMeta: {
    title: string;
    description: string;
  };
  hero: HeroProps;
  beschreibung: BeschreibungProps;
  vorteile: VorteileProps;
  prozess: ProzessProps;
  technologien: TechnologienProps;
  faq: FAQProps;
  cta: CtaProps;
};

export type { LeistungPageData };
