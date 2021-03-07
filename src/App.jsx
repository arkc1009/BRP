import React, {useState} from "react";
import styled, {createGlobalStyle} from "styled-components";
import Header from "./components/Header";
import ModalAnimate from "./animations/ModalAnimate";
import RenderShowTip from "./animations/RenderAnimate/RenderShowTip";

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Noto+Sans+KR:wght@100;300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
    margin: 0;
    padding: 0;
    background-color: #e5e5e5;
    font-family: 'Bebas Neue', cursive;
    font-family: 'Noto Sans KR', sans-serif;
    font-family: 'Nanum Gothic', sans-serif;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  position: relative;
  padding-top: 5rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShowTip = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #777;
  outline: none;
  margin-top: -4rem;
  border: none;
  box-shadow: 1px 1px 3px black;
  opacity: 65%;
  font-weight: bold;
  color: #ccc;
  cursor: pointer;
  animation: ${RenderShowTip} 1s ease-in-out;
`;

const ModalContainer = styled.div`
  position: absolute;
  width: 700px;
  height: 50px;
  left: 50%;
  top: 9%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 2px 2px 2px gray;
  opacity: 70%;
  z-index: 10;
  padding: 1.8rem;
  border-radius: 30px;
  display: ${props => props.v ? 'flex' : 'none'};
  align-items: center;
  justify-content: space-around;
  animation: ${ModalAnimate} 1s;
`;

const TipText = styled.p`
  color: white;
  opacity: 70%;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  font-size: 18px;
`;

const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ff0000;
  opacity: 80%;
  outline: none;
`;

const App = () => {
	const [isOpen, setIsOpen] = useState(false);
	
	const clickedCloseBtn = () => {
		setIsOpen(false);
	}
	
	const onClickShowTip = () => {
		setIsOpen(true);
	}
	
	return (
		<Container>
			<GlobalStyle/>
			<Header/>
			<ShowTip onClick={onClickShowTip}>?</ShowTip>
			
			<ModalContainer v={isOpen}>
				<TipText>하트, 클로버 = 스쿼트 / 다이아 = 왼발 런지 / 스페이드 = 오른발 런지</TipText>
				<CloseButton onClick={clickedCloseBtn}/>
			</ModalContainer>
		</Container>
	)
		;
};

export default App;
