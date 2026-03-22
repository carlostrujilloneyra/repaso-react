import { useEffect, useState } from 'react';

export const RepasoApp = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () => setCounter((prevCounter) => prevCounter + 1);

  return (
    <div>
      <h2 className='font-medium'>El valor del contador es: {counter} </h2>

      <div className='flex gap-3 mt-2'>
        <button className='bg-black text-white rounded-sm p-2' onClick={handleIncrement}>
          +1
        </button>
        <button className='bg-black text-white rounded-sm p-2'>-1</button>
      </div>
    </div>
  );
};
