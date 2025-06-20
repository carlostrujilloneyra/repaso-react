import { create } from 'zustand';

interface CounterState {
  counter: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useCounterStore = create<CounterState>((set) => ({
  counter: 0,
  increment: () => set((state) => ({ counter: state.counter + 1 })), // Es como un setState de useState
  decrement: () => set((state) => ({ counter: state.counter - 1 })),
  reset: () => set({ counter: 0 }),
}));
