import React from 'react'
import { Icon } from 'semantic-ui-react'
import styled from "styled-components";

const NavBar = (props) => {

    return (
      <NavContainer>
      <UlTag>
      <LiTag><LogoImg alt="logo" src="logo_ccbs.JPG" /></LiTag>
      <LiTag><Icon name='clock outline' />business hours</LiTag>
      <LiTag><Icon name='phone' />phone</LiTag>
      <LiTag><Icon name='home' />address</LiTag>
      </UlTag>

    </NavContainer>
    )

}


const UlTag = styled.ul`
   list-style-type: none;
`;

const LiTag = styled.li`
    float: left;
`;


const NavContainer = styled.div`
   border: 1px solid #87919e;
   float: right;
   max-width: 100%;
   width: 100%;
`;

const LogoImg = styled.img`
   height: 10vh;
`;
export default NavBar;
