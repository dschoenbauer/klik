import React, { Component } from 'react';
import Meet from '../Component/Meet';
import Product from './Product';

export default class Home extends Component {
	render() {
		return <div>
			<Meet></Meet>
			<Product></Product>
		</div>;
	}
}