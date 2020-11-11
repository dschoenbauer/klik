import React, { Component } from 'react';
import { Products } from '../Data/Products';
import "./Product.scss";

export default class Product extends Component {

	constructor(props) {
		super(props);
		this.state = { products: Products };
	}

	getProductCard(product, idx) {
		const {images = [], key, title, subTitle = ""} = product;
		const isOdd = idx % 2 === 0;
		const image = images[Math.floor(images.length * Math.random())];
		if(!image) return null;
		return <a key={key} href={`/portfolio/${key}`} className={`product-card ${isOdd ? "product-card--odd" : ""}`}>
				<img className="product-card__image" alt={title} src={image}></img>
			<h2 className="product-card__title">{title}</h2>
			<p className="product-card__text">{subTitle}</p>
		</a>
	}

	render() {
		console.log(this.state);
		if (!this.state) return null;
		return <div className="product-cards">
			{Object.keys(this.state.products).map((key, idx) => {
				const product = {...this.state.products[key], ...{key}};
				return this.getProductCard(product, idx)
			}
			)}
		</div>
	}
}