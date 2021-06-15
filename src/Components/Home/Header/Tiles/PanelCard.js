import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PanelCard extends Component {
	state = {
		cards: this.props.cards
	};

	render() {
		return this.props.cards.map((card) => (
			<Link key={card.name} to={'/advanced' + card.href}>
				<p className="panelCard">{card.name}</p>
			</Link>
		));
	}
}
