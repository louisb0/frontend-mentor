import React from "react";
import styled from "styled-components";

import Grid from "../Grid";
import { HeadingLarge, BodyText } from "../TextTypes";

import { QUERIES } from "../../constants";

function Hero() {
  return (
    <Wrapper>
      <TextWrapper>
        <HeadingLarge>Design solutions made easy</HeadingLarge>
        <Body>
          With over ten years of experience in various design disciplines, I'm
          your one-stop shop for your design needs.
        </Body>
      </TextWrapper>
      
      <StyledGrid />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 64px;

  @media ${QUERIES.mobileAndBelow} {
    margin-top: 32px;
  }
`;

const TextWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
  text-align: center;
`;

const Body = styled(BodyText)`
  width: 65%;
  margin: 24px auto;
  margin-bottom: 0px;

  @media ${QUERIES.tabletAndBelow} {
    width: 90%;
    margin-top: 28px;
  }

  @media ${QUERIES.mobileAndBelow} {
    margin-top: 16px;
  }
`;

const StyledGrid = styled(Grid)`
  margin-top: 80px;

  @media ${QUERIES.tabletAndBelow} {
    margin-top: 64px;
  }

  @media ${QUERIES.mobileAndBelow} {
    margin-top: 32px;
  }
`;

export default Hero;
