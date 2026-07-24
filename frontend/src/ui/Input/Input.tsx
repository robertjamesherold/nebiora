import type { ChangeEvent } from 'react';

import type { InputProps } from './Input.types';
import InputVariant from './Input.variants';

const Input = (props: InputProps) => {
  const {
    value,
    onChange,
    placeholder,
    required = false,
        label,
  } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    onChange?.(e.target.value);

  if (props.as === 'checkbox') {
    return (
      <label className="flex items-start gap-2.5 text-sm text-ink-300">
        <input
          type="checkbox"
          required={required}
          checked={props.checked}
          onChange={(e) => props.onCheckedChange?.(e.target.checked)}
          className="mt-0.5 size-4 shrink-0 rounded-sm border border-ink-600 bg-transparent accent-brand-500"
        />
        <span>{label}</span>
      </label>
    );
  }

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
          className={`${InputVariant.base} ${props.className ?? ''}`}
        />
      ) : (
        <input
          required={required}
          type={props.type ?? 'text'}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={`${InputVariant.base} ${props.className ?? ''}`}
        />
      )}
    </label>
  );
};

export default Input;
