import React from "react";
import styled from "styled-components";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";

function LinkButton({ variant = "primary", children, ...delegated }) {
  const styling = {
    primary: {
      "--bg-color": COLORS.black,
      "--bg-color-hover": COLORS.purple,
    },
    secondary: {
      "--bg-color": COLORS.lightRed,
      "--bg-color-hover": COLORS.yellow,
    },
  };

  if (!styling[variant]) {
    throw new Error("Unknown <Button /> variant.");
  }

  return (
    <Link style={styling[variant]} {...delegated}>
      {children}
    </Link>
  );
}

const Link = styled.a`
  display: block;
  width: fit-content;
  padding: 14px 42px;
  color: ${COLORS.white};
  background-color: var(--bg-color);
  font-size: 1rem;
  font-weight: ${WEIGHTS.bold};
  border-radius: 28px;
  text-decoration: none;
  cursor: pointer;
  outline-offset: 4px;

  &:hover {
    background-color: var(--bg-color-hover);
  }

  @media ${QUERIES.mobileAndBelow} {
    padding: 8px 24px;
    font-size: ${14 / 16}rem;
  }
`;

export default LinkButton;
