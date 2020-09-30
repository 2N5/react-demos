import React, { memo, useEffect } from 'react';

const Btn = memo(({ label, onClick, disabled, children, style }) => {
  useEffect(() => console.log('Btn render'));

  return (
    <button
      className='btn'
      onClick={onClick}
      type='button'
      disabled={disabled}
      style={style}
    >
      {label || children}
    </button>
  );
});

export default Btn;
