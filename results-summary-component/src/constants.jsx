export const COLORS = {
  whites: {
    white: "#FFFFFF",
    red: "#FFF7F7",
    yellow: "#FFFBF4",
    green: "#F2FCF9",
    blue: "#F3F4FD",
  },
  red: "#FF5555",
  yellow: "#FFB21E",
  green: "#00BB8F",
  blue: "#1125D6",
  lightBlue: "#CAC9FF",
  veryLightBlue: "#ECF2FF",
  navy: "#303B59",
  gradientOne:
    "linear-gradient(180deg, #7755FF 0%, #6943FF 0.01%, #2F2CE9 100%)",
  gradientTwo:
    "linear-gradient(180deg, #4D21C9 0%, rgba(37, 33, 201, 0) 100%, rgba(37, 33, 201, 0) 100%)",
};

export const WEIGHTS = {
  medium: 500,
  bold: 700,
  xbold: 800,
};

export const BREAKPOINTS = {
  mobile: 525,
  tablet: 650,
};

export const QUERIES = {
  mobileAndBelow: `(max-width: ${BREAKPOINTS.mobile / 16}rem)`,
  tabletAndBelow: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
};