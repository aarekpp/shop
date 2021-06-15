import React, { Component } from 'react';
import PanelCard from './PanelCard';

export default class HelpTile extends Component {
	cards = [
		{ name: 'Shipment status', href: '/shipment' },
		{ name: 'Installments', href: '/installments' },
		{ name: 'Delivery', href: '/delivery' },
		{ name: 'Leasing', href: '/leasing' }
	];

	render() {
		return (
			<div className="tile">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					fill="currentColor"
					className="bi bi-info-square"
					viewBox="0 0 16 16"
				>
					<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
					<path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
				</svg>
				<p>Help</p>
				<div
					className="helpTile"
					style={{ width: this.props.width, top: this.props.top, left: this.props.left }}
				>
					<PanelCard cards={this.cards} />
				</div>
			</div>
		);
	}
}
