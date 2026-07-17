import { Link } from 'react-router-dom';

import Ui from '@/ui';

import type { FooterColumnProps } from './FooterColumn.types';

const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div>
    <Ui.Text as="h4" variant="h4">
      {title}
    </Ui.Text>
    <ul className="mt-4 space-y-2.5">
      {links.map((link) => (
        <li key={link.to}>
          <Link to={link.to} className="text-sm text-ink-400 transition-colors hover:text-ink-100">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterColumn;
