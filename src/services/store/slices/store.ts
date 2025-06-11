import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counter';
import { pokemonSlice } from './pokemons';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
