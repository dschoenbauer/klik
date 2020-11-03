import React, { Component } from 'react';

export default class ProductDetail extends Component {
	componentDidMount(){
		const { match: { params } } = this.props;
		console.log(params);
	}
	
	render() {
		return <div className="about">Product Detail: {this.props.match.params.productKey}</div>;
	}
}