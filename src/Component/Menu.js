import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu as MenuData } from '../Data/Menu.js';
import "./Menu.scss";

export default class Menu extends Component {
	getMenuItem(data, idx, parentRoot = null) {
		const { label, route, children = [] } = data;
		let childrenDom = "";
		if (children && Array.isArray(children) && children.length > 0) {
			const items = data.children.map((menu, idx) => {
				return this.getMenuItem(menu, idx, "/" + route);
			})
			childrenDom = <ul className="menu__sub-menu">{items}</ul>;
		}
		const path = (parentRoot ? parentRoot : "") + `/${route}`;
		return <li key={idx} className="menu__item">
			<NavLink  className="menu__link" activeClassName="menu__link--active" to={path}>{label}</NavLink >
			{childrenDom}
		</li>;
	}

	render() {
		const menuItems = MenuData.menu.map((menu, idx) => {
			return this.getMenuItem(menu, idx);
		})
		return <nav className="menu">
			{menuItems}
		</nav>;
	}
}