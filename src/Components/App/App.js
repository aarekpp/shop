import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Home from '../Home/Home';
import './App.css';

export default class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		);
	}
}
