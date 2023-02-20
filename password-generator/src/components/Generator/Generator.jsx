import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";

import GeneratorConfig from "../GeneratorConfig";
import GeneratorOutput from "../GeneratorOutput";

function Generator() {
  const [password, setPassword] = React.useState("");

  return (
    <Wrapper>
      <GeneratorOutput password={password} />
      <GeneratorConfig password={password} setPassword={setPassword} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  --background-color: ${COLORS.darkGrey};

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default Generator;
