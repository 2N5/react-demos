import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const count = useRef(0);
  const [value, setValue] = useState('initialState');

  const setCount = (newCount) => {
    count.current = newCount !== undefined ? newCount : count.current + 1;
  };
  const resetCount = () => {
    console.log(count.current);
    count.current > 0 && setCount(0);
    setValue(value + ' ');
    setTimeout(() => {
      setCount(0);
      setValue(value);
    }, 0);
  };

  useEffect(() => {
    setCount();
  });

  return (
    <div className='App'>
      <h1>
        Count of rendres is <i>{count.current}</i>
      </h1>
      <div className=''>
        <input
          type='text'
          class='input'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <br />
        <br />
        <button className='btn' onClick={resetCount}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
