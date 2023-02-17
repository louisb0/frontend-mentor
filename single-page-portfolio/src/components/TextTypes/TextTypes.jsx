import styled from "styled-components";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";

export const HeadingLarge = styled.h1`
  font-size: ${56 / 16}rem;
  line-height: ${70 / 16}rem;
  font-weight: ${WEIGHTS.bold};
  color: ${COLORS.black};

  @media ${QUERIES.tabletAndBelow} {
    font-size: ${44 / 16}rem;
    line-height: ${51 / 16}rem;
  }

  @media ${QUERIES.mobileAndBelow} {
    font-size: ${36 / 16}rem;
    line-height: ${40 / 16}rem;
  }
`;

export const HeadingMedium = styled.h2`
  font-size: ${40 / 16}rem;
  line-height: ${51 / 16}rem;
  font-weight: ${WEIGHTS.bold};
  color: ${COLORS.black};

  @media ${QUERIES.tabletAndBelow} {
    font-size: ${32 / 16}rem;
    line-height: ${40 / 16}rem;
  }

  @media ${QUERIES.mobileAndBelow} {
    font-size: ${26 / 16}rem;
  }
`;

export const HeadingSmall = styled.h3`
  font-size: ${32 / 16}rem;
  line-height: ${40 / 16}rem;
  font-weight: ${WEIGHTS.bold};
  color: ${COLORS.black};

  @media ${QUERIES.mobileAndBelow} {
    font-size: ${24 / 16}rem;
  }
`;

export const BodyText = styled.p`
  font-size: ${18 / 16}rem;
  line-height: ${28 / 16}rem;
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray};

  @media ${QUERIES.mobileAndBelow} {
    font-size: 1rem;
  }
`;