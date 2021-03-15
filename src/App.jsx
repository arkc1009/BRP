import React, {useState, useEffect} from "react";
import {Route, BrowserRouter} from "react-router-dom";
import MainPage from './MainPage';
import FirstPage from "./FirstPage";

const App = () => {
	const [isSetting, setIsSetting] = useState(false);
	
	return (
		<BrowserRouter>
			<Route exact path='/' component={FirstPage}/>
			<Route path='/main' component={MainPage}/>
		</BrowserRouter>
	);
}

export default App;
