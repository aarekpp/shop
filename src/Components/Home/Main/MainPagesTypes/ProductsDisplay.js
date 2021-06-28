import React, { useContext, useEffect } from 'react';
import ProductTile from './ProductTile';
import { MainPageContext } from '../../../../contexts/MainPageContext';
import './ProductsDisplay.css';

export default function ProductsDisplay() {
	const { mainPageState, changeCategory, loadProducts } = useContext(MainPageContext);

	useEffect(() => {
		const getData = () => {
			if (mainPageState.category === null) {
				changeCategory(parseInt(window.location.href.split('/').pop()));
				loadProducts(parseInt(window.location.href.split('/').pop()));
			}
		};
		window.onload = getData();
	});

	return (<>
		<div className="productsDisplayContainer">
			<div className="filters">
				<h3>FILTERS</h3>
			</div>
			<div className="products">
				{mainPageState.products.map((product) => (
					<ProductTile product={product} category={mainPageState.category} key={product.id}/>
				))}
			</div>
		</div>
	</>);
}
