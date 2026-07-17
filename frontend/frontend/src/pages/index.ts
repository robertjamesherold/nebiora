import { lazy } from 'react';

import Homepage from './Homepage';

const Ablauf = lazy(() => import('./Ablauf'));
const AGB = lazy(() => import('./Legal/AGB'));
const Datenschutz = lazy(() => import('./Legal/Datenschutz'));
const Impressum = lazy(() => import('./Legal/Impressum'));
const Branding = lazy(() => import('./Leistungen/Branding'));
const ECommerce = lazy(() => import('./Leistungen/ECommerce'));
const Entwicklung = lazy(() => import('./Leistungen/Entwicklung'));
const SeoContent = lazy(() => import('./Leistungen/SeoContent'));
const Webdesign = lazy(() => import('./Leistungen/Webdesign'));
const NotFound = lazy(() => import('./NotFound'));
const ProjektDetail = lazy(() => import('./ProjektDetail'));
const Karriere = lazy(() => import('./Studio/Karriere'));
const Kontakt = lazy(() => import('./Studio/Kontakt'));
const Projekte = lazy(() => import('./Studio/Projekte'));
const UeberUns = lazy(() => import('./Studio/UeberUns'));

const Pages = {
  Ablauf,
  AGB,
  Branding,
  Datenschutz,
  ECommerce,
  Entwicklung,
  Homepage,
  Impressum,
  Karriere,
  Kontakt,
  NotFound,
  ProjektDetail,
  Projekte,
  SeoContent,
  UeberUns,
  Webdesign,
};

export default Pages;
