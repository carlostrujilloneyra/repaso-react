import { useAppDispatch, useAppSelector } from '../services/store/hooks';
import { decrement, increment, incrementByAmount, reset } from '../services/store/slices/counter';
import { getPokemons } from '../services/store/slices/pokemons';

export const HomePage = () => {
  const { counter } = useAppSelector((state) => state.counter);
  const { pokemons, page } = useAppSelector((state) => state.pokemons);

  const dispatch = useAppDispatch();

  const handleIncrement = () => dispatch(increment());
  const handleIncrementByAmount = (amount: number) => dispatch(incrementByAmount(amount));
  const handleReset = () => dispatch(reset());
  const handleDecrement = () => dispatch(decrement());

  const handleGetPokemons = (page: number) => dispatch(getPokemons(page));

  return (
    <>
      <div className='container-counter'>
        <span>Contador: {counter} </span>

        <div>
          <button onClick={handleIncrement}>+1</button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={() => handleIncrementByAmount(5)}>+5</button>
          <button onClick={handleDecrement}>-1</button>
        </div>

        <div>
          <button onClick={() => handleGetPokemons(page)}>Obtener Pokemones</button>
        </div>
      </div>

      <div>{JSON.stringify(pokemons, null, 2)}</div>
    </>
  );
};
