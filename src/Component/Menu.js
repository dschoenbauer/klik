import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Media } from '../Data/Media.js';
import "./Menu.css";

export default class Menu extends Component {
	getMenuItem(data, idx, parentRoot = null) {
		const { label, route, children = [] } = data;
		let childrenDom = "";
		if (children && Array.isArray(children) && children.length > 0) {
			const items = data.children.map((menu, idx) => {
				return this.getMenuItem(menu, idx, "/" + route);
			})
			childrenDom = <ul>{items}</ul>;
		}
		const path = (parentRoot ? parentRoot : "") + `/${route}`;
		return <li key={idx} className="header__navigation-item">
			<Link to={path}>{label}</Link>
			{childrenDom}
		</li>;
	}

	render() {
		const menuItems = Media.menu.map((menu, idx) => {
			return this.getMenuItem(menu, idx);
		})
		return <nav className="header__navigation">
			{menuItems}
		</nav>;
	}
}