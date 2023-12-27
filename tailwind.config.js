/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      screens: {
        'mini': '320px',

        'mobile': '360px',

        'tablet': '640px',

        'laptop': '1024px',

        'desktop': '1280px',

      },
      fontFamily: {
        'body': ['Mulish'],
      },
    },
  },
  plugins: [],
}

