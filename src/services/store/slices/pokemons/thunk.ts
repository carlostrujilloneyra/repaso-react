import axios from 'axios';
import { AppDispatch } from '../store';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';

export type Pokemon = {
  name: string;
  url: string;
};

interface PokemonResponse {
  count: number;
  next: string;
  previous: null;
  results: Pokemon[];
}

export const getPokemons = (page: number = 0) => {
  return async (dispatch: AppDispatch) => {
    dispatch(startLoadingPokemons());

    const { data } = await axios.get<PokemonResponse>(
      `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    );

    dispatch(
      setPokemons({
        page: page + 1,
        pokemons: data.results,
      })
    );
  };
};
