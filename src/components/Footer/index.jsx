import React from "react";
import styled from "styled-components";
import Blank from "../../atomic/Blank";

const Container = styled.footer`
  min-height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CopyText = styled.p`
  font-family: 'Nanum Gothic', sans-serif;
  color: #555;
  opacity: 60%;
  font-weight: bold;
	text-align: center;
  @media screen and (max-width: 420px) {
    font-size: 12px;
  }
`;

const SmallText = styled.span`
  font-size: 14px;
  @media screen and (max-width: 420px) {
    font-size: 8px;
  }
`;

const LinkText = styled.a`
  text-decoration: none;
  color: #222;
  font-size: 32px;
  font-weight: bold;
  opacity: 70%;
  padding-bottom: .3rem;
  border-bottom: 5px solid rgba(34, 34, 34, 0.8);
  display: block;
`;

const Footer = () => {
	return <Container>
		<CopyText>&copy; 2021. <SmallText>DongJin Han / Bottom Training Random Pokers</SmallText> All Rights
			Reserved.</CopyText>
		<Blank size={7}/>
		<LinkText href='https://github.com/arkc1009'>GitHub</LinkText>
		<Blank size={7}/>
	</Container>
}

export default Footer;
