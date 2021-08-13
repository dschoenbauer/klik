import React, { Component } from 'react';
import { Location } from '../Component/Contact/Location';
import { Phone } from '../Component/Contact/Phone';
import { SMS } from '../Component/Contact/SMS';
import Legacy from '../Component/Legacy';
import data from '../Data/Data.json';
import "./Contact.scss";

export default class Contact extends Component {
	render() {
		const { about: { location, telephone, address: { street, city, state, zip } }, title } = data;

		return <Legacy>
			<div className="contact">
				<h1 className="contact__title title">Contact me</h1>
				<div className="contact-details">
					<div className="contact__section">
						<h2 className="contact__address-title title">MAILING LIST</h2>
						<form name="mailing-list" method="post" className="form">
							<p className="form__element"><label className="form__label">Name:</label><input className="form__input" type="text" name="name" /></p>
							<p className="form__element"><label className="form__label">Email:</label><input className="form__input" type="email" name="email" /></p>
							<p className="form__element"><button className="form__button" type="submit">Send</button></p>
							<input type="hidden" name="form-name" value="mailing-list" />
						</form>
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
					<div className="contact__address contact__section">
						<h2 className="contact__address-title title">ADDRESS</h2>
						<address className="contact__address">
							{title}<br />
							{street} <Location href={location}></Location><br />
							{city},<br />
							{state} {zip}<br />
							{telephone}<br />
							<Phone className="contact__link" telephone={telephone}>Call</Phone> or <SMS className="contact__link" telephone={telephone} message="Hello Krystle-">Text</SMS>
						</address>
					</div>

				</div>
			</div>
		</Legacy>
	}
}