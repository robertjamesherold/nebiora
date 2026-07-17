import { Link } from 'react-router-dom';

import type { ButtonsProps } from './Buttons.types';
import ButtonVariant from './Buttons.variants';

const getClassName = ({
  variant = 'primary',
  size = 'medium',
}: Pick<ButtonsProps, 'variant' | 'size' | 'className'>) =>
  [ButtonVariant.base, ButtonVariant.style[variant], ButtonVariant.size[size]]
    .filter(Boolean)
    .join(' ');

const Buttons = (props: ButtonsProps) => {
  const { label, className = '' } = props;
  const classes = getClassName(props);

  if (props.container === 'anchor') {
    return (
      <a href={props.href} className={` ${classes} ${className}`}>
        {label}
      </a>
    );
  }

  if (props.container === 'link') {
    return (
      <Link to={props.to} className={` ${classes} ${className}`}>
        {label}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      className={` ${classes} ${className}`}
    >
      {label}
    </button>
  );
};

export default Buttons;
