import { Link } from 'react-router-dom';

import type { CardProps } from './Card.types';
import CardVariant from './Card.variants';

const Card = ({
  as = 'div',
  href,
  to,
  glass = false,
  hover = false,
  className = '',
  children,
}: CardProps) => {
  const classes = [
    CardVariant.base,
    glass && CardVariant.glass,
    hover && CardVariant.hover,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (as === 'a') {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );}
    
      if (as === 'Link' && to) {
    return (
     <Link to={to} className={classes}>
        {children}
      </Link>
    );}

  return <div className={classes}>{children}</div>;
};

export default Card;
