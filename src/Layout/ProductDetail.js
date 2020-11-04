import React, { Component } from 'react';
import { Products } from '../Data/Products';
import Product from '../Component/Product';
import "./ProductDetail.scss";

export default class ProductDetail extends Component {

	componentWillReceiveProps(nextProps) {
		const { match: { params } } = nextProps;
		this.setState(Products[params.portfolio]);
	}
	
	componentDidMount() {
		const { match: { params } } = this.props;
		this.setState(Products[params.portfolio]);
	}

	render() {
		if (!this.state) return <div>Loading...</div>;
		console.log(this.state);
		const { title, products = [], items = [] } = this.state;

		return <div className="portfolio">
			<h1 className="portfolio__title">{title}</h1>
			<div className="products">
				{products.map((product, key) => <Product key={key} {...product} />)}
			</div>
			<h2 className="portfolio__sub-title">Additional Items</h2>
			<div className="portfolio__item-container">
				<ul className="portfolio__items">
					{items.map((item, key) => <li className="portfolio__item" key={key}>{item}</li>)}
				</ul>
			</div>
		</div>;
	}
}