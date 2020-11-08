import React, { Component } from 'react';
import { Location } from '../Component/Contact/Location';
import { Phone } from '../Component/Contact/Phone';
import { SMS } from '../Component/Contact/SMS';
import data from '../Data/Data.json';
import "./Contact.scss";

export default class Contact extends Component {
	render() {
		const { about: { location, telephone, address: { street, city, state } }, title } = data;

		return <div className="contact">
			<h1 className="contact__title title">Contact me</h1>
			<div className="contact-details">
				<div className="contact__address contact__section">
					<h2 className="contact__address-title title">ADDRESS</h2>
					<address className="contact__address">
						{title}<br />
						{street} <Location href={location}></Location><br />
						{city}<br />
						{state}<br />
						{telephone}<br />
						<Phone className="contact__link" telephone={telephone}>Call</Phone> or <SMS className="contact__link" telephone={telephone} message="Hello Krystle-">Text</SMS>
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