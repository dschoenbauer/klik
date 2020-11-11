import React from 'react';
export function SMS(props) {
	const { telephone, className, title = "Send a text", message } = props;
	const smsLink = `sms:+1${telephone.replace(/[\D.]/g, "")}?body=${encodeURI(message)}`;
	return <a className={className} title={title} target="_blank" rel="noopener noreferrer" href={smsLink}>
		<i className="fa fa-commenting"></i>
		{props.children}
	</a>
}