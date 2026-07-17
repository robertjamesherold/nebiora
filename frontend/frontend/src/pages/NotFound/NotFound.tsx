import Components from '@components';

const NotFound = () => (
  <main>
    <Components.PageMeta
      title="Seite nicht gefunden"
      description="Die aufgerufene Seite existiert nicht oder wurde verschoben."
    />
    <Components.PageHero
      eyebrow="404"
      heading="Diese Seite gibt es nicht."
      description="Der Link, dem Sie gefolgt sind, ist entweder veraltet oder die Seite wurde verschoben. Kehren Sie zur Startseite zurück oder entdecken Sie unsere Projekte."
    />
    <Components.CTABlock
      heading="Zurück zu vertrautem Terrain."
      buttons={[
        { label: 'Zur Startseite', variant: 'primary', container: 'link', to: '/' },
        { label: 'Projekte entdecken', variant: 'secondary', container: 'link', to: '/studio/projekte' },
      ]}
    />
  </main>
);

export default NotFound;
