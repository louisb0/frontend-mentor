import React from "react";
import styled from "styled-components";

import { QUERIES, WEIGHTS } from "../../constants";
import { HeadingMedium } from "../Typography";

const WordMeaningTitle = ({ title, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <Title>{title}</Title>
      <HorizontalLine />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  
  gap: 24px;
`;

const Title = styled(HeadingMedium)`
  color: hsl(var(--color-text));
  font-weight: ${WEIGHTS.bold};

  @media ${QUERIES.mobileAndBelow} {
    font-size: ${20/16}rem;
  }
`;

const HorizontalLine = styled.div`
  flex: 1;
  width: 100%;
  height: 1px;
  background-color: hsl(var(--color-lines));
  transition: background-color var(--transition-period) ease-in-out;
`;

export default WordMeaningTitle;
