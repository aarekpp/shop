import React, { Component, createContext } from 'react';
import axios from 'axios';
export const RegisterContext = createContext();

export default class RegisterContextProvider extends Component {
	constructor() {
		super();
	}

	chceckEmailAvailability = async (email) => {
		if (email.length !== 0) {
			const isExist = await axios.post('http://testshop.pl/api/checkEmail.php', {
				email: email
			});
			return isExist.data;
		}
		return null;
	};

	registerUser = async (user) => {
		const register = await axios.post('http://testshop.pl/api/registerUser.php', {
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			password: user.password,
			terms: user.terms,
			newsletter: user.newsletter
		});
		return register.data;
	};

	render() {
		const contextValue = {
			chceckEmailAvailability: this.chceckEmailAvailability,
			registerUser: this.registerUser
		};
		return <RegisterContext.Provider value={contextValue}>{this.props.children}</RegisterContext.Provider>;
	}
}
