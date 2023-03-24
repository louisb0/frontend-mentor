import React from "react";
import styled from "styled-components";

import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";

import { QUERIES } from "../../constants";
import { ReactComponent as SearchIcon } from "./assets/icon-search.svg";

const ENDPOINT = "https://api.dictionaryapi.dev/api/v2/entries/en/";

function SearchBar({ setStatus, setSearchResults, ...delegated }) {
  const [searchTerm, setSearchTerm] = React.useState("");

  async function handleSearch(event) {
    event.preventDefault();
    setStatus("loading");

    const url = ENDPOINT + searchTerm;
    const response = await fetch(url);
    const json = await response.json();

    /* This API is odd.
          response.ok => definition found
          !response.ok => no definition || error
       So, for simplicity, we just error handle using
       'no definition found' - not ideal, but API design, I think?
    */
    const searchResult = response.ok ? json : [];
    setSearchResults(searchResult);
    setStatus("success");
  }

  return (
    <Wrapper onSubmit={handleSearch} {...delegated}>
      <Input
        placeholder="Search for any word!"
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      <SearchButton type="submit">
        <SearchIcon />
        <VisuallyHidden>Search</VisuallyHidden>
      </SearchButton>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  --padding-vertical: 20px;
  --padding-horizontal: 24px;

  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 64px;
  border-radius: 16px;

  background-color: hsl(var(--color-bg-secondary));
  transition: background-color var(--transition-period) ease-in-out;

  @media ${QUERIES.mobileAndBelow} {
    height: 48px;
    --padding-vertical: 14px;
  }

  padding: var(--padding-vertical) var(--padding-horizontal);
`;

const Input = styled.input`
  // fully fill the search bar wrapper
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  border-radius: 16px;

  padding: var(--padding-vertical) var(--padding-horizontal);
  outline-offset: 4px;

  // bold heading small styles for text input
  color: hsl(var(--color-text));
  font-size: ${20 / 16}rem;
  line-height: ${24 / 16}rem;
  font-weight: 700;

  &::placeholder {
    color: hsla(var(--color-text), 0.25);

    @media ${QUERIES.mobileAndBelow} {
      font-size: ${14/16}rem;
    }
  }
`;

const SearchButton = styled(UnstyledButton)`
  position: relative;

  display: flex;
  align-items: center;

  // increase touch target
  padding: 24px;
  margin: -24px;
  margin-left: auto;
`;

export default SearchBar;
