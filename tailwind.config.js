const { addDynamicIconSelectors } = require("@iconify/tailwind");

module.exports = {
  content: ["./app/**/*.{html,js,json}"],
  safelist: [
    "icon-[ri--github-fill]",
    "icon-[ri--music-2-fill]",
    "icon-[simple-icons--homarr]",
    "icon-[ri--mail-fill]",
    "icon-[ri--dashboard-fill]",   
    "icon-[solar--book-bold]",
    "icon-[ri--cup-fill]",
    "icon-[game-icons--triforce]",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      prefix: "ctp",
      defaultFlavour: "mocha",
    }),
    addDynamicIconSelectors(),
  ],
};
