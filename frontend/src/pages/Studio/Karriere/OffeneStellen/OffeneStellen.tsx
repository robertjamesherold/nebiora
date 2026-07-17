import Components from '@components';

import Ui from '@/ui';

import OffeneStellenData from './OffeneStellen.data';

const OffeneStellen = () => (
  <section className="px-6 py-20 sm:py-28">
    <div className="mx-auto max-w-6xl">
      <Components.SectionHeading
        category={OffeneStellenData.category}
        heading={OffeneStellenData.heading}
        description={OffeneStellenData.description}
      />

      <div className="mt-14 flex flex-col gap-4">
        {OffeneStellenData.positions.length === 0 && (
          <Ui.Text variant="bodyMuted">
            Aktuell keine offenen Stellen — initiativ bewerben ist jederzeit möglich.
          </Ui.Text>
        )}

        {OffeneStellenData.positions.map((position) => (
          <Ui.Card key={position.title} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <Ui.Text as="h3" variant="h3" text={position.title} />
            <div className="flex gap-4 text-sm text-ink-400">
              <span>{position.type}</span>
              <span>{position.location}</span>
            </div>
          </Ui.Card>
        ))}
      </div>
    </div>
  </section>
);

export default OffeneStellen;
