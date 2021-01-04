import React from 'react';
export function Instagram(props) {
	const { href, className, title = "Visit us on Instagram" } = props;
	return <a className={className} title={title} target="_blank" rel="noopener noreferrer" href={href}>
		<i className="fa fa-instagram"></i>
		{props.children}
	</a>
}