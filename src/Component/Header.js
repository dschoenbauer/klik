import logo from '../img/logo.svg';
import React, { Component } from 'react';

import "./Header.scss";
import { Link } from 'react-router-dom';
import data from '../Data/Data.json'
import { Phone } from './Contact/Phone';
import { SMS } from './Contact/SMS';
import { Facebook } from './Contact/Facebook';
import { Location } from './Contact/Location';

export default class Header extends Component {
	render() {
		const { title, about: { facebook, telephone, location } } = data;
		return <header {...this.props}>
			<div className="header__image-container">
				<Link to="/">
					<img className="header__image" alt="logo" src={logo} />
				</Link>
			</div>
			{this.props.children}
			<ul className="header__social">				
				<li className="header__social-item"><Facebook href={facebook}></Facebook> </li>
				<li className="header__social-item"><Phone telephone={telephone}></Phone> </li>
				<li className="header__social-item"><SMS telephone={telephone} message="Hello Krystle-"></SMS> </li>
				<li className="header__social-item"><Location href={location}></Location> </li>
			</ul>
		</header>;
	}
}