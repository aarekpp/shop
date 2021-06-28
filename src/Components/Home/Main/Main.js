import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './MainPagesTypes/HomePage';
import ProductsDisplay from './MainPagesTypes/ProductsDisplay';
import './Main.css';

export default class Main extends Component {
	render() {
		return (
			<main>
				<HashRouter>
					<Switch>
						<Route path="/:subcategory">
							<ProductsDisplay />
						</Route>
						<Route path="/">
							<HomePage />
						</Route>
					</Switch>
				</HashRouter>
			</main>
		);
	}
}
