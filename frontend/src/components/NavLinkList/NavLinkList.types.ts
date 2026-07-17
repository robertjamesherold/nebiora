type NavLink = {
  href: string;
  label: string;
};

type NavLinkListVariant = 'desktop' | 'mobile';

type NavLinkListProps = {
  links: NavLink[];
  variant?: NavLinkListVariant;
  onLinkClick?: () => void;
};

export type { NavLink, NavLinkListProps, NavLinkListVariant };
