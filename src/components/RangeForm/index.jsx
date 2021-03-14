import React, {useState} from "react";
import styled from "styled-components";
import Blank from "../../atomic/Blank";

const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CountsForm = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CountButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  box-shadow: 1px 1px 3px black;
  margin-right: 1rem;
  cursor: pointer;
  outline: none;
  transition: all .1s;

  &:last-child {
    margin-right: 0;
  }

  &:active {
    background-color: #ccc;
  }
`;

const NumberDiv = styled.div`
  margin-right: 1rem;
  font-weight: ${props => props.isConfirm ? 'bold' : 'normal'};
`;

const RangeForm = ({setRange}) => {
	const [minCount, setMinCount] = useState(1);
	const [maxCount, setMaxCount] = useState(13);
	const [isConfirm, setIsConfirm] = useState(false);
	
	const onClickMinDes = () => {
		if (minCount <= 1) return;
		setMinCount(minCount - 1);
	}
	
	const onClickMinInc = () => {
		if (minCount >= 13) return;
		if (minCount >= maxCount) return;
		setMinCount(minCount + 1);
	}
	
	const onClickMaxDes = () => {
		if (maxCount <= 0) return;
		if (maxCount <= minCount) return;
		setMaxCount(maxCount - 1);
	}
	
	const onClickMaxInc = () => {
		if (maxCount >= 13) return;
		setMaxCount(maxCount + 1);
	}
	
	const onClickConfirm = () => {
		setRange([minCount, maxCount]);
		setIsConfirm(isConfirm ? false : true);
	}
	
	return (
		<Container>
			<CountsForm>
				<CountButton
					onClick={onClickMinDes}>-</CountButton>
				<CountButton
					onClick={onClickMinInc}>+</CountButton>
				<NumberDiv isConfirm={isConfirm}>{minCount} ~ {maxCount}</NumberDiv>
				<CountButton
					onClick={onClickMaxDes}>-</CountButton>
				<CountButton
					onClick={onClickMaxInc}>+</CountButton>
			</CountsForm>
			
			<Blank size={1}/>
			
			<button onClick={onClickConfirm}>{!isConfirm ? 'OK!' : 'NO!'}</button>
		</Container>
	);
}

export default RangeForm;
