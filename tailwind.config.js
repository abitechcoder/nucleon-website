import colors from "tailwindcss/colors";
/** @type {import('tailwindcss').Config} */
export const prefix = "tw-";
export const content = ["./**/*.{html,js}"];
export const theme = {
  colors: {
    primary: "#173765",
    secondary: "#ffbb38",
    white: colors.white,
    black: colors.black,
    gray: colors.gray,
    slate: colors.slate,
  },
  extend: {},
};
export const plugins = [];
