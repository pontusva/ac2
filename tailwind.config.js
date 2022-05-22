module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      'backgroundImage': {
        "start": 'url("./components/assets/astrological-bg.png")',
        "home": 'url("./components/assets/orange.png")',
        "navbar":'url("./components/assets/navbar.png")'
      },
      
      fontFamily: {
        'anton': ['Anton', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
