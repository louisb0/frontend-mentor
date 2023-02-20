import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

const NUM_BARS = 4;
const levels = {
  too_weak: { bars: 1, fill: COLORS.red },
  weak: { bars: 2, fill: COLORS.orange },
  medium: { bars: 3, fill: COLORS.yellow },
  strong: { bars: 4, fill: COLORS.green },
};

function StrengthBars({ level }) {
  const displayData = levels[level];

  if (!displayData) {
    throw new Error("Invalid <StrengthDisplay /> level.");
  }

  return (
    <Wrapper style={{ "--fill-color": displayData.fill }}>
      {[...Array(NUM_BARS)].map((x, index) =>
        index < displayData.bars ? (
          <FilledBar key={index} />
        ) : (
          <EmptyBar key={index} />
        )
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  --bar-width: 10px;
  --bar-height: 28px;

  display: flex;
  gap: 8px;
`;

const EmptyBar = styled.div`
  border: 2px solid ${COLORS.white};
  width: var(--bar-width);
  height: var(--bar-height);
`;

const FilledBar = styled(EmptyBar)`
  border: none;
  background: var(--fill-color);
`;

export default StrengthBars;
