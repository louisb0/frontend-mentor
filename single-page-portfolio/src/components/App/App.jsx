import React from "react";
import styled from "styled-components";

import Header from "../Header";
import Hero from "../Hero";
import About from "../About";
import WorkDisplay from "../WorkDisplay";
import Booking from "../Booking";

import { COLORS, QUERIES } from "../../constants";


function App() {
  return (
    <Body>
      <Wrapper>
        <Header />
        <Hero />
        <About />
        <WorkDisplay />
        <Booking />
        <Footer />
      </Wrapper>
    </Body>
  );
}

const Body = styled.div`
  width: 100%;
  background-color: ${COLORS.white};
`;

/* --padding-x used for carousel */
const Wrapper = styled.div`
  width: min(85vw, 1200px);
  margin: 0 auto;
  padding: var(--padding-y, 0px) var(--padding-x, 0px);
  --padding-y: 32px;

  @media ${QUERIES.tabletAndBelow} {
    width: 100%;
    margin: revert;
    --padding-x: 40px;
  }

  @media ${QUERIES.mobileAndBelow} {
    --padding-x: 16px;
    --padding-y: 16px;
  }
`;

const Footer = styled(Header)`
  margin-top: 56px;

  @media ${QUERIES.mobileAndBelow} {
    margin-top: 40px;
  }
`;

export default App;
