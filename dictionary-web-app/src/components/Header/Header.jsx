import React from "react";
import styled from "styled-components";

import FontDropdown from "./FontDropdown";
import ThemeSwitch from "../ThemeSwitch";

import { QUERIES } from "../../constants";
import { ReactComponent as LogoIcon } from "./assets/logo.svg";

function Header({ font, setFont, ...delegated }) {
  return (
    <Wrapper {...delegated}>
      <Logo />
      <FontDropdown font={font} setFont={setFont} />
      <Divider />
      <ThemeSwitch />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(LogoIcon)`
  margin-right: auto;
  width: 32px;
  height: 36px;

  @media ${QUERIES.mobileAndBelow} {
    height: 32px;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 32px;
  margin: 0px 26px;
  background-color: hsl(var(--color-gray-300));
`;

export default Header;
