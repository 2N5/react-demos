import React, {
  useState,
  useMemo,
  useCallback,
  useContext,
  useEffect,
  createContext,
} from 'react';
import Main from '../components/Main';
import { defaultColor, getRandomColor } from '../utils-variables';

const AppContext = createContext();

export const useApp = () => {
  return useContext(AppContext);
};

const App = () => {
  const [color, setColor] = useState(defaultColor);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => console.log('App render'));

  const style = useMemo(
    () => ({
      backgroundColor: color,
    }),
    [color],
  );

  const value = {
    style,
    inputValue,
    setColor: useCallback(() => setColor(getRandomColor()), []),
    setInputValue: useCallback((e) => setInputValue(e.target.value), []),
  };

  return (
    <AppContext.Provider value={value}>
      <div className='App' style={style}>
        <Main />
      </div>
    </AppContext.Provider>
  );
};

export default App;
