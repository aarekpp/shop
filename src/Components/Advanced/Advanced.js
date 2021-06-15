import React, { Component } from 'react';
import './Advanced.css';

export default class Advanced extends Component {
	constructor(props) {
		super(props);
		const word = window.location.href.split('/').pop();
		this.state = { text: word };
	}
	stete = {
		text: 'ADVANCED'
	};

	render() {
		return (
			<div className="advanced">
				<p className="advanced2">{this.state.text}</p>
			</div>
		);
	}
}
