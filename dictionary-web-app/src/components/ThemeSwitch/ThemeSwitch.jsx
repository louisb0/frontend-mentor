import React from "react";
import styled from "styled-components";

import { ReactComponent as MoonIcon } from "./assets/icon-moon.svg";

function ThemeSwitch() {
  const checkboxRef = React.useRef();
  const [isLight, setIsLight] = React.useState(
    localStorage.getItem("colorTheme") === "light" ||
      window.matchMedia("(prefers-color-scheme: light)").matches
  );

  /* sync state with localstorage and 
  data-theme (used by css selectors) */
  React.useEffect(() => {
    const theme = isLight ? "light" : "dark";

    localStorage.setItem("colorTheme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [isLight]);

  /* allow enter key for toggling */
  React.useEffect(() => {
    function onKeydown(event) {
      if (
        event.code == "Enter" &&
        document.activeElement === checkboxRef.current
      ) {
        checkboxRef.current.checked = !checkboxRef.current.checked;
        setIsLight(!checkboxRef.current.checked);
      }
    }
    window.addEventListener("keydown", onKeydown);

    return () => {
      window.removeEventListener("keydown", onKeydown);
    };
  }, []);

  const style = {
    "--moon-color": isLight ? "var(--color-gray-400)" : "var(--color-accent)",
  };

  return (
    <Wrapper>
      <SwitchWrapper>
        <Switch
          ref={checkboxRef}
          id="theme-switch"
          type="checkbox"
          checked={!isLight}
          onChange={() => {
            setIsLight(!isLight);
          }}
        />
        <Label htmlFor="theme-switch">Toggle Dark Mode</Label>
      </SwitchWrapper>
      <Icon style={style} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled(MoonIcon)`
  & path {
    stroke: hsl(var(--moon-color));
  }
`;

const SwitchWrapper = styled.div`
  --toggle-width: 40px;
  --toggle-height: 20px;
  --handle-size: 14px;
  --handle-inset: 3px;

  display: flex;
  align-items: center;
`;

const Switch = styled.input`
  // no accessibility concerns since the input
  // itself acts as 'logical' styling to an extent
  height: 0;
  width: 0;
  opacity: 0;

  &:checked + label {
    background: hsl(var(--color-accent));
  }

  &:checked + label:after {
    left: calc(100% - var(--handle-inset));
    transform: translateX(-100%);
  }

  &:focus + label {
    outline: 2px solid hsl(var(--color-accent));
    outline-offset: 2px;
  }
`;

const Label = styled.label`
  display: block;
  position: relative;
  height: var(--toggle-height);
  width: var(--toggle-width);

  background: hsl(var(--color-gray-400));
  border-radius: calc(var(--toggle-height) * 0.5);

  cursor: pointer;
  text-indent: -9999px;

  // the handle - circle slider dot
  &:after {
    content: "";
    position: absolute;
    top: var(--handle-inset);
    left: var(--handle-inset);

    width: var(--handle-size);
    height: var(--handle-size);
    background: hsl(var(--color-white));
    border-radius: calc(var(--handle-size) * 0.5);

    transition: var(--transition-period); // from <App />
  }

  // Stretch on click with ^ transition
  &:active:after {
    width: 24px;
  }
`;

export default ThemeSwitch;
