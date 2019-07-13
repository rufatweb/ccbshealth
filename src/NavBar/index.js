import React from 'react'
import { Icon } from 'semantic-ui-react'
import styled from "styled-components";

const NavBar = (props) => {

    return (
      <NavContainer>
      <UlTag>
      <LiTag><LogoImg alt="logo" src="logo-ccbs.JPG" /></LiTag>
      <LiTag><Icon name='clock outline' /><H5pContainer><h5>business hours</h5><PTag>Mon-Fri 9am-6pm</PTag></H5pContainer></LiTag>
      <LiTag><Icon name='phone' /><H5pContainer><h5>phone</h5><PTag>(954) 299-5071</PTag></H5pContainer></LiTag>
      <LiTag><Icon name='home' /><H5pContainer><h5>address</h5><PTag>300 E Oakland Park Blvd.</PTag></H5pContainer></LiTag>
      </UlTag>

    </NavContainer>
    )

}

const H5pContainer = styled.div`
   margin-left: 5%;
   width: 15em;
`;

const PTag = styled.li`
   height: 10%;
   font-size: 10px;
   color: #505050;
`;

const UlTag = styled.ul`
   margin: 0;
   padding: 2%;
   list-style-type: none;
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
`;

const LiTag = styled.li`
display: flex;
flex-direction: row;
text-align: left;
border-right: 1px solid #A8A8A8;

`;


const NavContainer = styled.div`

`;

const LogoImg = styled.img`
   height: 10vh;
`;

export default NavBar;
