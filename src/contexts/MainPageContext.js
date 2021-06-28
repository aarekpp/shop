import React, { Component, createContext } from 'react';
import axios from 'axios';
export const MainPageContext = createContext();

export default class MainPageContextProvider extends Component {
	constructor() {
		super();
	}

	state = {
		category: null,
		products: []
	};

	changeCategory = (categoryNumber) => {
		this.setState({ ...this.state, category: categoryNumber });
	};

	loadProducts = async (idCategory) => {
		await axios.get('http://localhost/getProducts.php', { params: { category: idCategory } }).then((response) => {
			this.setState({ ...this.state, products: [ ...response.data ] });
		});
	};

	render() {
		const contextValue = {
			mainPageState: this.state,
			changeCategory: this.changeCategory,
			loadProducts: this.loadProducts
		};
		return <MainPageContext.Provider value={contextValue}>{this.props.children}</MainPageContext.Provider>;
	}
}
