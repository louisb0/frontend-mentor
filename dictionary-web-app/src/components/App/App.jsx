import React from "react";
import styled from "styled-components";

import DictionaryApp from "../DictionaryApp";

function App() {
  return (
    <Wrapper>
      <DictionaryApp />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  min-height: 100%;
  height: fit-content;

  --transition-period: 0.3s;
  background-color: hsl(var(--color-bg));
  transition: background-color var(--transition-period) ease-in-out;
`;

export default App;
