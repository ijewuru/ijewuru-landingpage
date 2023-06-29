module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        "mont": ["Montserrat", "sans-serif"],
        "pop": ["Poppins", "sans-serif"],
        "rob": ['Roboto', "sans-serif"]
      },
      spacing: {
        "30": "30px",
        "40": "40px",
        "44px": "44px",
        '70': "70px",
        "100": "100px",
        "104": "104px",
      },
      colors: {
        pc: "#FA4A0C",
        hr: "background: rgba(228, 228, 228, 1)",
        darkBlue: "#252B42"
      }
    },
  },
  plugins: [],
}

