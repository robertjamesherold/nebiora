import Layout from '@layout';
import Pages from '@pages';
import { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Zum Inhalt springen
      </a>
      <Layout.Background />
      <Layout.Navbar />
      <main id="main-content" tabIndex={-1}>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Pages.Homepage />} />

            <Route path="/leistungen/webdesign" element={<Pages.Webdesign />} />
            <Route path="/leistungen/entwicklung" element={<Pages.Entwicklung />} />
            <Route path="/leistungen/branding" element={<Pages.Branding />} />
            <Route path="/leistungen/seo-content" element={<Pages.SeoContent />} />
            <Route path="/leistungen/e-commerce" element={<Pages.ECommerce />} />

            <Route path="/studio/ueber-uns" element={<Pages.UeberUns />} />
            <Route path="/studio/projekte" element={<Pages.Projekte />} />
            <Route path="/studio/karriere" element={<Pages.Karriere />} />
            <Route path="/studio/kontakt" element={<Pages.Kontakt />} />

            <Route path="/projekte/:slug" element={<Pages.ProjektDetail />} />
            <Route path="/ablauf" element={<Pages.Ablauf />} />

            <Route path="/impressum" element={<Pages.Impressum />} />
            <Route path="/datenschutz" element={<Pages.Datenschutz />} />
            <Route path="/agb" element={<Pages.AGB />} />

            <Route path="*" element={<Pages.NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Layout.Footer />
    </Router>
  );
};

export default App;
