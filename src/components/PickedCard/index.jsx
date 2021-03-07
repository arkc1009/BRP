import React, {useState} from "react";
import styled from "styled-components";
import Blank from "../../atomic/Blank";
import OpacityAnimate from "../../animations/RenderAnimate/OpacityAnimate";
import BorderAnimate from "../../animations/BorderAnimate";

const ResultCard = styled.div`
  width: 420px;
  height: 420px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 1px 1px 7px gray;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  position: relative;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    top: calc(-1 * 2px);
    left: calc(-1 * 2px);
    height: calc(100% + 2px * 2);
    width: calc(100% + 2px * 2);
    background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
    border-radius: calc(2 * 17px);
    z-index: -1;
    opacity: 18%;
    animation: ${BorderAnimate} 3s ease alternate infinite;
    background-size: 300% 300%;
  }
`;

const Counter = styled.span`
  display: block;
  font-family: 'Bebas Neue', cursive;
  font-weight: bold;
  font-size: 24px;
  color: #555;
  text-shadow: 1px 1px 1px gray;
  animation: ${OpacityAnimate} 1s ease-in;
`;

const CardText = styled.span`
  font-family: 'Bebas Neue', cursive;
  font-size: 52px;
  animation: ${OpacityAnimate} 1s;
`;

const Kind = styled.span`
  color: ${props => props.kind};
  text-shadow: 2px 2px 5px #ccc;
`;

// 원본
// {num: 1, kind: "spade"}
// , {num: 2, kind: "spade"}
// , {num: 3, kind: "spade"}
// , {num: 4, kind: "spade"}
// , {num: 5, kind: "spade"}
// , {num: 6, kind: "spade"}
// , {num: 7, kind: "spade"}
// , {num: 8, kind: "spade"}
// , {num: 9, kind: "spade"}
// , {num: 10, kind: "spade"}
// , {num: 11, kind: "spade"}
// , {num: 12, kind: "spade"}
// , {num: 13, kind: "spade"}
// , {num: 1, kind: "heart"}
// , {num: 2, kind: "heart"}
// , {num: 3, kind: "heart"}
// , {num: 4, kind: "heart"}
// , {num: 5, kind: "heart"}
// , {num: 6, kind: "heart"}
// , {num: 7, kind: "heart"}
// , {num: 8, kind: "heart"}
// , {num: 9, kind: "heart"}
// , {num: 10, kind: "heart"}
// , {num: 11, kind: "heart"}
// , {num: 12, kind: "heart"}
// , {num: 13, kind: "heart"}
// , {num: 1, kind: "diamond"}
// , {num: 2, kind: "diamond"}
// , {num: 3, kind: "diamond"}
// , {num: 4, kind: "diamond"}
// , {num: 5, kind: "diamond"}
// , {num: 6, kind: "diamond"}
// , {num: 7, kind: "diamond"}
// , {num: 8, kind: "diamond"}
// , {num: 9, kind: "diamond"}
// , {num: 10, kind: "diamond"}
// , {num: 11, kind: "diamond"}
// , {num: 12, kind: "diamond"}
// , {num: 13, kind: "diamond"}
// , {num: 1, kind: "clover"}
// , {num: 2, kind: "clover"}
// , {num: 3, kind: "clover"}
// , {num: 4, kind: "clover"}
// , {num: 5, kind: "clover"}
// , {num: 6, kind: "clover"}
// , {num: 7, kind: "clover"}
// , {num: 8, kind: "clover"}
// , {num: 9, kind: "clover"}
// , {num: 10, kind: "clover"}
// , {num: 11, kind: "clover"}
// , {num: 12, kind: "clover"}
// , {num: 13, kind: "clover"}

const PickedCard = () => {
	const [cards, setCards] = useState([
		{num: 1, kind: "spade"}
		, {num: 2, kind: "spade"}
		, {num: 3, kind: "spade"}
		, {num: 4, kind: "spade"}
		, {num: 5, kind: "spade"}
		, {num: 6, kind: "spade"}
		, {num: 7, kind: "spade"}
		, {num: 1, kind: "heart"}
		, {num: 2, kind: "heart"}
		, {num: 3, kind: "heart"}
		, {num: 4, kind: "heart"}
		, {num: 5, kind: "heart"}
		, {num: 6, kind: "heart"}
		, {num: 7, kind: "heart"}
		, {num: 1, kind: "diamond"}
		, {num: 2, kind: "diamond"}
		, {num: 3, kind: "diamond"}
		, {num: 4, kind: "diamond"}
		, {num: 5, kind: "diamond"}
		, {num: 6, kind: "diamond"}
		, {num: 7, kind: "diamond"}
		, {num: 1, kind: "clover"}
		, {num: 2, kind: "clover"}
		, {num: 3, kind: "clover"}
		, {num: 4, kind: "clover"}
		, {num: 5, kind: "clover"}
		, {num: 6, kind: "clover"}
		, {num: 7, kind: "clover"}
	]);
	const [flag, setFlag] = useState(undefined);
	
	const createCard = () => {
		if (cards.length <= 0) {
			alert('남은 카드가 없습니다!');
			return;
		}
		
		setFlag(Math.floor(Math.random() * (cards.length - 1)));
		setCards(cards.filter((card, i) => i !== flag));
	}
	
	const printCard = () => {
		if (cards.length <= 0) {
			return <CardText>Press F5!</CardText>
		}
		if (flag === undefined) {
			return <CardText>Click!</CardText>;
		}
		return <CardText>
			<Kind kind={judgmentKind(cards[flag])}>{cards[flag].kind}</Kind> : <Kind kind={'spade'}>{cards[flag].num}</Kind>
		</CardText>;
	}
	
	const judgmentKind = (e) => {
		if (e.kind === 'diamond') {
			return 'cornflowerblue';
		} else if (e.kind === 'clover') {
			return 'forestgreen';
		} else if (e.kind === 'heart') {
			return 'salmon';
		}
		return '#444';
	}
	
	return (
		<>
			<ResultCard onClick={createCard}>{printCard()}</ResultCard>
			<Blank size={1.3}/>
			<Counter>Left Card = {cards.length}</Counter>
		</>
	)
}

export default PickedCard;
