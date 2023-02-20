import React from "react";
import styled from "styled-components";

import Generator from "../Generator";
import { HeadingMedium } from "../TextTypes";

import { COLORS } from "../../constants";

function App() {
  return (
    <Body>
      <Wrapper>
        <Heading>Password Generator</Heading>
        <Generator />
      </Wrapper>
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.black};
  padding: 64px 16px;
`;

const Wrapper = styled.div`
  width: min(100%, 540px);
`;

const Heading = styled(HeadingMedium)`
  color: ${COLORS.grey};
  text-align: center;
  margin-bottom: 32px;
`;

export default App;
