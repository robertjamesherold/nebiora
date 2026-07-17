import type { ChangeEvent } from 'react';

import type { InputProps } from './Input.types';
import InputVariant from './Input.variants';

const Input = (props: InputProps) => {
  const {
    value,
    onChange,
    placeholder,
    required = false,
    className = InputVariant.base,
    label,
  } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    onChange?.(e.target.value);

  return (
    <label className="flex flex-col gap-2 text-sm text-ink-300">
      {label}
      {props.as === 'textarea' ? (
        <textarea
          required={required}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          rows={props.rows}
          className={className}
        />
      ) : (
        <input
          required={required}
          type={props.type ?? 'text'}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={className}
        />
      )}
    </label>
  );
};

export default Input;
