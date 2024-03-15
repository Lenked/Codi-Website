module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700: "#ffffff",
          A700_75: "#ffffff75",
          A700_ab: "#ffffffab",
          A700_33: "#ffffff33",
          A700_99: "#ffffff99",
          A700_a2: "#ffffffa2",
        },
        gray: { 600: "#808080", 900: "#191919", "100_b2": "#f2f2f2b2", "900_6c": "#1919196c", "900_87": "#19191987" },
        purple: { 900: "#3c007a" },
        black: { 900: "#101010" },
        white_A700_6c: "#ffffff6c",
      },
      boxShadow: {
        bs: "inset 0px 0px  1px 48px #191919",
        bs1: "inset 0px 0px  1px 1px #ffffff",
        bs2: "inset 0px 0px  1px 1px #191919",
      },
      backgroundImage: {
        gradient: "linear-gradient(71deg, #0a38fd,#db33d5)",
        gradient1: "linear-gradient(to right #00000000,#3c007a)",
        gradient2: "linear-gradient(180deg, #00000000,#3c007a)",
      },
      fontFamily: { plusjakartasans: "Plus Jakarta Sans", ibmplexserif: "IBM Plex Serif" },
      opacity: { 0.3: 0.3, 0.2: 0.2, 0.9: 0.9, 0.8: 0.8 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
