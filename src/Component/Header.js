import logo from "../img/logo.png";
import React, { Component } from 'react';
import { Media } from '../Data/Media.js';

import "./Header.css";

export default class Header extends Component {
	getMenuItem(data) {
		console.log(data);
		const { label, route } = data;
		if(data.children && Array.isArray(data.children) && data.children.length > 0){

		}
		return <li className="header__navigation-item"><a href={route}>{label}</a></li>;
	}

	render() {
		const menuItems = Media.menu.map(menu => {
			return this.getMenuItem(menu);
		})

		return <header {...this.props}>
			<div className="header__image-container">
				<img className="header__image" alt="logo" src={logo} />
			</div>
			<nav className="header__navigation">
				{menuItems}
			</nav>
		</header>;
	}
}