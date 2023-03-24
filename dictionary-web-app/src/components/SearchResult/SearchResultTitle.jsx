import React from "react";
import styled from "styled-components";

import AudioPlayer from "../AudioPlayer";

import { QUERIES } from "../../constants";
import { HeadingLarge, HeadingMedium } from "../Typography";

const SearchResultTitle = ({ word, phonetic, audioSrc, ...delegated }) => {
  let TextTitle = <WordLabel>{word}</WordLabel>;

  if (!!phonetic) {
    TextTitle = (
      <div>
        <WordLabel>{word}</WordLabel>
        <PhoneticLabel>{phonetic}</PhoneticLabel>
      </div>
    );
  }

  return (
    <Wrapper {...delegated}>
      {TextTitle}
      {!!audioSrc && <StyledAudioPlayer src={audioSrc} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  --optical-alignment: 8px;

  @media ${QUERIES.mobileAndBelow} {
    --optical-alignment: 2px;
  }
`;

const WordLabel = styled(HeadingLarge)`
  color: hsl(var(--color-text));

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 24px;

  @media ${QUERIES.mobileAndBelow} {
    font-size: ${32 / 16}rem;
    line-height: ${38/16}rem;
  }
`;

const PhoneticLabel = styled(HeadingMedium)`
  margin-top: var(--optical-alignment);
  color: hsl(var(--color-accent));

  @media ${QUERIES.mobileAndBelow} {
    /* body medium styles */
    font-size: ${18 / 16}rem;
    line-height: ${24 / 16}rem;
  }
`;

const StyledAudioPlayer = styled(AudioPlayer)`
  margin-top: var(--optical-alignment);;
`;

export default SearchResultTitle;
