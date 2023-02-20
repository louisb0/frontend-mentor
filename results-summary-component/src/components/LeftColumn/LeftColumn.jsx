import React from "react";
import styled from "styled-components";

import CircularScore from "../CircularScore";
import { BodyText, HeadingLarge, HeadingMedium } from "../TextTypes";

import { COLORS, QUERIES } from "../../constants";

function LeftColumn({ score }) {
  return (
    <Wrapper>
      <Title>Your Result</Title>
      <StyledScore score={score} />
      <TextWrapper>
        <HeadingLarge as="span">Great!</HeadingLarge>
        <Body>
          Your performance exceeds 65% of the people conducting the test here!
        </Body>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  --primary-color: ${COLORS.whites.white};
  --secondary-color: ${COLORS.lightBlue};

  min-width: 325px;
  text-align: center;
  padding: var(--vertical-padding) 0px;
  color: var(--primary-color);
  background: ${COLORS.gradientOne};
  border-radius: 32px;

  @media ${QUERIES.tabletAndBelow} {
    display: flex;
    align-items: center;
    text-align: revert;
    min-width: revert;
    border-radius: 0px 0px 12px 12px;
  }

  @media ${QUERIES.mobileAndBelow} {
    flex-direction: column;
    text-align: center;
  }
`;

const Title = styled(HeadingMedium)`
  color: var(--secondary-color);

  @media ${QUERIES.tabletAndBelow} {
    display: none;
  }
`;

const StyledScore = styled(CircularScore)`
  --circle-size: 200px;
  margin: 0 auto;
  margin-top: 2rem;

  @media ${QUERIES.tabletAndBelow} {
    --circle-size: 180px;
    margin: 0 2rem;
  }

  @media ${QUERIES.mobileAndBelow} {
    --circle-size: 140px;
    margin: 0;
  }
`;

const TextWrapper = styled.div`
  margin-top: 1.8rem;

  @media ${QUERIES.tabletAndBelow} {
    flex-grow: 1;

    margin-top: 0;
    padding-right: 32px;
  }

  @media ${QUERIES.mobileAndBelow} {
    margin-top: 1rem;
    padding: 0 2rem;
  }
`;

const Body = styled(BodyText)`
  color: var(--secondary-color);

  margin: 0 auto;
  margin-top: 0.5rem;
  width: 250px;

  @media ${QUERIES.tabletAndBelow} {
    margin: 0;
    width: 100%;
  }
`;

export default LeftColumn;
