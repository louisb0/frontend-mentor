import React from "react";
import styled from "styled-components";

import { BodyText } from "../TextTypes";

import { COLORS } from "../../constants";

const variantStyles = {
  reaction: {
    "--bg-color": COLORS.whites.red,
    "--text-color": COLORS.red,
  },
  memory: {
    "--bg-color": COLORS.whites.yellow,
    "--text-color": COLORS.yellow,
  },
  verbal: {
    "--bg-color": COLORS.whites.green,
    "--text-color": COLORS.green,
  },
  visual: {
    "--bg-color": COLORS.whites.blue,
    "--text-color": COLORS.blue,
  },
};

function ScoreCard({ data }) {
  const style = variantStyles[data.category.toLowerCase()];

  if (!style) {
    throw new Error("Unknown <TraitScore /> variant.");
  }

  return (
    <Wrapper style={style}>
      <Icon src={data.icon} />
      <BodyText as="span">{data.category}</BodyText>
      
      <ScoreWrapper>
        <ScorePrimary as="span" bold>
          {data.score}
        </ScorePrimary>
        <ScoreSecondary as="span" bold>
          {" "}
          / 100
        </ScoreSecondary>
      </ScoreWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  padding: 16px;
  color: var(--text-color);
  background-color: var(--bg-color);
  border-radius: 12px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;

const ScoreWrapper = styled.div`
  margin-left: auto;
`;

const ScorePrimary = styled(BodyText)`
  color: ${COLORS.navy};
`;

const ScoreSecondary = styled(ScorePrimary)`
  opacity: 0.5;
`;

export default ScoreCard;
