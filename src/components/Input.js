import React, { memo, useEffect } from 'react';

const Input = memo(({ onChange, value, disabled }) => {
  useEffect(() => console.log('Input render'));

  return (
    <input
      type='text'
      className='input'
      onChange={onChange}
      value={value}
      disabled={disabled}
    />
  );
});

export default Input;
