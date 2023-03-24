import React from "react";
import styled from "styled-components";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";

import { convertFont } from "../../util";
import { BodyMedium } from "../Typography";
import { QUERIES } from "../../constants";
import { ReactComponent as ArrowDownIcon } from "./assets/icon-arrow-down.svg";

function FontDropdown({ font, setFont }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button>
          {/* For screen readers, comma pauses between
           'select a font' and the current font name*/}
          <VisuallyHidden>Select a font,</VisuallyHidden>

          <Label>{convertFont(font)}</Label>
          <IconWrapper>
            <ArrowDownIcon />
          </IconWrapper>
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownContent sideOffset={5}>
          <DropdownItem
            onClick={() => {
              setFont("Sans Serif");
            }}
          >
            <SansSerifLabel>Sans Serif</SansSerifLabel>
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              setFont("Serif");
            }}
          >
            <SerifLabel>Serif</SerifLabel>
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              setFont("Mono");
            }}
          >
            <MonoLabel>Mono</MonoLabel>
          </DropdownItem>
        </DropdownContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

const DropdownItem = styled(DropdownMenu.Item)`
  cursor: pointer;
  outline-offset: 6px;

  &:hover {
    color: hsl(var(--color-accent));
  }

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
`;

const DropdownContent = styled(DropdownMenu.Content)`
  border-radius: 16px;
  padding: 24px;
  color: hsl(var(--color-text));

  background-color: hsl(var(--color-bg));
  box-shadow: var(--shadow);
`;

const Button = styled(UnstyledButton)`
  display: flex;
`;

const IconWrapper = styled.div`
  margin-left: 16px;
`;

const Label = styled(BodyMedium)`
  font-weight: 700;
  color: hsl(var(--color-text));

  @media ${QUERIES.mobileAndBelow} {
    font-size: 1rem;
  }
`;

const SerifLabel = styled(Label)`
  font-family: "Lora", serif;
`;

const SansSerifLabel = styled(Label)`
  font-family: "Inter", sans-serif;
`;

const MonoLabel = styled(Label)`
  font-family: "Inconsolata", monospace;
`;

export default FontDropdown;
