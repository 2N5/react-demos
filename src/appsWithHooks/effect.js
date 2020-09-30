import React, { useState, useEffect } from 'react';
import { defaultCoords } from '../utils-variables';

const App = () => {
  const [recourse, setRecourse] = useState('users');
  const [data, setData] = useState(null);
  const [coords, setCoords] = useState(defaultCoords);
  const changeRecourse = (recourse) => setRecourse(recourse);
  const getCoords = (e) => setCoords({ x: e.clientX, y: e.clientY });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${recourse}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [recourse]);

  useEffect(() => {
    window.addEventListener('mousemove', getCoords);
    console.log('addEventListener');
    return () => {
      console.log('removeEventListener');
      window.removeEventListener('mousemove', getCoords);
    };
  }, []);

  return (
    <div className='App'>
      <h1>
        Your recourse is <i>{recourse}</i>
      </h1>
      <div className='btn-row'>
        <button
          type='button'
          onClick={() => changeRecourse('users')}
          className='btn'
        >
          users
        </button>
        <button
          type='button'
          onClick={() => changeRecourse('todos')}
          className='btn'
        >
          todos
        </button>
        <button
          type='button'
          onClick={() => changeRecourse('albums')}
          className='btn'
        >
          albums
        </button>
      </div>
      <br />
      <pre>{JSON.stringify(coords, null, 2)}</pre>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;
