import axios from 'axios';
import React, { Component } from 'react';
import MainCategoryCard from './MainCategoryCard';
import './Navbar.css';

export default class Navbar extends Component {
	state = {
		mainCategories: [],
		mainSubcategories: []
	};

	loadData = async () => {
		await axios.get('http://localhost/getMainCategories.php').then((response) => {
			this.setState({ ...this.state, mainCategories: response.data });
		});
		await axios.get('http://localhost/getMainSubcategories.php').then((response) => {
			this.setState({ ...this.state, mainSubcategories: response.data });
		});
	};

	componentDidMount() {
		this.loadData();
	}

	render() {
		return (
			<nav>
				{this.state.mainCategories.map((card) => (
					<MainCategoryCard
						id={card.id}
						key={card.id}
						name={card.main_categories}
						subcategories={this.state.mainSubcategories.filter(function(subcategory) {
							if (card.id === subcategory.id_main_category) {
								return subcategory;
							}
						})}
					/>
				))}
			</nav>
		);
	}
}
