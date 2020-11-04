import React, { Component } from 'react';
import "./Product.scss";

export default class Product extends Component {
	render() {
		const { name, price, includes = []} = this.props;
		const title = price ? `${name}: $${price}`:name;
		return <div className='product'>
			<h2 className="product__title">{title}</h2>
			<ul className="product__includes">
				{includes.map((include, idx) => {
					return <li key={idx} className="product__inclusion">{include}</li>
				})}
			</ul>
		</div>
	}
}