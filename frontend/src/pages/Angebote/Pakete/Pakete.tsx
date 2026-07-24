import Components from '@components';
import type { AngebotCheckoutPaket } from '@components/AngebotCheckout/AngebotCheckout.types';
import { useState } from 'react';

import PaketeData from './Pakete.data';

const Pakete = () => {
  const [selectedPaket, setSelectedPaket] = useState<AngebotCheckoutPaket | null>(null);

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Components.SectionHeading
          category={PaketeData.category}
          heading={PaketeData.heading}
          description={PaketeData.description}
          align="center"
          size="md"
          className="mx-auto max-w-2xl"
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PaketeData.packages.map((pkg) => (
            <Components.PaketCard key={pkg.name} {...pkg} onRequestOffer={() => setSelectedPaket({ name: pkg.name })} />
          ))}
        </div>
      </div>

      <Components.AngebotCheckout paket={selectedPaket} onClose={() => setSelectedPaket(null)} />
    </section>
  );
};

export default Pakete;
