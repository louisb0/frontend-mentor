# password-generator
![site preview](https://media.giphy.com/media/YdFMB5rV5YvYkofQWg/giphy.gif)<br>
Site can be viewed [here](https://enchanting-sunshine-da25f7.netlify.app/).

## About
Challenge comes with a Figma file with desktop and mobile designs. I implemented these into a responsive site, which may be tested [here](https://enchanting-sunshine-da25f7.netlify.app/).

![Figma design](https://i.imgur.com/FRA57rO.png)
For this project I felt as though the use of ``useEffect`` created a far better experience than having to press generate. So, I ommitted it from my implementation.

Built with React + Vite and styled-components. [Original challenge.](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh) 


## Learnings + difficulties
- [Slider styling](https://github.com/gLevaa/frontend-mentor/blob/main/password-generator/src/components/LengthSlider/LengthSlider.jsx#L43) was the most difficult part of the challenge. There's a large number of pseudo elements with varying vendor prefixes and quirks. I should have added keyboard control which doesn't require element tab focus.
<br><br>
What's particularly interesting is the lack of upper/lower (i.e. before and after the handle) styling. There's ``-ms-fill-(upper/lower)`` for Edge but nothing else. A cool work around is to set a linear gradient from left to right, with a color-stop at the thumbtack positon. This produces the desired result.
- Similarly to [slider styling](https://github.com/gLevaa/frontend-mentor/blob/main/password-generator/src/components/LengthSlider/LengthSlider.jsx#L43), [checkbox styling](https://github.com/gLevaa/frontend-mentor/blob/main/password-generator/src/components/Checkbox/Checkbox.jsx#L34) presented a slight challenge - small quirks. Things like using ``pointer-events: none;`` to prevent the custom icon being clicked, rather than raw input. Or, requiring ``border-radius: 0px;`` for cross-browser and OS resets.
- I'd like to have followed better practices in terms of isolating components. For example, the ``<Checkboxes />`` component contains ``margin-top: 32px;`` in it's local styling. This largely reduces usability. In the future, I'll aim to compose these base components with styled-components to add styles specific to the use case, not the component.
- While a small detail, I really liked the elipsis ``text-overflow`` effect. It's a small detail but it looks very clean in my opinion. ![password text overflow effect](https://media.giphy.com/media/zG9UoTGxWJbZUOYmRj/giphy.gif)