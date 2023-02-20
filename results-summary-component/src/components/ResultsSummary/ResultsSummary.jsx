import React from "react";
import styled from "styled-components";

import LeftColumn from "../LeftColumn";
import RightColumn from "../RightColumn";

import { COLORS, QUERIES } from "../../constants";

function ResultsSummary({ data }) {
  const calculateScore = (data) => {
    let score = 0;
    data.forEach((point) => (score += point.score));

    return Math.floor(score / data.length);
  };

  return (
    <Wrapper>
      <LeftColumn score={calculateScore(data)} />
      <RightColumn data={data} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* consistent between columns */
  --vertical-padding: 36px;

  width: clamp(650px, 95%, 800px);
  border-radius: 32px;
  background-color: ${COLORS.whites.white};

  display: flex;
  & > * {
    flex: 1;
  }

  @media ${QUERIES.tabletAndBelow} {
    width: 100%;
    height: 100%;
    border-radius: 0px;

    flex-direction: column;
    & > * {
      flex: revert;
    }
  }
`;

export default ResultsSummary;
