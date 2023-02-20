import React from "react";
import styled from "styled-components";

import StrengthBars from "../StrengthBars/StrengthBars";
import { BodyText, HeadingMedium } from "../TextTypes";

import { COLORS } from "../../constants";

function StrengthDisplay({ level }) {
  return (
    <Wrapper>
      <StrengthLabel>Strength</StrengthLabel>

      <LevelWrapper>
        {/* formatting for "too_weak" level */}
        <LevelText as="span">{level.replace(/_/g, " ")}</LevelText>
        <StrengthBars level={level} />
      </LevelWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 32px;
  background-color: ${COLORS.black};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 32px;

  /* create horizontal scroll container (< 387px) */
  /* gap acts as min-spacing */
  overflow-y: hidden;
  gap: 12px;
`;

const LevelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const LevelText = styled(HeadingMedium)`
  text-transform: uppercase;
`;

const StrengthLabel = styled(BodyText)`
  text-transform: uppercase;
  color: ${COLORS.grey};
`;

export default StrengthDisplay;
