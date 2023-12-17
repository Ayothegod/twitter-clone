/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#fff",
        "primary-text":"",
        secondary:"#000",
        "secondary-text":"#6F7070",
        action:"#1A8CD8",
        "action-disabled":"#8DCCF7"
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1028px',
      "2xl":"1300px"
    },
  },
  plugins: [],
}