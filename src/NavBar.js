import React from 'react'
import { Icon } from 'semantic-ui-react'
import styled from "styled-components";

const NavBar = (props) => {

    return (
      <NavContainer>
      <UlTag>
      <LiTag><LogoImg alt="logo" src="logo_ccbs.JPG" /></LiTag>
      <LiTag><h5><Icon name='clock outline' />business hours</h5><p>Mon-Fri 9am-6pm</p></LiTag>
      <LiTag><h5><Icon name='phone' />phone</h5></LiTag>
      <LiTag><h5><Icon name='home' />address</h5></LiTag>
      </UlTag>

    </NavContainer>
    )

}

const PTag = styled.li`

`;

const UlTag = styled.ul`
   list-style-type: none;
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
`;

const LiTag = styled.li`

`;


const NavContainer = styled.div`

`;

const LogoImg = styled.img`
   height: 10vh;
`;

export default NavBar;
