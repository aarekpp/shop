import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PanelCard extends Component {
	state = {
		cards: this.props.cards
	};

	render() {
		return this.props.cards.map((card) => (
			<Link to={'/advanced' + card.href}>
				<p key={card.name} className="panelCard">
					{card.name}
				</p>
			</Link>
		));
	}
}
