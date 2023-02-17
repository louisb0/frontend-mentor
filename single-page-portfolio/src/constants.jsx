export const WEIGHTS = {
  medium: 500,
  bold: 700,
};

export const COLORS = {
  purple: "hsl(252deg 66% 62%)",
  yellow: "hsl(28deg 89% 67%)",
  pink: "hsl(0deg 78% 79%)",
  lightRed: "hsl(7deg 77% 66%)",
  cyan: "hsl(172deg 46% 57%)",
  darkPurple: "hsl(314deg 45% 23%)",
  black: "hsl(0deg 0% 1%)",
  gray: "hsl(30deg 5% 45%)",
  white: "hsl(28deg 100% 97%)",
};

export const BREAKPOINTS = {
  mobile: 650,
  tablet: 960,
  laptop: undefined,
};

export const QUERIES = {
  mobileAndBelow: `(max-width: ${BREAKPOINTS.mobile / 16}rem)`,
  tabletAndBelow: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndBelow: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
};
