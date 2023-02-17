import React from "react";
import styled from "styled-components";

import GridCard from "../GridCard";

import { COLORS, QUERIES } from "../../constants";

function Grid({ ...delegated }) {
  return (
    <Wrapper {...delegated}>
      <LeftColumn>
        <GridCard color={COLORS.purple} image="/pattern-graphic-design.svg">
          Graphic Design
        </GridCard>
      </LeftColumn>

      <CenterColumn>
        <Row>
          <GridCard color={COLORS.yellow} image="/pattern-ui-ux.svg">
            UI/UX
          </GridCard>
          <GridCard color={COLORS.pink} image="/pattern-apps.svg">
            Apps
          </GridCard>
        </Row>
        <GridCard color={COLORS.lightRed} image="/pattern-illustrations.svg">
          Illustrations
        </GridCard>
      </CenterColumn>

      <RightColumn>
        <GridCard color={COLORS.cyan} image="/pattern-photography.svg">
          Photography
        </GridCard>
        <GridCard
          color={COLORS.darkPurple}
          image="/pattern-motion-graphics.svg"
        >
          Motion Graphics
        </GridCard>
      </RightColumn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  --gap: 24px;
  gap: var(--gap);
`;

const LeftColumn = styled.div`
  flex: 1;
  height: 364px;
`;

const CenterColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--gap);

  & > * {
    flex: 1;

    &:first-child {
      flex-basis: 182px;
    }
  }
`;

const Row = styled.div`
  display: flex;
  gap: var(--gap);
`;

const RightColumn = styled(CenterColumn)`
  @media ${QUERIES.tabletAndBelow} {
    flex-direction: row;

    & > :first-child {
      flex-basis: 0px;
    }
  }

  @media ${QUERIES.mobileAndBelow} {
    flex-direction: column;
  }
`;

export default Grid;
