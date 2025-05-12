// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{html,ts}",
//   ],
//   theme: {
//     extend: {},

//   },
//   plugins: [],
// }

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: '#501214', // Replace with the actual maroon color code
        gold: '#685435',   // Replace with the actual gold color code
        'gold-dark': '#EAD6BA', // A darker shade of gold for hover states
      },
    },
  },
  plugins: [],
}
