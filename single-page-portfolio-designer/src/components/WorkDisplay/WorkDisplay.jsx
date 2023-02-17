import React from "react";
import styled from "styled-components";

import Carousel from "../Carousel";
import { HeadingSmall } from "../TextTypes";

import { QUERIES } from "../../constants";

function WorkDisplay() {
  return (
    <Wrapper aria-labelledby="carousel-heading">
      <HeadingSmall id="carousel-heading">My Work</HeadingSmall>
      <Carousel>
        <Carousel.Item src="/image-slide-1.jpg" />
        <Carousel.Item src="/image-slide-2.jpg" />
        <Carousel.Item src="/image-slide-3.jpg" />
        <Carousel.Item src="/image-slide-4.jpg" />
        <Carousel.Item src="/image-slide-5.jpg" />
      </Carousel>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 88px;
  text-align: center;
  --inner-spacing: 56px;
  --overflow-offset: calc(-1 * var(--padding-x));

  @media ${QUERIES.tabletAndBelow} {
    overflow: hidden;
    margin: 120px var(--overflow-offset);
    margin-bottom: 0;
  }

  @media ${QUERIES.mobileAndBelow} {
    margin: 100px var(--overflow-offset);
    margin-bottom: 0;
  }
`;


export default WorkDisplay;
