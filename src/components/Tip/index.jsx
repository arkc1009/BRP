import React, {useState} from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 700px;
  height: 100px;
  left: 50%;
  top: 9%;
  transform: translate(-50%, -50%);
  background-color: black;
  box-shadow: 2px 2px 2px gray;
  opacity: 50%;
  z-index: 10;
  padding: 2rem;
  border-radius: 30px;
  display: ${props => props.v ? 'flex' : 'none'};
  align-items: center;
  justify-content: space-around;
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

const Tip = (props) => {
	const [onModal, setOnModal] = useState(props.v);
	
	const clickedBtn = () => {
		setOnModal(false);
	}
	
	return (
		<Container v={onModal}>
			<TipText>하트, 클로버 = 스쿼트 / 다이아 = 왼발 런지 / 스페이드 = 오른발 런지</TipText>
			<CloseButton onClick={clickedBtn}/>
		</Container>
	)
}

export default Tip;
