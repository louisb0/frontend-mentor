import React from "react";
import styled from "styled-components";
import { COLORS, QUERIES } from "../../constants";
import LinkButton from "../LinkButton";
import { BodyText, HeadingMedium } from "../TextTypes";

function Booking() {
  return (
    <Wrapper>
      <TextWrapper>
        <Heading>Book a call with me</Heading>
        <Body>
          I'd love to have a chat to see how I can help you. The best first step
          is for us to discuss your project during a free consultation. Then we
          can move forward from there.
        </Body>
      </TextWrapper>
      <ButtonWrapper>
        <Button variant="secondary">Free Consultation</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${COLORS.black};
  margin-top: 88px;
  padding: 80px 64px;
  border-radius: 10px;

  @media ${QUERIES.tabletAndBelow} {
    margin-top: 120px;
    padding: 56px 72px;
    flex-direction: column;
    text-align: center;
  }

  @media ${QUERIES.mobileAndBelow} {
    margin-top: 100px;
    padding: 48px 24px;
  }
`;

const TextWrapper = styled.div`
  flex: 3;
`;

const Heading = styled(HeadingMedium)`
  color: white;
`;

const Body = styled(BodyText)`
  color: white;
  margin-top: 24px;
`;

const ButtonWrapper = styled.div`
  flex: 2;
`;

const Button = styled(LinkButton)`
  margin-left: auto;

  @media ${QUERIES.tabletAndBelow} {
    margin-top: 42px;
  }

  @media ${QUERIES.mobileAndBelow} {
    margin-top: 24px;
  }
`;

export default Booking;
