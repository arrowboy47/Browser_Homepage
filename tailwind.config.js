const { addDynamicIconSelectors } = require("@iconify/tailwind");

module.exports = {
  content: ["./app/**/*.{html,js,json}"],
  safelist: [
    "icon-[ri--github-fill]",
    "icon-[ri--spotify-fill]",
    "icon-[simple-icons--homarr]",
    "icon-[ri--mail-fill]",
    "icon-[simple-icons--anthropic]",   
    "icon-[solar--book-bold]",
    "icon-[ph--microsoft-outlook-logo-light]",
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
