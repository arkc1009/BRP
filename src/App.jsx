import React from "react";
import styled, {createGlobalStyle} from "styled-components";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Noto+Sans+KR:wght@100;300&display=swap');
    margin: 0;
    padding: 0;
    background-color: #e5e5e5;
    font-family: 'Bebas Neue', cursive;
    font-family: 'Noto Sans KR', sans-serif;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-top: 5rem;
`;

const App = () => {
	return (
		<Container>
			<GlobalStyle/>
			<Header/>
		
		</Container>
	)
		;
};

export default App;
