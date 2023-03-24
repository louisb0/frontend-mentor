export const COLORS = {
  darks: {
    darkest: "0, 0%, 2%",
    darker: "0, 0%, 12%",
    dark: "0, 0%, 18%",
  },
  grays: {
    darkGray: "0, 0%, 23%",
    gray: "0, 0%, 51%",
    lightGray: "0, 0%, 91%",
    offwhite: "0, 0%, 96%",
    white: "0, 0%, 100%",
  },
  brights: {
    purple: "274, 82%, 60%",
    red: "0, 100%, 66%",
  },
};

export const WEIGHTS = {
  medium: 400,
  bold: 700
};

export const BREAKPOINTS = {
  mobile: 560,
  tablet: 880,
};

export const QUERIES = {
  mobileAndBelow: `(max-width: ${BREAKPOINTS.mobile / 16}rem)`,
  tabletAndBelow: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndBelow: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
};