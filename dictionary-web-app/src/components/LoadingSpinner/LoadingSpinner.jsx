import React from "react";
import styled from "styled-components";

import { ReactComponent as LoaderIcon } from "./assets/loader.svg";

function LoadingSpinner({ width, height, ...delegated }) {
  const style = {
    "--spinner-width": `${width}px`,
    "--spinner-height": `${height}px`,
  };

  return (
    <Wrapper style={style}>
      <IconWrapper {...delegated}>
        <Icon />
      </IconWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const IconWrapper = styled.div`
  & path {
    stroke: hsla(var(--color-accent), 0.8);
  }
`;

const Icon = styled(LoaderIcon)`
  width: var(--spinner-width);
  height: var(--spinner-height);

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  animation: spin 2000ms linear infinite;
`;

export default LoadingSpinner;
