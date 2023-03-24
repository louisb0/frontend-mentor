import React from "react";
import styled from "styled-components";

import { BodySmall } from "../Typography";
import { ReactComponent as NewWindowIcon } from "./assets/icon-new-window.svg";

const SearchResultFooter = ({ wiktionaryPage, ...delegated }) => {
  return (
    <div {...delegated}>
      <HorizontalLine />
      <ContentWrapper>
        <SourceLabel as="span">Source</SourceLabel>
        <Link href={wiktionaryPage}>
          <BodySmall>{wiktionaryPage}</BodySmall>
          <Icon />
        </Link>
      </ContentWrapper>
    </div>
  );
};

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: hsl(var(--color-lines));
  transition: background-color var(--transition-period) ease-in-out;
`;

const ContentWrapper = styled.div`
  margin-top: 16px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const SourceLabel = styled(BodySmall)`
  color: hsl(var(--color-text-secondary));
  margin-right: 16px;
`;

const Link = styled.a`
  color: hsl(var(--color-text));
`;

const Icon = styled(NewWindowIcon)`
  vertical-align: middle;
  margin-left: 8px;
`;

export default SearchResultFooter;
