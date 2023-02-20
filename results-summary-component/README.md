# results-summary-component
![site preview](https://media.giphy.com/media/THaouQnaBgocNyW0t2/giphy.gif)<br>
Site can be viewed [here](https://voluble-fairy-9bf787.netlify.app/).


## About
Challenge comes with a Figma file with desktop and mobile designs. I implemented these into a responsive site, which may be tested [here](https://voluble-fairy-9bf787.netlify.app/).

![Figma design](https://i.imgur.com/R2FQ4N0.png)
For this project I felt as though an intermediate state was needed between desktop and mobile designs. This can be seen in the preview at the top of the page - aligning the text and score side by side before stacking them in a column. I also chose to ommit the 'Your Result' heading on smaller screens.

Built with React + Vite and styled-components. [Original challenge.](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh) 


## Learnings + difficulties
- Following on from the previous [password generator project](https://github.com/gLevaa/frontend-mentor/tree/main/password-generator), one issue I had was a poor seperation of use-case styling from base component styling (e.g. margin-top living in a reusable component, not the file using it). I think I dealt with this better, particularly in terms of the [``<CircularScore />`` component](https://github.com/gLevaa/frontend-mentor/blob/results-summary-component/src/components/CircularScore/CircularScore.jsx) and its [usage](https://github.com/gLevaa/frontend-mentor/blob/results-summary-component/src/components/LeftColumn/LeftColumn.jsx#57).
- This project was quite a simple one. I did get more familiar with choosing my breakpoints and implementing designs fluidly. It's becoming more natural and requires less refactoring.
- Better usages of CSS variables (notably, [1: ([a](https://github.com/gLevaa/frontend-mentor/blob/results-summary-component/src/components/CircularScore/CircularScore.jsx), [b](https://github.com/gLevaa/frontend-mentor/blob/results-summary-component/src/components/LeftColumn/LeftColumn.jsx#57))], [[2]](https://github.com/gLevaa/frontend-mentor/blob/results-summary-component/src/components/ScoreCard/ScoreCard.jsx)).