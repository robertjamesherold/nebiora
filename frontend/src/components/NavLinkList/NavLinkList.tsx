import type { NavLinkListProps } from './NavLinkList.types';
import NavLinkListVariant from './NavLinkList.variants';

const NavLinkList = ({ links, variant = 'desktop', onLinkClick }: NavLinkListProps) => (
  <ul className={NavLinkListVariant.list[variant]}>
    {links.map((link) => (
      <li key={link.href}>
        <a href={link.href} onClick={onLinkClick} className={NavLinkListVariant.link[variant]}>
          {link.label}
        </a>
      </li>
    ))}
  </ul>
);

export default NavLinkList;
