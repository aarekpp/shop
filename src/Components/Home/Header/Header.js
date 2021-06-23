import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AccountTile from './Tiles/AccountTile';
import CartTile from './Tiles/CartTile';
import HelpTile from './Tiles/HelpTile';
import './Header.css';

export default class Header extends Component {
	state = {
		width: '',
		left: '',
		top: ''
	};

	toggleDisplayPanel = (e) => {
		const panel = e.target.querySelector('div');
		const tileBox = document.querySelector('.tiles');
		this.setState({ width: tileBox.getBoundingClientRect().width });
		this.setState({ left: tileBox.getBoundingClientRect().left });
		this.setState({ top: tileBox.getBoundingClientRect().height });
		panel.classList.toggle('panelDisplay');
	};

	componentDidMount() {
		const tiles = document.querySelectorAll('.tile');
		tiles.forEach((tile) => tile.addEventListener('mouseenter', this.toggleDisplayPanel));
		tiles.forEach((tile) => tile.addEventListener('mouseleave', this.toggleDisplayPanel));
	}

	render() {
		return (
			<header>
				<Link to="/" className="aLogo">
					<div className="logo">LOGO</div>
				</Link>
				<div className="searchBar">
					<input id="searchInput" className="searchInput" type="text" />
					<button id="seachButton" className="searchButton">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							className="bi bi-search"
							viewBox="0 0 16 16"
						>
							<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
						</svg>
					</button>
				</div>
				<div className="tiles">
					<AccountTile width={this.state.width} top={this.state.top} left={this.state.left} />
					<CartTile width={this.state.width} top={this.state.top} left={this.state.left} />
					<HelpTile width={this.state.width} top={this.state.top} left={this.state.left} />
				</div>
			</header>
		);
	}
}
