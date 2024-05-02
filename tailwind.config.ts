/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    colors: {
      'primary': '#F7F7F7',
      'secondary': '#111111',
      'white': '#ffffff',
      'gray': '#595959',
      'green': '#00584b',
      // 'oldgreen': '#5e6c5b',
      'orange': '#050834',
      // 'oldgreen': '#EB3D00',
    },
    extend: {
      // fontFamily: {
      //   'playfair': ['Playfair Display', 'serif'],
      // },
      fontFamily: {
        'playfair': ['var(--font-playfair)', 'serif'],
      },
      margin: {
        "18": "4.5rem"
      },
      padding: {
        "18": "4.5rem"
      },
    },
  },
};
