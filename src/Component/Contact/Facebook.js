import React from 'react';
export function Facebook(props) {
	const { href, className, title = "Visit us on Facebook" } = props;
	return <a className={className} title={title} target="_blank" rel="noopener noreferrer" href={href}>
		<i className="fa fa-facebook-f"></i>
		{props.children}
	</a>
}