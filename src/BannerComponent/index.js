import React from "react";
import styled from "styled-components";
import { Button, Icon } from "semantic-ui-react";

const Banner = props => {
  return (
    <BannerContainer>
      <StyledFigure>
        <StyledImg alt="Banner" src="https://picsum.photos/id/1012/3973/2639" />
      </StyledFigure>
      <FreeQuoteContainer>
        <h2> Information thing Services </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button animated="fade">
          <Button.Content visible> Get a free quote </Button.Content>
          <Button.Content hidden>
            <Icon name="mail" />
          </Button.Content>
        </Button>
      </FreeQuoteContainer>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  /* display: flex; */
  /* flex-direction: row-reverse; */
  width: 100%;
  height: 100vh;
  /* margin-bottom: 5%; */
`;

const StyledImg = styled.img`
  height: 100vh;
  display: block;
  margin: auto;
  max-width: 100%;
  width: 100%;
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
