import React from 'react';
export function Location(props) {
	const { href, className, title = "Visit us in person (by appointment only please)" } = props;
	return <a className={className} title={title} target="_blank" rel="noopener noreferrer" href={href}>
		<i className="fa fa-map-marker"></i>
		{props.children}
	</a>
}