import Components from '@components';

import { HomepageSections } from '.';

const Homepage = () => {
  return (
    <main>
      <Components.PageMeta
        title="Ihr kompletter Onlineauftritt"
        description="Nebiora ist die Agentur für den kompletten Onlineauftritt: Webdesign, Entwicklung, Branding und SEO aus einer Hand."
      />
      <HomepageSections.Hero />
      <HomepageSections.Services />
      <HomepageSections.Portfolio />
      <HomepageSections.About />
      <HomepageSections.Contact />
    </main>
  );
};

export default Homepage;
