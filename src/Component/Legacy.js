
import Header from './Header';
import { Phone } from './Contact/Phone';
import { SMS } from './Contact/SMS';
import { Facebook } from './Contact/Facebook';
import { Instagram } from './Contact/Instagram';
import { Location } from './Contact/Location';
import ScrollToTop from './ScrollToTop';
import data from '../Data/Data.json'

import React, { Component } from 'react';
import Footer from './Footer';
import './Legacy.scss';

export default class Legacy extends Component {

	render() {
		const { about: { facebook, telephone, location, instagram } } = data;
		return <> 
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
				{this.props.children}
			</div>
			<Footer></Footer>
		</>
	}
}