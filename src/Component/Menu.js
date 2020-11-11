import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu as MenuData } from '../Data/Menu.js';
import "./Menu.scss";

export default class Menu extends Component {
	getMenuItem(data, idx) {
		const { label, route, children = [], external = false } = data;
		let childrenDom = null;
		if (children && Array.isArray(children) && children.length > 0) {
			const items = data.children.map((menu, idx) => {
				return this.getMenuItem(menu, idx, route);
			})
			childrenDom = <ul className="menu__sub-menu">{items}</ul>;
		}
		return <li key={idx} className="menu__item">
			{!external &&
				<NavLink  className="menu__link" activeClassName="menu__link--active" to={route} onClick={this.props.handler} >{label}</NavLink >
			}
			{external &&
				<a target="_blank" rel="noopener noreferrer" className="menu__link" href={route} onClick={this.props.handler} >{label}</a>
			}
 			{childrenDom}
		</li>;
	}

	render() {
		const {className = ""} = this.props;
		return <nav className={`menu ${className}`}>
			{MenuData.menu.map((menu, idx) => { return this.getMenuItem(menu, idx);})}
		</nav>;
	}
}