import React, { Component } from 'react';
import "./Choice.css";

export default class Choice extends Component {
	render() {
		return <div className='choice__container'>
			<div className='choice__option'>
				<a href="/lux">Lux</a>
			</div>
			<div className='choice__option'>
				<a href="/classic">Classic</a>
			</div>
		</div>;

	}
}