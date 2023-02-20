import React from "react";
import styled from "styled-components";

import UnstyledButton from "../UnstyledButton";
import ScoreCard from "../ScoreCard";
import { HeadingMedium } from "../TextTypes";

import { COLORS, QUERIES } from "../../constants";

function RightColumn({ data }) {
  return (
    <Wrapper>
      <HeadingMedium>Summary</HeadingMedium>

      <ScoreCards>
        {data.map((cardData) => (
          <ScoreCard data={cardData} />
        ))}
      </ScoreCards>
      <StyledButton>Continue</StyledButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: var(--vertical-padding) 40px;
  color: ${COLORS.navy};
`;

const ScoreCards = styled.div`
  margin-top: 2rem;

  & > :not(:first-of-type) {
    margin-top: 16px;
  }
`;

const StyledButton = styled(UnstyledButton)`
  margin-top: 24px;

  width: 100%;
  text-align: center;
  padding: 16px 0px;
  color: ${COLORS.whites.white};
  background: ${COLORS.navy};
  border-radius: 128px;

  &:hover {
    background: ${COLORS.gradientOne};
  }

  @media ${QUERIES.tabletAndBelow} {
    margin-top: 32px;
  }
`;

export default RightColumn;
