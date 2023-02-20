import React from "react";
import styled from "styled-components";

import ResultsSummary from "../ResultsSummary";

import { COLORS, QUERIES } from "../../constants";
import { mockData } from "../../data";

function App() {
  return (
    <Wrapper>
      <ResultsSummary data={mockData}/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 100%;
  background-color: ${COLORS.veryLightBlue};

  @media ${QUERIES.tabletAndBelow} {
    display: revert;
  }
`;

export default App;
