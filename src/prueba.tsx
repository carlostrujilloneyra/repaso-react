import { useState } from 'react';

export const useCounter = (initialValue: number = 5) => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () => setCounter((prevCounter) => prevCounter + 1);

  return {
    counter,
    handleIncrement,
  };
};
