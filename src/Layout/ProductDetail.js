import React, { Component } from 'react';

export default class ProductDetail extends Component {
	componentDidMount(){
		const { match: { params } } = this.props;
		console.log(params);
	}
	
	render() {
		return <h1 className="title">Product Detail: {this.props.match.params.portfolio}</h1>;
	}
}