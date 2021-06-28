import React, { Component } from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import MainPageContextProvider from '../../contexts/MainPageContext';
import './Home.css';

export default class Home extends Component {
	render() {
		return(<>
			<Header />
			<MainPageContextProvider>
				<Navbar />
				<Main />
			</MainPageContextProvider>
		</>)
	}
}
