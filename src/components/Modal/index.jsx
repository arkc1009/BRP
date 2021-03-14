import React from "react";
import styled from "styled-components";
import ModalAnimate from "../../animations/ModalAnimate";
import BorderAnimate from "../../animations/BorderAnimate";

const ModalContainer = styled.div`
  position: absolute;
  width: 700px;
  height: 50px;
  left: 50%;
  top: 5%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 2px 2px 2px gray;
  opacity: 70%;
  z-index: 10;
  padding: 1.8rem;
  border-radius: 30px;
  display: ${(props) => (props.v ? "flex" : "none")};
  align-items: center;
  justify-content: space-around;
  animation: ${ModalAnimate} 1s;
`;

const TipText = styled.p`
  color: black;
  opacity: 80%;
  font-family: "Nanum Gothic", sans-serif;
  font-weight: 1000;
  font-size: 18px;
`;

const CloseButton = styled.button`
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background-color: #fff;
  opacity: 100%;
  outline: none;
  cursor: pointer;
  position: relative;
  border: none;
  box-shadow: 1px 1px 5px black;

  &:after {
    content: "";
    position: absolute;
    top: calc(-1 * 1px);
    left: calc(-1 * 1px);
    height: calc(100% + 1px * 2);
    width: calc(100% + 1px * 2);
    background: linear-gradient(
      60deg,
      #f79533,
      #f37055,
      #ef4e7b,
      #a166ab,
      #5073b8,
      #1098ad,
      #07b39b,
      #6fba82
    );
    border-radius: calc(2 * 50%);
    z-index: -1;
    animation: ${BorderAnimate} 3s ease alternate infinite;
    background-size: 300% 300%;
  }
`;

const Modal = ({ v, handleCloseBtnClick }) => {
  return (
    <ModalContainer v={v}>
      <TipText>
        하트, 클로버 = 스쿼트 / 다이아 = 왼발 런지 / 스페이드 = 오른발 런지
      </TipText>
      <CloseButton onClick={handleCloseBtnClick} />
    </ModalContainer>
  );
};

export default Modal;
