import React, { Component } from 'react';
import './Login.css';
export default class Login extends Component {
	state = {
		height: ''
	};

	setPageHeight = () => {
		this.setState({ height: document.querySelector('body').offsetHeight });
	};

	login = (e) => {
		e.preventDefault();
	};

	componentWillMount() {
		this.setPageHeight();
	}

	componentDidMount() {
		const loginButton = document.getElementById('loginButton');
		loginButton.addEventListener('click', this.login);
	}

	render() {
		window.onresize = this.setPageHeight;

		return (
			<div className="loginContainer" style={{ height: this.state.height }}>
				<span>Sing in</span>
				<form action="" className="loginForm">
					<label>Email</label>
					<input name="loginEmail" type="emial" className="loginInput" />
					<label>Password</label>
					<input name="loginPassword" type="password" className="loginInput" />
					<button id="loginButton" className="loginButton">
						Sing in
					</button>
				</form>
			</div>
		);
	}
}
