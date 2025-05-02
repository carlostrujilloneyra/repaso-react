import { useState } from 'react';

export const App = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <span>Mi contador es: {counter}</span>
    </>
  );
};
