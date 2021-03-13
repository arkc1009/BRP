import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter} from "react-router-dom";
import '../src/style/global.css';
import App from './App.jsx';
import FirstPage from "./FirstPage";


ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Route exact path='/' component={FirstPage}/>
			<Route path='/main' component={App}/>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
