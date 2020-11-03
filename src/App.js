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
import Contact from './Layout/Contact';
import Product from './Layout/Product';
import ProductDetail from './Layout/ProductDetail';

function App() {
	return (
		<div className="App">
			<Router>
				<Header className="header">
					<Menu></Menu>
				</Header>
				<Switch>
					<Route exact path="/"  component={About} />
					<Route path="/about" component={About} />
					<Route exact path="/product"  component={Product} />
					<Route path="/contact"  component={Contact} />
					<Route path="/product/:productKey" component={ProductDetail} />
				</Switch>
				<Footer></Footer>
			</Router>
		</div>
	);
}

export default App;