import React, {  useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MainPageContext } from '../../../contexts/MainPageContext';


export default function MainCategoryCard(props) {

	const { changeCategory, loadProducts } = useContext(MainPageContext);

	const initialState = {
		top:'',
		left:'',
		isRender: false,
	}

	const [state,setState] = useState(initialState);

	const toggleDisplay = (e) =>{
		setState({...state, left: e.target.getBoundingClientRect().left,isRender:!state.isRender})
	}

	const setChangeCategory = (e) =>{
		changeCategory(e.target.value);
		loadProducts(e.target.value);
	}

	return <>
		<div className="mainCategoryCard" onMouseEnter={toggleDisplay} onMouseLeave={toggleDisplay}>
			<li value={props.id}>{props.name}</li>
			<div data-panelid={props.id} className={state.isRender ? 'mainCategoryPanelDisplay mainCategoryPanel' : 'mainCategoryPanel'}>
				{
					props.subcategories.map(subcategory => (
						<Link to={"/"+subcategory.id} key={subcategory.id}>
							<li className="category" value={subcategory.id} onClick={setChangeCategory}>{subcategory.main_subcategories}</li>
						</Link>
					))
				}
			</div>
		</div>
	</>
}

