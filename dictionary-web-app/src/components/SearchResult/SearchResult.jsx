import React from "react";
import styled from "styled-components";

import NoResultsFound from "./NoResultsFound";
import SearchResultTitle from "./SearchResultTitle";
import SearchResultFooter from "./SearchResultFooter";
import WordMeaning from "../WordMeaning";

import { getAudioSrc } from "./SearchResult.helpers";
import { QUERIES } from "../../constants";

function SearchResult({ searchResults, ...delegated }) {
  if (searchResults.length === 0) {
    return <StyledNoResultsFound />;
  }

  const word = searchResults[0].word;
  const phonetic = searchResults[0].phonetic;
  const audioSrc = getAudioSrc(searchResults[0].phonetics);

  const wiktionaryPage = searchResults[0].sourceUrls[0];

  return (
    <div {...delegated}>
      <StyledTitle word={word} phonetic={phonetic} audioSrc={audioSrc} />
      <MeaningsWrapper>
        {searchResults[0].meanings.map((meaning, index) => (
          <StyledMeaning key={index} meaning={meaning} />
        ))}
      </MeaningsWrapper>
      <StyledFooter wiktionaryPage={wiktionaryPage} />
    </div>
  );

  //return <AudioPlayer src="https://api.dictionaryapi.dev/media/pronunciations/en/word-us.mp3"/>;
}

const StyledNoResultsFound = styled(NoResultsFound)`
  margin-top: 128px;
`;

const StyledTitle = styled(SearchResultTitle)``;

const MeaningsWrapper = styled.div`
  margin-top: 42px;

  @media ${QUERIES.mobileAndBelow} {
    margin-top: 32px;
  }
`;

const StyledMeaning = styled(WordMeaning)`
  &:not(:first-of-type) {
    margin-top: 32px;
  }
`;

const StyledFooter = styled(SearchResultFooter)`
  margin-top: 42px;
`;

export default SearchResult;
