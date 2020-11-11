import logo from '../img/logo.svg';
import React, { Component } from 'react';

import "./Header.scss";
import { Link } from 'react-router-dom';
import Menu from './Menu';


export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = { isActive: false };
	}
	toggleMenu() {
		this.setState({ isActive: !this.state.isActive });
		console.log(this.state);
	}
	render() {
		return <header {...this.props}>
			<div className="header__image-container">
				<Link to="/">
					<img className="header__image" alt="logo" src={logo} />
				</Link>
			</div>
			<Menu className={`${this.state.isActive ? "menu--active" : ""}`}></Menu>
			<Link className="header__menu-control" to="#" onClick={() => this.toggleMenu()}><i className="fa fa-bars"></i></Link>
		</header>;
	}
}