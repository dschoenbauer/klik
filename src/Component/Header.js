import logo from '../img/logo.svg';
import React, { Component } from 'react';

import "./Header.scss";
import { Link } from 'react-router-dom';

export default class Header extends Component {
	render() {
		const facebook = "";
		const telephone = "";
		return <header {...this.props}>
			<div className="header__image-container">
				<Link to="/">
					<img className="header__image" alt="logo" src={logo} />
				</Link>
			</div>
			{this.props.children}
            <ul className="header__social">
                <li className="header__social-item"><a title='KLiK Foley' target="_blank" rel="noopener noreferrer" href={facebook}><i className="fa fa-facebook-f"></i></a></li>
                <li className="header__social-item"><a title='KLiK Foley' target="_blank" rel="noopener noreferrer" href={`tel:${telephone}`}><i className="fa fa-phone"></i></a></li>
                <li className="header__social-item"><a title='KLiK Foley' target="_blank" rel="noopener noreferrer" href={`tel:${telephone}`}><i className="fa fa-map-marker"></i></a></li>
            </ul>
		</header>;
	}
}