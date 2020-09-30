import React, { useState, useEffect, useMemo } from 'react';
import { defaultColor, getRandomColor, compute } from '../utils-variables';

const App = () => {
  const [num, setNum] = useState(0);
  const [color, setColor] = useState(defaultColor);

  const increaseNum = () => setNum((prev) => prev + 1);
  const decreaseNum = () => setNum((prev) => prev - 1);
  const changeColor = () => setColor(getRandomColor());

  const styles = useMemo(() => ({ backgroundColor: color }), [color]);
  const computed = useMemo(() => compute(num), [num]);

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
        <button type='button' onClick={decreaseNum} className='btn'>
          -
        </button>
        <button type='button' onClick={changeColor} className='btn'>
          change color
        </button>
      </div>
    </div>
  );
};

export default App;
