import React, { useState, useEffect } from 'react';

export default ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
  }, [getItems]);

  return (
    <ul>
      {items.map((el) => (
        <li key={el}>{el}</li>
      ))}
    </ul>
  );
};
