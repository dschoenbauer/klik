import React from 'react';
import Analytics from 'react-router-ga';

import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import Contact from './Layout/Contact';
import Product from './Layout/Product';
import ProductDetail from './Layout/ProductDetail';
import Home from './Layout/Home';
import Studio from './Layout/About/Studio';
import Photographer from './Layout/About/Photographer';
import Choice from './Component/Choice';
import Lux from './Component/Lux';



function App() {
	const id = 'UA-87907665-1';
	return (
		<div className="App">
			<Router>
					<Analytics id={id}>
						<Switch>
							<Route exact path="/" component={Choice} />
							<Route exact path="/lux" component={Lux} />
							<Route exact path="/classic" component={Home} />
							<Route exact path="/about" component={Photographer} />
							<Route path="/about/studio" component={Studio} />
							<Route path="/about/photographer" component={Photographer} />
							<Route path="/contact" component={Contact} />
							<Route exact path="/portfolio" component={Product} />
							<Route path="/portfolio/:portfolio" component={ProductDetail} />
						</Switch>
					</Analytics>
			</Router>
		</div>
	);
}

export default App;