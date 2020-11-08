import React, { Component } from 'react';
import data from '../Data/Data.json'

export default class Contact extends Component {
	render() {
		const { about: { telephone, address: { street, city, state, zip } }, title } = data;
		const telephoneLink = `tel:${telephone}`;
		return <div className="contact">
			<h1 className="contact__title title">Contact me</h1>
			<div className="contact-details">
				<div className="contact__address contact__section">
					<h2 className="contact__address-title title">ADDRESS</h2>
					<address>
						{title}<br />
						{street} <span className="glyphicon glyphicon-map-marker"></span><br />
						{city},<br />
						{state} {zip}<br />
						<span className="glyphicon glyphicon-phone"></span> <a href={telephoneLink}>{telephone}</a>
					</address>
				</div>
				<div className="contact__location contact__section">
					<h2 className="text-center title">OUR LOCATION</h2>
					<iframe 
						className="contact__map"
						title="map location" 
						frameBorder="0" 
						src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ7wfn5mf39ocRWNelgfWoGh8&key=AIzaSyCz0CP-456jIxMFjce2NZkjUgZdUfDDnpA" 
						allowFullScreen></iframe>
				</div>
			</div>
		</div>
	}
}