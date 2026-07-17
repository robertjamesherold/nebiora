import type { TextProps } from './Text.types';
import TextVariant, { TextDefaultTag } from './Text.variants';

const Text = ({ as, variant, className = '', children, text }: TextProps) => {
  const Tag = as ?? TextDefaultTag[variant];

  return <Tag className={`${TextVariant[variant]} ${className}`}>{children || text}</Tag>;
};

export default Text;
