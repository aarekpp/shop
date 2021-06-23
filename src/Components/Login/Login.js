import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

		const bcrypt = require('bcryptjs');

		let email = document.querySelector(".loginInput[name='email']").value;
		let password = document.querySelector(".loginInput[name='password']").value;

		const hash = bcrypt.hashSync(password, 10);
	};

	componentDidMount() {
		window.onresize = this.setPageHeight;
		this.setPageHeight();
	}

	render() {
		return (<>
			<div className="logoHome">
				<Link to="/" className="logoHomePage">LOGO</Link>
			</div>
			<div className="loginContainer" style={{ height: this.state.height }}>
				<span>Sing in</span>
				<form className="loginForm" onSubmit={this.login}>
					<label>Email</label>
					<input name="email" type="email" className="loginInput" required />
					<label>Password</label>
					<input name="password" type="password" className="loginInput" required />
					<button id="loginButton" className="loginButton">
						Sing in
					</button>
				</form>
				<p>Haven't accout?</p>
				<Link to="/register">
					<button className="registerButtonLoginPage loginButton">
						Sing up
					</button>
				</Link>
			</div>
		</>
		);
	}
}
