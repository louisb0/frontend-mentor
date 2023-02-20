import React from "react";
import styled from "styled-components";

import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";
import { BodyText, HeadingLarge } from "../TextTypes";
import { ReactComponent as CopyIcon } from "./icon-copy.svg";

import { COLORS } from "../../constants";

function GeneratorOutput({ password }) {
  const [showCopied, setShowCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setShowCopied(!showCopied);
  };

  React.useEffect(() => {
    let timer = setTimeout(() => {
      setShowCopied(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [showCopied]);

  return (
    <Wrapper>
      <PasswordOutput as="span" active={password.length > 0}>
        {password ? password : "P4$5W0rD!"}
      </PasswordOutput>

      <ButtonsWrapper>
        {showCopied && <CopiedText>Copied</CopiedText>}

        <IconButton onClick={handleCopy}>
          <VisuallyHidden>Copy password</VisuallyHidden>
          <CopyIcon />
        </IconButton>
      </ButtonsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 32px;

  background-color: var(--background-color);
`;

const PasswordOutput = styled(HeadingLarge)`
  opacity: ${(props) => (props.active ? 1 : 0.25)};
  user-select: ${(props) => (props.active ? "revert" : "none")};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ButtonsWrapper = styled.div`
  margin-left: auto;
  margin-top: 8px; /* optical alignment */
  display: flex;
  gap: 16px;

  --fill-color: ${COLORS.green};
  &:hover {
    --fill-color: white;
  }
`;

const CopiedText = styled(BodyText)`
  color: var(--fill-color);
  margin-top: 2px; /* optical alignment */

  user-select: none;
  text-transform: uppercase;
`;

const IconButton = styled(UnstyledButton)`
  & > svg path {
    fill: var(--fill-color);
  }
`;

export default GeneratorOutput;
