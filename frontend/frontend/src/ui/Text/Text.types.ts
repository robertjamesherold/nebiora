import type { ReactNode } from 'react';

import type TextVariant from './Text.variants';

type TextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
type TextVariantName = keyof typeof TextVariant;

type TextProps = {
  as?: TextTag;
  variant: TextVariantName;
  className?: string;
  children?: ReactNode;
  text?: string;
};

export type { TextProps, TextTag, TextVariantName };
