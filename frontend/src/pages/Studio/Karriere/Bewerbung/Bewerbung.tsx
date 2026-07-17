import Components from '@components';

import Ui from '@/ui';

import BewerbungData from './Bewerbung.data';

const Bewerbung = () => (
  <section className="px-6 py-20">
    <div className="mx-auto max-w-6xl">
      <Ui.Card className="grid grid-cols-1 gap-0 overflow-hidden lg:grid-cols-2">
        <div className="relative flex flex-col justify-between p-10 sm:p-12">
          <Components.SectionHeading
            category={BewerbungData.category}
            heading={BewerbungData.heading}
            description={BewerbungData.description}
            className="max-w-md"
          />
        </div>
        <div className="p-10 sm:p-12">
          <Components.ContactForm
            contactEmail={BewerbungData.email}
            fields={BewerbungData.fields}
            submitLabel={BewerbungData.buttonText}
            sentHeading={BewerbungData.sentHeading}
            sentMessage={BewerbungData.sentMessage}
            messagePrefix="Bewerbung"
          />
        </div>
      </Ui.Card>
    </div>
  </section>
);

export default Bewerbung;
