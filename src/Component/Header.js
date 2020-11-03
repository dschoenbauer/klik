import logo from '../img/logo.png';
import React, { Component } from 'react';

import "./Header.css";

export default class Header extends Component {
	render() {
		return <header {...this.props}>
			<div className="header__image-container">
				<img className="header__image" alt="logo" src={logo} />
			</div>
			{this.props.children}
		</header>;
	}
}