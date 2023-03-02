/** @type {import('tailwindcss').Config} */
module.exports = {
  // Kalau mau ngebuat dark mode
  // darkMode : "class",
  // Kalau mau inisiasi custom warna di tailwind
  // theme : {
  //   extend : {
  //     colors : {
  //       contoh : "#FFFFFF"
  //     }
  //   }
  // },
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
