import React from "react";
import styled from "styled-components";

import { BodyText } from "../TextTypes";
import { ReactComponent as IconCheck } from "./icon-check.svg";

import { COLORS } from "../../constants";

function Checkbox({ label, option, checked, onCheck }) {
  return (
    <Wrapper>
      <Input
        type="checkbox"
        id={option}
        value={option}
        checked={checked}
        onChange={(event) => {
          onCheck(event, option);
        }}
      />

      {/* must follow <Input /> for ~ display: block selector */}
      <IconWrapper>
        <IconCheck />
      </IconWrapper>

      <BodyText as="label" htmlFor={option}>
        {label}
      </BodyText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  --checkbox-size: 20px;

  position: relative;
  display: flex;
  align-items: center;
  gap: 24px;

  & > * {
    cursor: pointer;
  }
`;

const IconWrapper = styled.div`
  display: none; /* changed on check */
  pointer-events: none;

  /* optical alignment */
  position: absolute;
  left: 3px;
  margin: auto 0;
`;

const Input = styled.input`
  /* reset styles */
  margin: 0;
  appearance: none;
  background: transparent;
  border-radius: 0px;

  width: var(--checkbox-size);
  height: var(--checkbox-size);
  background: ${COLORS.green};

  &:checked ~ ${IconWrapper} {
    display: block;
  }
`;

export default Checkbox;
