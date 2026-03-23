import { span } from 'motion/react-client';
import { useAppDispatch, useAppSelector } from './services/store/hooks';
import { increment } from './services/store/slices/counter';
import { getPokemons } from './services/store/slices/pokemons/thunk';

export const RepasoApp = () => {
  /* const [counter, setCounter] = useState<number>(0); */

  const dispatch = useAppDispatch(); //Dispara la acción al store

  const handleIncrement = () => dispatch(increment());

  /* const handleIncrementByNumber = () => dispatch(incrementByAmount(5)); */

  /* const handleIncrement = () => setCounter((prevCounter) => prevCounter + 1); */

  const handleSearchPokemon = () => dispatch(getPokemons());

  const { isLoading, pokemon } = useAppSelector((state) => state.pokemon);

  return (
    <div>
      <h2 className='font-medium'>El valor del contador es: {} </h2>

      <div className='flex gap-3 mt-2'>
        <button className='bg-black text-white rounded-sm p-2' onClick={handleIncrement}>
          +1
        </button>

        <button className='bg-black text-white rounded-sm p-2' onClick={handleSearchPokemon}>
          Buscar Pokemón
        </button>
      </div>

      <div>
        {isLoading && <span>Cargando...</span>}

        {pokemon && <pre>{JSON.stringify(pokemon, null, 2)}</pre>}
      </div>
    </div>
  );
};
