import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Noto+Sans+KR:wght@100;300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
    background-color: #e5e5e5;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle/>
		<App/>
	</React.StrictMode>,
	document.getElementById('root')
);
