import React from "react";
import styled from "styled-components";

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
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </FreeQuoteContainer>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  /* display: flex; */
  /* flex-direction: row-reverse; */
  width: 100%;
  height: 100vh;
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
`;

export default Banner;
