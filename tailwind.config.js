module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // new every project
        // but there's always a
        // place for hot pink
        "hot-pink": "#fd2d78",
      },
      fontFamily: {
        // new every project
      },
      rotate: {
        "-180": "-180deg",
        "-90": "-90deg",
        "-45": "-45deg",
        "-10": "-10deg",
        "-9": "-9deg",
        "-8": "-8deg",
        "-7": "-7deg",
        "-6": "-6deg",
        "-5": "-5deg",
        "-4": "-4deg",
        "-3": "-3deg",
        "-2": "-2deg",
        "-1": "-1deg",
        0: "0",
        1: "1deg",
        2: "2deg",
        3: "3deg",
        4: "4deg",
        5: "5deg",
        6: "6deg",
        7: "7deg",
        8: "8deg",
        9: "9deg",
        10: "10deg",
        45: "45deg",
        90: "90deg",
        180: "180deg",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
