import { fetchPokemonById } from '@/services/pokemon.service';
import { AppDispatch, RootState } from '../../store';
import { setPokemon, startLoadingPokemons } from './pokemonSlice';

export const getPokemons = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const counter = getState().counter.counter;

    if (counter < 1) return;

    try {
      dispatch(startLoadingPokemons());
      const pokemon = await fetchPokemonById(counter);
      dispatch(setPokemon({ pokemon }));
    } catch (error) {
      console.log(error);
    }
  };
};
