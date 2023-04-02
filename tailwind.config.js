/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000080",
      },
      fontFamily: {
        W95FA: ["W95FA", "sans-serif"],
        times: ["times", "sans-serif"],
      },
      backgroundImage: {
        divider: "url('/src/assets/Divider.png')",
        dividerHr: "url('/src/assets/DividerHr.png')",
        loadingScreen: "url('/src/assets/finalLoadingScreen.gif')",
        loadingScreenSM: "url('/src/assets/finalLoadingScreenSM.gif')",
      },
    },
    backgroundSize: {
      stretch: "100% 100%",
      cover: "cover",
    },
  },
  plugins: [],
};
