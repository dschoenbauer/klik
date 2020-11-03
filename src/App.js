import React from 'react';
import './App.css';
import Footer from './Component/Footer.js';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import Menu from './Component/Menu.js';
import Header from './Component/Header';
import About from './Layout/About.js';

function App() {
	return (
		<div className="App">
			<Router>
				<Header className="header">
					<Menu></Menu>
				</Header>
				<Switch>
					<Route path="/"></Route>
					<Route path="/about"><About></About></Route>
					<Route path="/product"></Route>
					<Route path="/product/:productKey"></Route>
				</Switch>
				<Footer></Footer>
			</Router>
		</div>
	);
}

export default App;