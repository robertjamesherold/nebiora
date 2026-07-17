const NavLinkListVariant = {
  list: {
    desktop: 'hidden items-center gap-8 md:flex',
    mobile: 'flex flex-col gap-8',
  },
  link: {
    desktop: 'text-sm text-ink-200 transition-colors hover:text-star-50',
    mobile: 'flex text-base text-ink-100',
  },
} as const;

export default NavLinkListVariant;
