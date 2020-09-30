import React, { memo, useState } from 'react';
import { getRandomColor } from '../../utils-variables';
import './Grid.css';

const Grid = memo(() => {
  const randomCount = Math.round(Math.random() * 100);
  const [count, setCount] = useState(2);

  return (
    <div className='grid'>
      {new Array(count).fill('').map((el, i) => {
        const color = getRandomColor();
        return (
          <div
            key={i}
            className='grid--item item'
            style={{
              backgroundColor: color,
            }}
          >
            <span className='item--num'>{i}</span>
            {color}
          </div>
        );
      })}
    </div>
  );
});

export default Grid;
