import React, { Component } from 'react';
import data from '../Data/Data.json'

export default class Contact extends Component {
	render() {
		const { about: { telephone, address: { street, city, state } }, title } = data;
		const telephoneLink = `tel:${telephone}`;
		return <div className="contact">
			<h1 className="contact__title title">Contact me</h1>
			<div className="contact-details">
				<div className="contact__address">
					<h2 className="contact__address-title">{title}</h2>
					<address>
						{street} <span className="glyphicon glyphicon-map-marker"></span><br />
						{city}<br />
						{state}<br />
						<span className="glyphicon glyphicon-phone"></span> <a href={telephoneLink}>{telephone}</a>
					</address>
				</div>
				<div className="col-md-6">
					<h2 className="text-center">OUR LOCATION</h2>
					<iframe title="map location" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ7wfn5mf39ocRWNelgfWoGh8&key=AIzaSyCz0CP-456jIxMFjce2NZkjUgZdUfDDnpA" allowFullScreen></iframe>
				</div>
			</div>
		</div>
	}
}