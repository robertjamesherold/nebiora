import { lazy } from 'react';

const Homepage = lazy(() => import('./Homepage'));
const Angebote = lazy(() => import('./Angebote'));
const Ablauf = lazy(() => import('./Studio/Ablauf'));
const AGB = lazy(() => import('./Legal/AGB'));
const Datenschutz = lazy(() => import('./Legal/Datenschutz'));
const Impressum = lazy(() => import('./Legal/Impressum'));
const Branding = lazy(() => import('./Leistungen/Branding'));
const ECommerce = lazy(() => import('./Leistungen/ECommerce'));
const Entwicklung = lazy(() => import('./Leistungen/Entwicklung'));
const SeoContent = lazy(() => import('./Leistungen/SeoContent'));
const Webdesign = lazy(() => import('./Leistungen/Webdesign'));
const NotFound = lazy(() => import('./NotFound'));
const Kontakt = lazy(() => import('./Studio/Kontakt'));
const UeberUns = lazy(() => import('./Studio/UeberUns'));

const Pages = {
  Angebote,
  Ablauf,
  AGB,
  Branding,
  Datenschutz,
  ECommerce,
  Entwicklung,
  Homepage,
  Impressum,
  Kontakt,
  NotFound,
  SeoContent,
  UeberUns,
  Webdesign,
};

export default Pages;
