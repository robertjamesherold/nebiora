import type { ReactNode } from 'react';

type InputProps = {
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
  label?: ReactNode;
  as?: 'input' | 'textarea' | 'checkbox';
  type?: string;
  rows?: number;
  autoComplete?: string;
  inputMode?: 'text' | 'tel' | 'email' | 'numeric' | 'decimal' | 'search' | 'url' | 'none';
};

export type { InputProps };
