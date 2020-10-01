import React, { memo } from 'react';

const Btn = memo(
  ({
    className,
    label,
    onClick,
    disabled,
    children,
    style,
    type = 'button',
  }) => {
    return (
      <button
        className={className + ' btn'}
        onClick={onClick}
        type={type}
        disabled={disabled}
        style={style}
      >
        {label || children}
      </button>
    );
  },
);

export default Btn;
