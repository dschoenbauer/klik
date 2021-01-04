import React from 'react';
import Analytics from 'react-router-ga';

import './App.css';
import Footer from './Component/Footer.js';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import Header from './Component/Header';
import Contact from './Layout/Contact';
import Product from './Layout/Product';
import ProductDetail from './Layout/ProductDetail';
import data from './Data/Data.json'

import { Phone } from './Component/Contact/Phone';
import { SMS } from './Component/Contact/SMS';
import { Facebook } from './Component/Contact/Facebook';
import { Instagram } from './Component/Contact/Instagram';
import { Location } from './Component/Contact/Location';
import ScrollToTop from './Component/ScrollToTop';
import Home from './Layout/Home';
import Studio from './Layout/About/Studio';
import Photographer from './Layout/About/Photographer';



function App() {
	const id = 'UA-87907665-1';
	const { about: { facebook, telephone, location, instagram } } = data;

	return (
		<div className="App">
			<Router>
				<ScrollToTop />
				<Header className="header"></Header>
				<ul className="social">
					<li className="social__item"><Instagram href={instagram}></Instagram> </li>
					<li className="social__item"><Facebook href={facebook}></Facebook> </li>
					<li className="social__item"><Phone telephone={telephone}></Phone> </li>
					<li className="social__item"><SMS telephone={telephone} message="Hello Krystle-"></SMS> </li>
					<li className="social__item"><Location href={location}></Location> </li>
				</ul>
				<div className="content">
					<Analytics id={id}>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/about" component={Photographer} />
							<Route path="/about/studio" component={Studio} />
							<Route path="/about/photographer" component={Photographer} />
							<Route path="/contact" component={Contact} />
							<Route exact path="/portfolio" component={Product} />
							<Route path="/portfolio/:portfolio" component={ProductDetail} />
						</Switch>
					</Analytics>
				</div>
				<Footer></Footer>
			</Router>
		</div>
	);
}

export default App;