import React from "react";
import styled from "styled-components";

import WordMeaningList from "./WordMeaningList";
import WordMeaningSynonym from "./WordMeaningSynonym";
import WordMeaningTitle from "./WordMeaningTitle";

import { QUERIES } from "../../constants";

function WordMeaning({ meaning, ...delegated }) {
  return (
    <div {...delegated}>
      <Title title={meaning.partOfSpeech} />
      <DefinitionList definitions={meaning.definitions} />
      <Synonyms synonyms={meaning.synonyms} />
    </div>
  );
}

const Title = styled(WordMeaningTitle)``;

const DefinitionList = styled(WordMeaningList)`
  margin-top: 32px;

  @media ${QUERIES.mobileAndBelow} {
    margin-top: 18px;
  }
`;

const Synonyms = styled(WordMeaningSynonym)`
  margin-top: 32px;

  @media ${QUERIES.mobileAndBelow} {
    margin-top: 28px;
  }
`;

export default WordMeaning;
