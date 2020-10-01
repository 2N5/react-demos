import React, { memo, useState, useCallback } from 'react';
import Btn from 'components/Btn';
import { getRandomColor, getRandomNum } from 'utils-variables';
import './Grid.css';

const Grid = memo(() => {
  const [count, setCount] = useState(6 || getRandomNum());
  const shuffleGrid = useCallback(() => setCount(getRandomNum()), []);

  return (
    <>
      <div className='btn-row'>
        <Btn onClick={shuffleGrid}>shuffle grid</Btn>
      </div>
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
    </>
  );
});

export default Grid;
