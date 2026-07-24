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
  ...props
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
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );}
    
      if (as === 'Link' && to) {
    return (
     <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );}

  return <div className={classes} {...props}>
    {children}
  </div>;
};

export default Card;
