import React from "react";
import styled from "styled-components";

import Checkboxes from "../Checkboxes";
import LengthSlider from "../LengthSlider";
import StrengthDisplay from "../StrengthDisplay";

import { createPassword, getPasswordStrength } from "../../utils";

const initialSettings = {
  length: 10,
  includes: {
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  },
};

function GeneratorConfig({ password, setPassword }) {
  const [length, setLength] = React.useState(initialSettings.length);
  const [includes, setIncludes] = React.useState(initialSettings.includes);
  const [strengthLevel, setStrengthLevel] =
    React.useState("strong"); /* default */
  const config = { length, includes };

  React.useEffect(() => {
    setPassword(createPassword(config));
    setStrengthLevel(getPasswordStrength(config, password));
  }, [length, includes]);

  const handleCheck = (event, option) => {
    const nextState = { ...includes, [option]: event.target.checked };

    /* ensure at least one checkbox is ticked */
    if (Object.values(nextState).includes(true)) {
      setIncludes(nextState);
    }
  };

  return (
    <Wrapper>
      <LengthSlider length={length} setLength={setLength} />
      <Checkboxes onCheck={handleCheck} includes={includes} />
      <StrengthDisplay level={strengthLevel} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 24px 32px;

  background-color: var(--background-color);
`;

export default GeneratorConfig;
