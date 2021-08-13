import React, { Component } from 'react';
import Legacy from '../Component/Legacy';
import Meet from '../Component/Meet';
import Product from './Product';

export default class Home extends Component {
	render() {
		return <Legacy>
				<Meet></Meet>
				<Product></Product>
		</Legacy>;
	}
}