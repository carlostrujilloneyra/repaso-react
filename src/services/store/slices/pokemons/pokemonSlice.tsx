import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon } from './thunk';

interface PokemonState {
  pokemons: Pokemon[];
  isLoading: boolean;
  page: number;
}

type SetPokemonsPayload = {
  pokemons: Pokemon[];
  page: number;
};

const initialState: PokemonState = {
  pokemons: [],
  isLoading: false,
  page: 0,
};

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    startLoadingPokemons(state) {
      state.isLoading = true;
    },

    setPokemons(state, action: PayloadAction<SetPokemonsPayload>) {
      state.isLoading = false;
      state.pokemons = action.payload.pokemons;
      state.page = action.payload.page;
    },
  },
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
