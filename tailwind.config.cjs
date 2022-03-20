module.exports = {
  content: ["./index.html", "./src/**/*.{js,svelte,css}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
