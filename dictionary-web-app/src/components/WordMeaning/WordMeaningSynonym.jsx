import React from "react";
import styled from "styled-components";

import { QUERIES } from "../../constants";
import { HeadingSmall } from "../Typography";

const WordMeaningSynonym = ({ synonyms, ...delegated }) => {
  if (synonyms.length === 0) {
    return;
  }

  return (
    <Wrapper {...delegated}>
      <SynonymTitle as="span">Synonyms</SynonymTitle>
      <SynonymsWrapper>
        {synonyms.map((synonym, index) => (
          <SynonymLabel key={index} as="span">{synonym}</SynonymLabel>
        ))}
      </SynonymsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const SynonymTitle = styled(HeadingSmall)`
  color: hsl(var(--color-text-secondary));
  margin-right: 24px;

  @media ${QUERIES.mobileAndBelow} {
    font-size: ${16/16}rem;
  }
`;

const SynonymsWrapper = styled.div`
  flex: 1;
`

const SynonymLabel = styled(HeadingSmall)`
  display: inline-block;
  font-weight: 700;
  color: hsl(var(--color-accent));

  &:not(:last-of-type)::after {
    content: ",";
    margin-right: 8px;
  }

  @media ${QUERIES.mobileAndBelow} {
    font-size: ${16/16}rem;
  }
`;

export default WordMeaningSynonym;
