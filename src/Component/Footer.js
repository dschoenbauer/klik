import React, { Component } from 'react';
import "./Footer.css";

export default class Footer extends Component {
	
	render(){
		return <footer className="footer">
			<p className='copyright-notice'>Copyright © 2020-2022 by Krystle Foley</p>
			<p className='copyright-notice'>All Rights Reserved.</p>
		</footer>;
	}
}