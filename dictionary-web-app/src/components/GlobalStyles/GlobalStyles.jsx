import { createGlobalStyle } from "styled-components";
import { COLORS } from "../../constants";

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
  font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;
}

#root {
  /*
    Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will
    float above the app.
  */
  isolation: isolate;
}

html, body, #root {
  height: 100%;
}

:root {
  /* General colours */
  --color-gray-900: ${COLORS.darks.darkest};
  --color-gray-700: ${COLORS.darks.darker};
  --color-gray-600: ${COLORS.darks.dark};
  --color-gray-500: ${COLORS.grays.darkGray};
  --color-gray-400: ${COLORS.grays.gray};
  --color-gray-300: ${COLORS.grays.lightGray};
  --color-gray-200: ${COLORS.grays.offwhite};
  --color-white: ${COLORS.grays.white};
  --color-purple: ${COLORS.brights.pruple};
  --color-red: ${COLORS.brights.red};

  /* Static colours */
  --color-text-secondary: ${COLORS.grays.gray};
  --color-accent: ${COLORS.brights.purple};

  /* Light theme specific colours */
  --color-bg: ${COLORS.grays.white};
  --color-bg-secondary: ${COLORS.grays.offwhite};
  --color-text: ${COLORS.darks.dark};
  --color-lines: ${COLORS.grays.lightGray};
  --shadow: 0px 4px 30px 6px hsla(var(--color-gray-900), 0.1);

}


html[data-theme="dark"] {
  /* Dark theme specific colours */
  --color-bg: ${COLORS.darks.darkest};
  --color-bg-secondary: ${COLORS.darks.darker};
  --color-text: ${COLORS.grays.white}; 
  --color-lines: ${COLORS.grays.darkGray};
  --shadow: 0px 4px 30px 6px hsla(var(--color-accent), 0.5);
}

body {
  background-color: hsl(var(--color-bg));
}
`;

export default GlobalStyles;
