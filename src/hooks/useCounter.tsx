import { useState } from 'react';

const [counter, setCounter] = useState<number>(0);

export const useCounter = () => {
  const increment = () => setCounter((c) => c + 1);
  const decrement = () => setCounter((c) => c - 1);

  return {
    counter,
    increment,
    decrement,
  };
};
