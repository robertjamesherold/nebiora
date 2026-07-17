import Components from '@components';

import Ui from '@/ui';

import ContactSectionData from './ContactSection.data';

const ContactSection = () => (
  <section className="px-6 py-20 sm:py-28">
    <div className="mx-auto max-w-6xl">
      <Ui.Card className="grid grid-cols-1 gap-0 overflow-hidden lg:grid-cols-2">
        <div className="relative flex flex-col justify-between p-10 sm:p-12">
          <Components.SectionHeading
            category={ContactSectionData.category}
            heading={ContactSectionData.heading}
            description={ContactSectionData.description}
            className="max-w-md"
          />

          <dl className="mt-10 space-y-3 text-sm">
            <div>
              <dt className="text-ink-400">E-Mail</dt>
              <dd className="text-star-50">{ContactSectionData.email}</dd>
            </div>
            <div>
              <dt className="text-ink-400">Standort</dt>
              <dd className="text-star-50">Remote-first · DACH</dd>
            </div>
          </dl>
        </div>

        <div className="p-10 sm:p-12">
          <Components.ContactForm
            contactEmail={ContactSectionData.email}
            fields={ContactSectionData.fields}
            submitLabel={ContactSectionData.buttonText}
            sentHeading={ContactSectionData.sentHeading}
            sentMessage={ContactSectionData.sentMessage}
          />
        </div>
      </Ui.Card>
    </div>
  </section>
);

export default ContactSection;
