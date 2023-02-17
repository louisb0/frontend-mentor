import React from "react";
import styled from "styled-components";

import LinkButton from "../LinkButton";

import { QUERIES } from "../../constants";

function Header({ ...delegated }) {
  return (
    <Wrapper {...delegated}>
      <Logo src="/logo.svg" alt="Logo"/>
      <LinkButton href="/consultation" variant="primary">
        Free Consultation
      </LinkButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 64px;

  @media ${QUERIES.mobileAndBelow} {
    width: 48px;
  }
`;

export default Header;
