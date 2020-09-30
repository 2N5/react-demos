import React, { memo, useEffect } from 'react';
import { useApp } from '../App';
import Btn from './Btn';
import Input from './Input';

Btn.displayName = 'Btn';
Input.displayName = 'Input';

const Main = memo(() => {
  const { setColor, setInputValue, inputValue } = useApp();

  useEffect(() => console.log('Main render'));

  return (
    <main>
      <h1>Test with React Context</h1>
      <div className='btn-group'>
        <Btn label='change color' onClick={setColor} />
      </div>
      <br />
      <Input onChange={setInputValue} value={inputValue} />
    </main>
  );
});

export default Main;
