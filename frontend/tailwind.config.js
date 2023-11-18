/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#583DA1',
        secondary: '#2A70B8',
        tertiary: '#12131A',
        quaternary: '#FAFAFA',
        quinary: '#FFF',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
