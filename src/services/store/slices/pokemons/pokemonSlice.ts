import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Pokemon {
  name: string;
  height: number;
  weight: number;
  base_experience: number;
}

type SetPokemonsPayload = {
  pokemon: Pokemon;
};

interface InitialState {
  pokemon: Pokemon | null;
  isLoading: boolean;
}

const initialState: InitialState = {
  pokemon: null,
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    startLoadingPokemons(state) {
      state.isLoading = true;
    },

    setPokemon(state, action: PayloadAction<SetPokemonsPayload>) {
      ((state.isLoading = false), (state.pokemon = action.payload.pokemon));
    },
  },
});

export const { startLoadingPokemons, setPokemon } = pokemonSlice.actions;
