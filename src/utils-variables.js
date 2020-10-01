export const defaultCoords = { x: 0, y: 0 };
export const defaultColor = '#fff';

export const getRandomColor = () => '#' + Math.random().toString(16).substr(-6);
export const getRandomNum = () => Math.round(Math.random() * 100);
export const compute = (num) => {
  console.time('for');
  for (let i = 0; i < 1000000000; i++) {}
  console.timeEnd('for');
  return num;
};
