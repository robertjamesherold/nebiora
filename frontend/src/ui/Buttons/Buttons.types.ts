import type ButtonVariant from './Buttons.variants';

type ButtonStyleVariant = keyof typeof ButtonVariant.style;
type ButtonSizeVariant = keyof typeof ButtonVariant.size;

type BaseButtonProps = {
  label: string;
  variant?: ButtonStyleVariant;
  size?: ButtonSizeVariant;
  className?: string;
};

type ButtonAsButton = BaseButtonProps & {
  container: 'button';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
};

type ButtonAsAnchor = BaseButtonProps & {
  container: 'anchor';
  href: string;
};

type ButtonAsLink = BaseButtonProps & {
  container: 'link';
  to: string;
};

type ButtonsProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink;

export type { ButtonsProps };
