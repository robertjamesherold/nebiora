import type { ReactNode } from 'react';

type InputProps = {
  value?: string;
  onChange?: (value: string) => void;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
  label?: ReactNode;
  as?: 'input' | 'textarea' | 'checkbox';
  type?: string;
  rows?: number;
};

export type { InputProps };
