import React, { Component } from 'react';
import { Products } from '../Data/Products';
import Data from '../Data/Data.json';
import Product from '../Component/Product';
import "./ProductDetail.scss";
import Legacy from '../Component/Legacy';

export default class ProductDetail extends Component {

	componentWillReceiveProps(nextProps) {
		const { match: { params } } = nextProps;
		this.updateSite(params.portfolio);
	}

	componentDidMount() {
		const { match: { params } } = this.props;
		this.updateSite(params.portfolio);
	}

	updateSite(key) {
		const empty = { title: null, products: [], items: [], images: [], disclaimer: [] };
		const data = Products.hasOwnProperty(key) ? Products[key] : {};
		this.setState({ ...empty, ...data, ...{ personalData: Data } });
	}

	render() {
		if (!this.state) return <div>Loading...</div>;
		const { title, products = [], items = [], images = [], disclaimer = [] } = this.state;
		return <Legacy>
			<div className="portfolio">
				<h1 className="portfolio__title">{title}</h1>
				<div className="products">
					{products.map((product, key) => <Product key={key} {...product} />)}
				</div>

				{items.length > 0 &&
					<h2 className="portfolio__sub-title">Additional Items</h2>
				}
				{items.length > 0 &&
					<div className="portfolio__item-container">
						<ul className="portfolio__items">
							{items.map((item, key) => <li className="portfolio__item" key={key}>{item}</li>)}
						</ul>
					</div>
				}
				{disclaimer.map((lineItem, key) => <p key={key} className="portfolio__disclaimer" dangerouslySetInnerHTML={{ __html: lineItem }}></p>)}
				{this.state.personalData.allProduct.map((lineItem, key) => <p key={key} className="portfolio__disclaimer" dangerouslySetInnerHTML={{ __html: lineItem }}></p>)}

				<ul className="portfolio__gallery">
					{images.length > 1 && images.map((image, key) => <li key={key} className="portfolio__image-frame"><img className="portfolio__image" loading="lazy" src={image} alt={image} /></li>)}
					<li></li>
				</ul>
			</div>
		</Legacy>;
	}
}