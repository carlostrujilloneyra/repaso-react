import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter';
import { pokemonSlice } from './slices/pokemons';

export const store = configureStore({
  reducer: {
    // Empaqueta los reducers (increment, decrement) y el initialState
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
