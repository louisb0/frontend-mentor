import React from "react";
import styled from "styled-components";

import { BodyText, HeadingLarge } from "../TextTypes";

import { COLORS } from "../../constants";

function LengthSlider({ length, setLength }) {
  return (
    <Wrapper>
      <TextWrapper>
        <BodyText as="label" htmlFor="length-slider">
          Password Length
        </BodyText>
        <Count as="span">{length}</Count>
      </TextWrapper>

      <Slider
        id="length-slider"
        type="range"
        min="1"
        max="20"
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Count = styled(HeadingLarge)`
  color: ${COLORS.green};
`;

const Slider = styled.input`
  --lower-fill: ${COLORS.green};
  --upper-fill: ${COLORS.black};
  --handle-size: 28px;
  --handle-color: ${COLORS.white};
  --handle-active-fill-color: ${COLORS.black};
  --handle-active-accent-color: ${COLORS.green};
  --track-size: 8px;

  display: block;
  width: 100%;
  margin: 0;
  appearance: none;
  cursor: pointer;
  outline-offset: 6px;

  /* -ms-lower-fill & -ms-upper-fill equiv */
  background: linear-gradient(
    to right,
    var(--lower-fill) ${({ value }) => Math.floor((value / 20) * 100) + "%"},
    var(--upper-fill) ${({ value }) => Math.floor((value / 20) * 100) + "%"}
  );

  &::-webkit-slider-thumb {
    appearance: none;
    border-radius: 50%;
    width: var(--handle-size);
    height: var(--handle-size);
    background: var(--handle-color);
    cursor: grab;

    /* place thumb on track */
    transform: translateY(calc(-50% + var(--track-size) / 2));
  }

  &:active::-webkit-slider-thumb {
    background: var(--handle-active-fill-color);
    border: 2px solid var(--handle-active-accent-color);
    cursor: grabbing;
  }

  &::-webkit-slider-runnable-track {
    width: calc(100% - var(--handle-size));
    height: var(--track-size);
  }
`;

export default LengthSlider;
