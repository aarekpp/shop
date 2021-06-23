import { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Advanced from '../Advanced/Advanced';
import Home from '../Home/Home';
import AppContextProvider from '../../contexts/AppContext';
import RegisterContextProvider from '../../contexts/RegisterContext';
import './App.css';

export default class App extends Component {
	render() {
		return (
			<AppContextProvider>
				<HashRouter>
					<Switch>
						<Route path="/register">
							<RegisterContextProvider>
								<Register />
							</RegisterContextProvider>
						</Route>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/advanced">
							<Advanced />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</HashRouter>
			</AppContextProvider>
		);
	}
}
