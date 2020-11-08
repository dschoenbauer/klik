import React from 'react';
export function Phone(props) {
	const { telephone, className, title = "Call" } = props;
	return <a className={className} title={title} target="_blank" rel="noopener noreferrer" href={`tel:${telephone}`}>
		<i className="fa fa-phone"></i>
		{props.children}
	</a>
}