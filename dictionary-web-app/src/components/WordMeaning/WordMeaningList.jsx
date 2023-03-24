import React from "react";
import styled from "styled-components";

import { BodyMedium, HeadingSmall } from "../Typography";
import { QUERIES } from "../../constants";

const WordMeaningList = ({ definitions, ...delegated }) => {
  return (
    <div {...delegated}>
      <MeaningLabel>Meaning</MeaningLabel>
      <List>
        {definitions.map((definition, index) => (
          <ListItem key={index}>
            <ListItemText as="span">{definition.definition}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

const MeaningLabel = styled(HeadingSmall)`
  color: hsl(var(--color-text-secondary));

  @media ${QUERIES.mobileAndBelow} {
    font-size: ${18/16}rem;
  }
`;

const List = styled.ul`
  margin-top: 24px;
  padding-left: 24px;
`;

const ListItem = styled.li`
  list-style: inside;

  &::marker {
    color: hsl(var(--color-accent));
  }

  &:not(:last-of-type) {
    margin-bottom: 12px;
  }
`;

const ListItemText = styled(BodyMedium)`
  color: hsl(var(--color-text));

  @media ${QUERIES.mobileAndBelow} {
    font-size: ${16/16}rem;
  }
`;

export default WordMeaningList;
