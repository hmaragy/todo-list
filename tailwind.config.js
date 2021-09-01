module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        DEFAULT: "#B5EAEA",
      },
      secondary: {
        DEFAULT: "#EDF6E5",
      },
      accent: {
        DEFAULT: "#FFBCBC",
        dark: "#F38BA0",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
    },
  },
  variants: {
    extend: {
      translate: ["active"],
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
