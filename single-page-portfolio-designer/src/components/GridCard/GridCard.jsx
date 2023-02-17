import React from "react";
import styled from "styled-components";

import { COLORS, WEIGHTS } from "../../constants";

function GridCard({ color, image, children, ...delegated }) {
  return (
    <Wrapper style={{ "--bg-color": color }} href="#">
      <Graphic src={image} />
      <Text>{children}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--bg-color);
  border-radius: 8px;
  padding: 24px;
  text-decoration: none;
`;

const Graphic = styled.img`
  align-self: flex-end;
`;

const Text = styled.span`
  font-size: ${24 / 16}rem;
  font-weight: ${WEIGHTS.bold};
  color: ${COLORS.white};
  white-space: nowrap;
`;

export default GridCard;
