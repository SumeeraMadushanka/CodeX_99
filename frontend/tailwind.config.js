const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        // 'team-background' : "url(../src/Components/Assets/Background/team-background.jpg)"
      },
      colors: {
        'cyan': colors.cyan,
        'teal': colors.teal
      }
    },
    
  },
  plugins: [],
};
