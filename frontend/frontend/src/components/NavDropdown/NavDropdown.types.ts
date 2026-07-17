type NavDropdownItem = {
  to: string;
  label: string;
};

type NavDropdownVariant = 'desktop' | 'mobile';

type NavDropdownProps = {
  label: string;
  items: NavDropdownItem[];
  variant?: NavDropdownVariant;
  onLinkClick?: () => void;
  className?: string;
};

export type { NavDropdownItem, NavDropdownProps, NavDropdownVariant };
