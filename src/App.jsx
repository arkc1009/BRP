import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import RenderShowTip from "./animations/RenderAnimate/RenderShowTip";
import PickedCard from "./components/PickedCard";
import Blank from "./atomic/Blank";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

const Container = styled.div`
  position: relative;
  padding-top: 2rem;
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

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickedCloseBtn = () => {
    setIsOpen(false);
  };

  const onClickShowTip = () => {
    setIsOpen(true);
  };

  return (
    <Container>
      <Header />
      <ShowTip onClick={onClickShowTip}>?</ShowTip>

      <Blank size={3} />

      <PickedCard />

      <Blank size={3} />

      <Footer />

      <Modal v={isOpen} handleCloseBtnClick={clickedCloseBtn} />
    </Container>
  );
};

export default App;
