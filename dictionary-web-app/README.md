# results-summary-component
![site preview](https://media.giphy.com/media/3VG0Bce8Y6cIqh3gUG/giphy.gif)<br>
Site can be viewed [here](https://shiny-dodol-0792de.netlify.app/).

## About
Challenge comes with a Figma file with desktop and mobile designs. I implemented these into a responsive site, which may be tested [here](https://shiny-dodol-0792de.netlify.app/).

![Figma design](https://i.imgur.com/PUCIXiX.png)

Built with React + Vite and styled-components. [Original challenge.](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL) 


## Learnings + difficulties
- **Seperation of concerns:** This project was a little more complex than the others, at the time of writing this. After building it once, I took on the task of restarting from scratch. This allowed me to better seperate my logic and styling. A nice pattern I picked up along the way can be found in [DictionaryApp.jsx](https://github.com/gLevaa/frontend-mentor/blob/main/dictionary-web-app/src/components/DictionaryApp/DictionaryApp.jsx). I made use of a ``...delegated`` prop (not just here, but in most components), which passed on the styled-components styling to the respective components. This meant that I can apply all responsive styles in the correct place.
- **Hooks & APIs**: At the time of writing this, I had only made use of hooks and API calls in an experimental environment - i.e. using online resources. This project put them together nicely into a working product. A really nice example of using hooks can be found in [ThemeSwitch.jsx](https://github.com/gLevaa/frontend-mentor/blob/main/dictionary-web-app/src/components/ThemeSwitch/ThemeSwitch.jsx). The API calls and respective state management can be found in [SearchBar.jsx](https://github.com/gLevaa/frontend-mentor/blob/main/dictionary-web-app/src/components/SearchBar/SearchBar.jsx), and [DictionaryApp.jsx](https://github.com/gLevaa/frontend-mentor/blob/main/dictionary-web-app/src/components/DictionaryApp/DictionaryApp.jsx), with some basic patterns for passing state around.
- **CSS Darkmode/Theming**: Again, I'm quite a fan of my [ThemeSwitch.jsx](https://github.com/gLevaa/frontend-mentor/blob/main/dictionary-web-app/src/components/ThemeSwitch/ThemeSwitch.jsx) implementation. It first checks for an existing preference in local storage, then falls back to the ``prefers-color-scheme`` CSS query. After determining the current mode, it sets a data attribute on the document root, which allows for me to set conditional CSS variables. I can use these variables seamlessly and things function well.
  - I haven't given it much thought yet, but I've heard context could be good for this kind of thing. After this project, I'm going to work on my component API design which will include learning about context. Will be included in the next project which I'm really looking forward to.
- **Accessibility**: While this is lower down on the list, it's only because it follows on well from the previous points. Accessibility was a primary focus of this project. 
  - *Radix UI Primitives*: I used the Radix UI library to implement an accessible dropdown component for font selection, in [FontDropdown.jsx](https://github.com/gLevaa/frontend-mentor/blob/main/dictionary-web-app/src/components/Header/FontDropdown.jsx). A lesson learnt by Josh W Comeau - there's no need to reinvent these battle tested components. It works better than what I could build and is designed for accessibility.
  - *DOM Structure & Keyboard navigation*: I ensured that this page was keyboard navigatable. This wasn't too hard, but one issue I encountered was with [ThemeSwitch.jsx](https://github.com/gLevaa/frontend-mentor/blob/main/dictionary-web-app/src/components/ThemeSwitch/ThemeSwitch.jsx). Since the actual input has ``opacity: 0``, and styles are applied to the label, you can't tell where your focus is. I used CSS selectors to apply one to the label, as well as adding a ``<VisuallyHidden/>`` label for screen readers (in a lot of other places too). I also wrote a ``useEffect`` which allows us to use the enter key to toggle this component when focused, instead of just the space bar.
  - *Future improvements*: When I tested the site with a screen reader, I noticed that it wouldn't read the text content. Now I'm not sure if this is an issue on the implementation side or just me not knowing how to use a screen reader properly. I'm in the process of speaking to some knowledgeable people and I'll make sure it's improved on my next project.
- **Minor animations**: This was my first time using CSS keyframes to animate the loading spinner. This code can be found in [LoadingSpinner.jsx](https://github.com/gLevaa/frontend-mentor/blob/main/dictionary-web-app/src/components/LoadingSpinner/LoadingSpinner.jsx). It's not particularly impressive, but it's something I learnt nonetheless.
- **Font optimisation**: I made use of font optimsation for this project - I also hope to make a tool to do this automatically, eventually. A reason - there is probably others - that this works is that Google splits up the font into character sets and then extracts only the required characters using ``unicode-range``. The way I implemented this was as follows;
  1. Get the Google Fonts ``<link>`` to load the font.
  2. Make use of the developer tools network tab to find the CSS file imported from Google.
  3. Extract the ``@font-face`` for the latin character set.
  4. Use this in [index.html](https://github.com/gLevaa/frontend-mentor/blob/main/dictionary-web-app/index.html#L8), switching ``font-display`` from ``swap`` to ``falback``.
  5. Download the optimised ``.woff2`` from Google, put it in ``/public/fonts``.
  6. Voila. Loading times reduced from ~80ms+ (depending on caching) to ~6ms when tested.
