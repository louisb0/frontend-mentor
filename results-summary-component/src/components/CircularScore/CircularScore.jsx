import React from "react";
import styled from "styled-components";

import { BodyText, HeadingXLarge } from "../TextTypes";

import { COLORS } from "../../constants";

function CircularScore({ score, ...delegated }) {
  return (
    <Wrapper {...delegated}>
      <HeadingXLarge as="span">{score}</HeadingXLarge>
      <ScoreSecondary as="span" bold>
        of 100
      </ScoreSecondary>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${COLORS.gradientTwo};
  border-radius: 50%;
  width: var(--circle-size);
  min-width: var(--circle-size);
  height: var(--circle-size);
`;

const ScoreSecondary = styled(BodyText)`
  margin-top: -8px;
  
  color: ${COLORS.lightBlue};
  opacity: 0.55;
`;

export default CircularScore;
