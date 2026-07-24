import Layout from '@layout';
import Pages from '@pages';
import LoadingScreenPage from '@pages/LoadingScreenPage';
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Layout.ScrollToTop />
      <Layout.Background />
      <Layout.Navbar />
        <Suspense fallback={<LoadingScreenPage />}>
          <Routes>
            <Route path="/" element={<Pages.Homepage />} />

            <Route path="/leistungen/webdesign" element={<Pages.Webdesign />} />
            <Route path="/leistungen/entwicklung" element={<Pages.Entwicklung />} />
            <Route path="/leistungen/branding" element={<Pages.Branding />} />
            <Route path="/leistungen/seo-content" element={<Pages.SeoContent />} />
            <Route path="/leistungen/e-commerce" element={<Pages.ECommerce />} />

            <Route path="/studio/ueber-uns" element={<Pages.UeberUns />} />
            <Route path="/studio/kontakt" element={<Pages.Kontakt />} />
            <Route path="/studio/ablauf" element={<Pages.Ablauf />} />


            <Route path="/impressum" element={<Pages.Impressum />} />
            <Route path="/datenschutz" element={<Pages.Datenschutz />} />
            <Route path="/agb" element={<Pages.AGB />} />

            <Route path="*" element={<Pages.NotFound />} />
          </Routes>
        </Suspense>
      <Layout.Footer />
    </Router>
  );
};

export default App;
