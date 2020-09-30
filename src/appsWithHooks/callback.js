import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Items from '../components/Items';
import { defaultColor, getRandomColor, compute } from '../utils-variables';

const App = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(defaultColor);

  const increaseNum = () => setCount((prev) => prev + 1);
  const decreaseNum = () => setCount((prev) => (prev === 0 ? 0 : prev - 1));
  const changeColor = () => setColor(getRandomColor());

  const styles = useMemo(() => ({ backgroundColor: color }), [color]);
  const computed = useMemo(() => compute(count), [count]);

  const generateItems = useCallback(
    () => new Array(count).fill('').map((el, i) => `Number - ${i + 1}`),
    [count],
  );

  useEffect(() => {
    console.log('color was changed');
  }, [styles]);

  return (
    <div className='App' style={styles}>
      <h1>{computed}</h1>
      <div className='btn-row'>
        <button type='button' onClick={increaseNum} className='btn'>
          +
        </button>
        <button
          type='button'
          onClick={decreaseNum}
          className='btn'
          disabled={count === 0}
        >
          -
        </button>
        <button type='button' onClick={changeColor} className='btn'>
          change color
        </button>
      </div>
      <br />
      <br />
      <Items getItems={generateItems} />
    </div>
  );
};

export default App;
