import React from "react";
import styled from "styled-components";
import { Button, Icon } from "semantic-ui-react";

const Banner = props => {
  return (
    <BannerContainer>
      <StyledFigure>
        <StyledImg />
      </StyledFigure>
      <FreeQuoteContainer>
        <h2> About us </h2>
        <p>
          Care Consultants Better Solutions, Inc. offers release of information services nationwide.
            We cater our services to meet your direct needs,
            and always process any and all of your requests at <strong>NO COST</strong> – to include your non-billable medical records requests.
            We have been in business since 2002, and pride ourselves on the motto of "Patient Care Focused Release of Information Services."
        </p>
        <Button as={AnchorTag} href="/#form" to onClick={props.showForm} animated="fade">
          <Button.Content visible> Contact Us </Button.Content>
          <Button.Content hidden>
            <Icon name="mail" />
          </Button.Content>
        </Button>
      </FreeQuoteContainer>
    </BannerContainer>
  );
};


const AnchorTag = styled.a``;

const BannerContainer = styled.div`
  /* display: flex; */
  /* flex-direction: row-reverse; */
  width: 100%;
  height: 100vh;
  /* margin-bottom: 5%; */
`;

const StyledImg = styled.img`
  height: 80vh;
  display: block;
  margin: auto;
  max-width: 100%;
  width: 100%;
  background-color: gray;
`;

const StyledFigure = styled.figure`
  margin: 0;
`;

const FreeQuoteContainer = styled.div`
  background-color: white;
  position: absolute;
  top: 40vh;
  left: 5%;
  /* -webkit-transform: translate(-50%,-50%);
-ms-transform: translate(-50%,-50%);
transform: translate(-50%,-50%); */
  padding: 2% 5%;
  width: 600px;
  border-radius: 2%;
  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 0;
    height: 0;
    border-top: solid 50px white;
    border-left: solid 50px transparent;
  }
`;

export default Banner;
