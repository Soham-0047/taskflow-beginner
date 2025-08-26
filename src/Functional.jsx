import React from 'react'
import styled from 'styled-components';

const Functional = () => {

  return (
    <>
    <Header>
        <Navbar>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </Navbar>
    </Header>
    </>
  )
}

export default Functional;

const Navbar = styled.ul`
list-style-type:none;
display:flex;
justify-content:center;
gap: 30px;
color:black;
font-size:20px;
font-weight:bold;
cursor:pointer;
`;

const Header = styled.header`
  width:100%;
  height: 50px;
`;

