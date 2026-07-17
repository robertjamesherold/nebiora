type InputProps = {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
  label?: string;
  as?: 'input' | 'textarea';
  type?: string;
  rows?: number;
};

export type { InputProps };
