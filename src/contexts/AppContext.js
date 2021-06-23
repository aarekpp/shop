import React, { Component, createContext } from 'react';
import axios from 'axios';
export const AppContext = createContext();

export default class AppContextProvider extends Component {
	constructor() {
		super();
	}

	state = {
		isAuth: false,
		user: null
	};

	render() {
		const contextValue = {};
		return <AppContext.Provider value={contextValue}>{this.props.children}</AppContext.Provider>;
	}
}
