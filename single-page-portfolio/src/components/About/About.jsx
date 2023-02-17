import React from "react";
import styled from "styled-components";

import LinkButton from "../LinkButton";
import { BodyText, HeadingMedium } from "../TextTypes";

import { QUERIES } from "../../constants";

const About = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <HeadingMedium>
          I'm Amy, and I'd love to work on your next project
        </HeadingMedium>
        <Body>
          I love working with others to create beautiful design solutions. I've
          designed everything from brand illustrations to complete mobile apps.
          I'm also handy with a camera!
        </Body>
        <Button href="/consultation" variant="secondary">
          Free Consultation
        </Button>
      </TextWrapper>
      <ImageWrapper>
        <Image src="/image-amy.webp" alt="Amy, portfolio owner" />
      </ImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 64px;
  margin-top: 136px;
  direction: rtl; /* overflow image left */

  & > * {
    direction: ltr;
  }

  @media ${QUERIES.tabletAndBelow} {
    margin-top: 120px;
  }

  @media ${QUERIES.mobileAndBelow} {
    margin-top: 100px;
    flex-direction: column-reverse;
    gap: 0px;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.mobileAndBelow} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 85%;
  min-width: 410px;
  max-width: 460px;

  @media ${QUERIES.mobileAndBelow} {
    min-width: revert;
    width: 300px;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  min-width: min(450px, 65%, 100%);

  @media ${QUERIES.mobileAndBelow} {
    text-align: center;
    margin-top: 40px;
  }
`;

const Body = styled(BodyText)`
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndBelow} {
    margin-top: 24px;
  }

  @media ${QUERIES.mobileAndBelow} {
    margin-bottom: 24px;
  }
`;

const Button = styled(LinkButton)`
  @media ${QUERIES.mobileAndBelow} {
    margin: 0 auto;
  }
`;

export default About;
