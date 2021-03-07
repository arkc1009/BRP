import React from "react";
import styled from "styled-components";
import FirstRender from "../../animations/RenderAnimate/FirstRender";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
`;

const Title = styled.h1`
  font-size: 72px;
  font-weight: 300;
  font-family: 'Bebas Neue', cursive;
  color: #222;
  text-shadow: 2px 2px 1px gray;
  animation: ${FirstRender} 1s ease-in-out;
  @media screen and (max-width: 420px) {
    font-size: 64px;
    text-shadow: 1px 1px 1px gray;
  }
`;

const SubTitle = styled.h1`
  font-size: 48px;
  font-weight: 300;
  font-family: 'Bebas Neue', cursive;
  color: #555;
  text-shadow: 2px 2px 1px gray;
  animation: ${FirstRender} 1s ease-in-out;
  @media screen and (max-width: 420px) {
    font-size: 24px;
    text-shadow: 1px 1px 1px gray;
  }
`;

const Header = () => {
	return (
		<StyledHeader>
			<Title>BRP</Title>
			<SubTitle>Bottom Random Pokers</SubTitle>
		</StyledHeader>
	)
}

export default Header;
