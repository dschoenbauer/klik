import React from 'react';
import Header from './Component/Header.js';
import logo from './img/logo.png';
import './App.css';
import Footer from './Component/Footer.js';

function App() {
	let telephone = "507-210-7087";
	let props = {
		telephone: { target: "_blank", href: `tel:${telephone}` },
		facebook: { target: "_blank", href: `https://www.facebook.com/photosbyklikfoley/` },
		map: { target: "_blank", href: `https://www.google.com/maps/place/Klik+Photography/@44.209971,-93.219646,15z/data=!4m5!3m4!1s0x0:0x1f1aa8f581a5d758!8m2!3d44.209971!4d-93.219646` }
	}
	return (
		<div className="App">
			<Header className="header"></Header>
			<div className="App_actions">
				<a className="App_action" {...props.telephone}><i className="fa fa-phone"></i> {telephone}</a>
				<a className="App_action"  {...props.facebook}><i className="fab fa-facebook"></i></a>
				<a className="App_action"  {...props.map}><i className="fas fa-map-marker-alt"></i></a>
			</div>

			<Footer></Footer>
		</div>
	);
}

export default App;