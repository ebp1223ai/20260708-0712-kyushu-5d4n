import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        kyushu: {
          navy: '#10233f',
          sky: '#eaf6ff',
          gold: '#f6c453',
        },
      },
    },
  },
  plugins: [],
};

export default config;
