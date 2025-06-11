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
    increment(state) {
      state.counter += 1;
    },

    reset(state) {
      state.counter = 0;
    },

    incrementByAmount(state, action: PayloadAction<number>) {
      state.counter += action.payload;
    },

    decrement(state) {
      state.counter -= 1;
    },
  },
});

export const { increment, incrementByAmount, decrement, reset } = counterSlice.actions;
