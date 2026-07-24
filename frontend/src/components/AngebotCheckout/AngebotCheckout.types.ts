type AngebotCheckoutPaket = {
  name: string;
};

type AngebotCheckoutProps = {
  paket: AngebotCheckoutPaket | null;
  onClose: () => void;
};

export type { AngebotCheckoutPaket, AngebotCheckoutProps };
