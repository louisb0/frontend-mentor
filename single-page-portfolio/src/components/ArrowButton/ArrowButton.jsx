import React from "react";
import styled from "styled-components";

import UnstyledButton from "../UnstyledButton";

import { COLORS } from "../../constants";

function ArrowButton({ variant, ...delegated }) {
  let imageSrc;
  if (variant === "left") {
    imageSrc = "/icon-arrow-left.svg";
  } else if (variant === "right") {
    imageSrc = "/icon-arrow-right.svg";
  }

  if (!imageSrc) {
    throw new Error("Unknown <ArrowButton /> variant.");
  }

  return (
    <Wrapper {...delegated}>
      <img src={imageSrc} />
    </Wrapper>
  );
}

const Wrapper = styled(UnstyledButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  background-color: ${COLORS.black};

  &:hover {
    background-color: ${COLORS.purple};
  }
`;

export default ArrowButton;
