import styled from "styled-components";

import { QUERIES, COLORS, WEIGHTS } from "../../constants";

export const HeadingLarge = styled.h1`
  font-size: ${32 / 16}rem;
  line-height: ${43 / 16}rem;
  font-weight: ${WEIGHTS.bold};
  color: ${COLORS.white};

  @media ${QUERIES.mobileAndBelow} {
    /* switch to medium */
    font-size: ${24 / 16}rem;
    line-height: ${31 / 16}rem;
  }
`;

export const HeadingMedium = styled.h2`
  font-size: ${24 / 16}rem;
  line-height: ${31 / 16}rem;
  font-weight: ${WEIGHTS.bold};
  color: ${COLORS.white};

  @media ${QUERIES.mobileAndBelow} {
    font-size: ${16 / 16}rem;
  }
`;

export const BodyText = styled.p`
  font-size: ${18 / 16}rem;
  line-height: ${23 / 16}rem;
  font-weight: ${WEIGHTS.bold};
  color: ${COLORS.white};

  @media ${QUERIES.mobileAndBelow} {
    font-size: 1rem;
  }
`;
