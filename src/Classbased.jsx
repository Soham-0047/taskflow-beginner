import React from 'react'
import styled from 'styled-components';

class FooterComp extends React.Component {
    render() {
        return (
        <Footer>
        <FooterContainer>
            <FooterSection>
                <FooterTitle>About Us</FooterTitle>
                <FooterLink>Our Story</FooterLink>
                <FooterLink>Team</FooterLink>
                <FooterLink>Careers</FooterLink>
            </FooterSection>
            <FooterSection>
                <FooterTitle>Services</FooterTitle>
                <FooterLink>Web Development</FooterLink>
                <FooterLink>Design</FooterLink>
                <FooterLink>Marketing</FooterLink>
            </FooterSection>
            <FooterSection>
                <FooterTitle>Contact</FooterTitle>
                <FooterLink>Email</FooterLink>
                <FooterLink>Phone</FooterLink>
                <FooterLink>Address</FooterLink>
            </FooterSection>
        </FooterContainer>
    </Footer>
        )
    }
}

export default FooterComp;

const Footer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px 0;
  width: 100%;
  margin-top:50px;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  max-width:100%;
  margin: 0 auto;
`;

const FooterSection = styled.div`
  flex: 1;
  margin: 0 20px;
  cursor:pointer;
`;

const FooterTitle = styled.h3`
  color: #eee;
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
`;

const FooterLink = styled.a`
  display: block;
  color: #ddd;
  text-decoration: none;
  margin-bottom: 10px;

  &:hover {
    color: #fff;
  }
`;