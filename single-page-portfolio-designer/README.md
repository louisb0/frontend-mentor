# single-page-portfolio-designer
![site preview](https://media.giphy.com/media/ERJpPKxlKUvHHc2tVI/giphy.gif)<br>
Site can be viewed [here](https://clever-fox-0d78ed.netlify.app/).

NOTE: The circular 'about' image may not load on all browsers, due to the ``.webp`` format.

## About
Challenge comes with a Figma file with desktop, tablet and mobile designs. I implemented these into a responsive site, which may be tested [here](https://clever-fox-0d78ed.netlify.app/).

Built with React + Vite and styled-components. [Original challenge.](https://www.frontendmentor.io/challenges/singlepage-design-portfolio-2MMhyhfKVo) 

![Figma design](https://i.imgur.com/sUfrMl2.png)

## Notable features
- A [custom carousel component](https://github.com/gLevaa/frontend-mentor/blob/main/single-page-portfolio-designer/src/components/Carousel/Carousel.jsx).
- Responsive flex grid and cards;

![flex grid resize gif](https://media.giphy.com/media/ClHLIjSfVAEiUfNHsY/giphy.gif)

## Learnings + difficulties
- The available information on carousel accessibility was scarce. It might be better to use some kind of unstyled UI library for these components. It was a super quick path to just functionality in React though.
- The flex grid took longer than I'd like. It required a breakpoint to switch a row to a column when the row wraps. This feels a bit hacky. 
- I'm not certain about my approach to text styling, with a [central file](https://github.com/gLevaa/frontend-mentor/blob/main/single-page-portfolio-designer/src/components/TextTypes/TextTypes.jsx). It works okay, but maintainability issues may present themselves with repeated styled-components compositions.
- Used some nice CSS selectors ([grid](https://github.com/gLevaa/frontend-mentor/blob/main/single-page-portfolio-designer/src/components/Grid/Grid.jsx), [carousel](https://github.com/gLevaa/frontend-mentor/blob/main/single-page-portfolio-designer/src/components/Carousel/Carousel.jsx#L76)) in an effective way.
- Even when setting ``overflow-x: hidden;`` on the body, the absolutely positioned carousel items would still cause a horizontal scrollbar on iOS devices. I used CSS variables for the body padding, inherited by the carousel, to set ``overflow: hidden`` and fix the scrollbar, and then offset the container by the body padding (tablet and below) for visual effect.
- The usage of `direction: rtl;` (but ``ltr`` on children) was an interesting solution to get an overflow left effect, seen below. I'm not sure if this is the best solution, but it beat my first attempt using breakpoints and ``translate: transform(...)``. This section was also good practice with flexbox, understanding how space is distributed and how to force an overflow. ![two column flex container with left overflow on resize](https://media.giphy.com/media/LWO8ti3N4KFywdc8Ta/giphy.gif)