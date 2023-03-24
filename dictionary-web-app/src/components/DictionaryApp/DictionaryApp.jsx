import React from "react";
import styled from "styled-components";

import Header from "../Header";
import SearchBar from "../SearchBar";
import LoadingSpinner from "../LoadingSpinner";
import SearchResult from "../SearchResult";

import { QUERIES } from "../../constants";
import { defaultData } from "../../data";

const DEFAULT_FONT = "Inter";

function DictionaryApp() {
  // Inter | Lora | Mono
  const [font, setFont] = React.useState(DEFAULT_FONT);
  // [] - no results | [...results]
  const [searchResults, setSearchResults] = React.useState(defaultData);
  // loading | (success => results | no results)
  const [status, setStatus] = React.useState("success");

  function setFontShorthand(font) {
    if (font === "Inter" || font === "Sans Serif") {
      setFont("Inter");
    } else if (font === "Lora" || font === "Serif") {
      setFont("Lora");
    } else if (font === "Mono" || font === "Inconsolata") {
      setFont("Inconsolata");
    } else {
      console.warn("Invalid font type. Unable to modify");
    }
  }

  const style = { "--font": `'${font}'` };

  return (
    <Wrapper style={style}>
      <StyledHeader font={font} setFont={setFontShorthand} />
      <StyledSearchBar
        setStatus={setStatus}
        setSearchResults={setSearchResults}
      />
      {status === "loading" && <StyledLoadingSpinner width="64" height="64" />}
      {status === "success" && (
        <StyledSearchResult searchResults={searchResults} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & * {
    font-family: var(--font), serif, sans-serif, monospace;
  }
  
  width: 800px;
  padding: 58px 0px;
  --upper-spacing: 48px;
  --inner-horizontal-padding: 0px;

  @media ${QUERIES.tabletAndBelow} {
    width: 100%;
    max-width: 100%;
    padding: 60px 40px;
  }

  @media ${QUERIES.mobileAndBelow} {
    --upper-spacing: 24px;
    --inner-horizontal-padding: 6px;
    
    padding: var(--upper-spacing);
  }
`;

const StyledHeader = styled(Header)`
  padding: 0 var(--inner-horizontal-padding);
`;

const StyledSearchBar = styled(SearchBar)`
  margin-top: var(--upper-spacing);

  @media ${QUERIES.mobileAndBelow} {
    margin-top: var(--upper-spacing);
  }
`;

const StyledLoadingSpinner = styled(LoadingSpinner)`
  margin-top: 128px;
`;

const StyledSearchResult = styled(SearchResult)`
  margin-top: var(--upper-spacing);
  padding: 0 var(--inner-horizontal-padding);

  @media ${QUERIES.mobileAndBelow} {
    margin-top: var(--upper-spacing);
  }
`;

export default DictionaryApp;
