import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html', // no olvides añadir tu HTML principal
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
