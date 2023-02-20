import styled from "styled-components";

import { QUERIES, WEIGHTS } from "../../constants";

export const HeadingXLarge = styled.h1`
  font-size: ${72 / 16}rem;
  font-weight: ${WEIGHTS.xbold};
  color: inherit;

  @media ${QUERIES.mobileAndBelow} {
    font-size: ${56/16}rem;
  }
`;

export const HeadingLarge = styled.h1`
  font-size: ${32 / 16}rem;
  font-weight: ${WEIGHTS.bold};
  color: inherit;
`;

export const HeadingMedium = styled.h2`
  font-size: ${24 / 16}rem;
  font-weight: ${WEIGHTS.bold};
  color: inherit;
`;

export const BodyText = styled.p`
  font-size: ${18 / 16}rem;
  font-weight: ${(props) => (props.bold ? WEIGHTS.bold : WEIGHTS.medium)};
  color: inherit;

`;
