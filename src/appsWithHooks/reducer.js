import React, { useContext, createContext, useReducer } from 'react';
import Main from '../components/Main';
import { defaultColor, getRandomColor } from '../utils-variables';

const SET_COLOR = 'SET_COLOR';
const SET_INPUT_VALUE = 'SET_INPUT_VALUE';

const AppContext = createContext();

export const useApp = () => {
  return useContext(AppContext);
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_COLOR:
      return {
        ...state,
        style: {
          ...state.style,
          backgroundColor: action.payload,
        },
        inputValue: action.payload,
      };
    case SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    style: {
      backgroundColor: defaultColor,
    },
    inputValue: '',
  });

  const setColor = () =>
    dispatch({ type: SET_COLOR, payload: getRandomColor() });
  const setInputValue = (e) =>
    dispatch({ type: SET_INPUT_VALUE, payload: e.target.value });

  const value = {
    ...state,
    setColor,
    setInputValue,
  };

  return (
    <AppContext.Provider value={value}>
      <div className='App' style={state.style}>
        <Main />
      </div>
    </AppContext.Provider>
  );
};

export default App;
