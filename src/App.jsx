import React, {useState} from "react";
import styled, {createGlobalStyle, keyframes} from "styled-components";
import Header from "./components/Header";
import Tip from "./components/Tip";

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

const ReanderAnimate = keyframes`
  0% {
    opacity: 0;
  }
	60% {
		opacity: 0%;
	}
  100% {
    opacity: 65%;
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
  animation: ${ReanderAnimate} 1s ease-in-out;
`;

const App = () => {
	const [isOpen, setIsOpen] = useState(false);
	
	const onClickShowTip = () => {
		setIsOpen(true);
	}
	
	return (
		<Container>
			<GlobalStyle/>
			<Header/>
			<ShowTip onClick={onClickShowTip}>?</ShowTip>
			<Tip v={isOpen}/>
		</Container>
	)
		;
};

export default App;
