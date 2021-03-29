import React, { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ name, label, ...rest }, ref) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input
        ref={ref}
        type="text"
        {...rest}
      />
    </div>

  );
})

export default Input;