import React from "react";
import styled from "styled-components";

import { BodyMedium, HeadingSmall } from "../Typography";

function NoResultsFound({ ...delegated }) {
  return (
    <Wrapper {...delegated}>
      <Icon>😕</Icon>
      <Title>No Definitions Found</Title>
      <BodyMedium>
        Sorry, we couldn't find definitions for the word you were looking for.
        You can try the search again at later time or head to the web instead.
      </BodyMedium>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  color: hsl(var(--color-text));
`;

const Icon = styled.span`
  font-size: 64px;
  margin-bottom: 48px;
`;

const Title = styled(HeadingSmall)`
  font-weight: 700;
  margin-bottom: 24px;
`;

export default NoResultsFound;
