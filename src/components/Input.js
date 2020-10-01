import React, { memo, useEffect } from 'react';

const Input = memo(
  ({ className, onChange, value, disabled, type = 'text' }) => {
    useEffect(() => console.log('Input render'));

    return (
      <input
        type={type}
        className={className + ' input'}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
    );
  },
);

export default Input;
