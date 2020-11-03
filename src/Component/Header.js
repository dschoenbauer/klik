import logo from '../img/logo.svg';
import React, { Component } from 'react';

import "./Header.scss";
import { Link } from 'react-router-dom';

export default class Header extends Component {
	render() {
		return <header {...this.props}>
			<div className="header__image-container">
				<Link to="/">
					<img className="header__image" alt="logo" src={logo} />
				</Link>
			</div>
			{this.props.children}
		</header>;
	}
}