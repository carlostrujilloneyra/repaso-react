import { useNavigate } from 'react-router-dom';
import { useCounterStore } from '../store/useCounterStore';
import { useEffect, useState } from 'react';

export const AboutPage = () => {
  const navigate = useNavigate();

  const { counter, decrement, increment } = useCounterStore();

  const handleIncrement = () => increment();
  const handleDecrement = () => decrement();

  const [nombres, setNombres] = useState<string[]>([]);

  const [query, setQuery] = useState('');

  const volverAAsignarArrayVacio = () => {
    setNombres([]); // Nuevo array vacío → nueva referencia
  };

  const mantenerMismaReferencia = () => {
    setNombres((prev) => prev); // Misma referencia → no se ejecuta useEffect
  };

  const agregarNombre = () => {
    setNombres((prev) => [...prev, 'Carlos']);
  };

  /* const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(100);
    }, 2000);
  });

  myPromise.then((myMoney) => {
    console.log(`Tengo mi dinero ${myMoney}`);
  }); */

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setQuery(query);
    }, 700);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [query]);

  useEffect(() => {
    console.log('🌀 useEffect ejecutado porque "nombres" cambió');
  }, [nombres]);

  return (
    <>
      <span>Esta es la página de About</span>
      <h2 className='bg-red-500 text-white font-extrabold p-4 mt-4'>AUA</h2>

      <button onClick={() => navigate(-1)}>ATRÁS</button>

      <div className='zustand-test'>
        <h3>Usando Zustand</h3>
        <p>El contador es: {counter}</p>

        <div>
          <button onClick={handleIncrement}>Incrementar</button>
          <button onClick={handleDecrement}>Decrementar</button>
          <button onClick={volverAAsignarArrayVacio}>Asignar nuevo []</button>
          <button onClick={mantenerMismaReferencia}>Reasignar misma referencia</button>
          <button onClick={agregarNombre}>Agregar 'Carlos'</button>
        </div>
      </div>
    </>
  );
};
