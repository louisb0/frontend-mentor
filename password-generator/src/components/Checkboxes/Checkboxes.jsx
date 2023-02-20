import React from "react";
import styled from "styled-components";

import Checkbox from "../Checkbox";

const labels = [
  "Include Uppercase Letters",
  "Include Lowercase Letters",
  "Include Numbers",
  "Include Symbols",
];

function Checkboxes({ includes, onCheck }) {
  return (
    <Wrapper>
      {Object.keys(includes).map((include, index) => (
        <Checkbox
          key={index}
          label={labels[index]}
          option={include}
          checked={includes[include] === true}
          onCheck={onCheck}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 32px;

  & > :not(:first-child) {
    margin-top: 20px;
  }
`;

export default Checkboxes;
