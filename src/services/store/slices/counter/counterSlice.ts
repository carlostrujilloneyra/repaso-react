import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  counter: number;
}

const initialState: CounterState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    /*
     * increment: Es el nombre del action que genera algo como:
     * counter/increment (action.type)
     * pero a su vez, es el nombre del reducer que modifica el estado
     */
    increment(state) {
      state.counter += 1;
    },

    decrement(state) {
      state.counter -= 1;
    },

    incrementByAmount(state, action: PayloadAction<number>) {
      state.counter += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
