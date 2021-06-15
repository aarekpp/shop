import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AccountTile extends Component {
	state = {
		panelDisplay: false,
		tileMouseEnter: false,
		width: '',
		top: '',
		left: ''
	};

	togglePanelDisplay = () => {
		const tileBox = document.querySelector('.tiles');

		this.setState({ panelDisplay: !this.state.panelDisplay });
		this.setState({ tileMouseEnter: !this.state.tileMouseEnter });
		this.setState({ width: tileBox.getBoundingClientRect().width });
		this.setState({ top: tileBox.getBoundingClientRect().height });
		this.setState({ left: tileBox.getBoundingClientRect().left });
	};

	render() {
		return (
			<div
				className={this.state.tileMouseEnter ? 'tile tileHover' : 'tile'}
				onMouseEnter={this.togglePanelDisplay}
				onMouseLeave={this.togglePanelDisplay}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="35"
					height="35"
					fill="currentColor"
					className="bi bi-person"
					viewBox="0 0 16 16"
				>
					<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
				</svg>
				<p>Account</p>
				<div
					style={{ width: this.state.width, top: this.state.top, left: this.state.left }}
					className={this.state.panelDisplay ? 'accountTile panelDisplay' : 'accountTile'}
				>
					<Link to="/login" className="aPanelButton">
						<button className="button">Sing in</button>
					</Link>
					<div className="panelBetweenButtonsText">
						<hr style={{ width: '25%', bacgroundColor: '#000000', height: 1 }} />
						<span>or</span>
						<hr style={{ width: '25%', bacgroundColor: '#000000', height: 1 }} />
					</div>
					<Link to="/register" className="aPanelButton">
						<button className="button">Sing up</button>
					</Link>
				</div>
			</div>
		);
	}
}
