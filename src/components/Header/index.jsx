import React from "react";
import styled, {keyframes} from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
`;

const ReanderAnimate = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 100%;
    transform: translateY(0);
  }
`;

const Title = styled.h1`
  font-size: 72px;
  font-weight: 300;
  font-family: 'Bebas Neue', cursive;
  color: #222;
  text-shadow: 2px 2px 1px gray;
  animation: ${ReanderAnimate} 1s ease-in-out;

`;

const SubTitle = styled.h1`
  font-size: 48px;
  font-weight: 300;
  font-family: 'Bebas Neue', cursive;
  color: #555;
  text-shadow: 2px 2px 1px gray;
  animation: ${ReanderAnimate} 1s ease-in-out;
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
