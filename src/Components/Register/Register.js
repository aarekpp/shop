import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { RegisterContext } from '../../contexts/RegisterContext';
import './Register.css';

function Register() {
	const { chceckEmailAvailability, registerUser } = useContext(RegisterContext);
	const history = useHistory();
	const initialState = {
		userInfo: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			terms: 'N',
			newsletter: 'N'
		}
	};
	const [ state, setState ] = useState(initialState);

	const namesValidate = (e) => {
		if (/^[A-Z][a-z]{1,30}$/.test(e.target.value)) {
			if (e.target.dataset.index === '1') {
				onBlurUpdate(e.target.name, e.target.value);
			} else {
				onBlurUpdate(e.target.name, e.target.value);
			}
		} else {
			if (e.target.dataset.index === '1') {
			} else {
			}
		}
	};

	const passwordsValidate = (e) => {
		if (e.target.dataset.index === '4') {
			if (/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*]).{8,32}$/.test(e.target.value)) {
				onBlurUpdate(e.target.name, e.target.value);
			} else {
			}
		} else {
			if (e.target.value === document.querySelector("[data-index='4']").value) {
			} else {
			}
		}
	};

	const emailvalidate = async (e) => {
		const isEmailExist = await chceckEmailAvailability(e.target.value);
		if (isEmailExist) {
			onBlurUpdate(e.target.name, e.target.value);
			document.querySelector("[data-index='3']").style.border = '2px solid green';
		} else {
			document.querySelector("[data-index='3']").style.border = '2px solid red';
		}
	};

	const checkboxesUpdate = (e) => {
		if (e.target.checked) {
			onBlurUpdate(e.target.name, 'Y');
		} else {
			onBlurUpdate(e.target.name, 'N');
		}
	};

	const onBlurUpdate = (name, value) => {
		setState({
			...state,
			userInfo: {
				...state.userInfo,
				[name]: value
			}
		});
	};

	const submitForm = async (e) => {
		e.preventDefault();
		const data = await registerUser(state.userInfo);
		if (data.success === 1) {
			history.push('/');
		}
	};

	const [ height, setHeight ] = useState();

	useEffect(() => {
		const setPageHeight = () => {
			setHeight(document.querySelector('body').offsetHeight);
		};
		window.onload = setPageHeight();
		window.addEventListener('resize', setPageHeight);
	}, []);

	return (
		<div className="registerPage" style={{ height: height }}>
			<div className="logoHome">
				<Link to="/" className="logoHomePage">
					LOGO
				</Link>
			</div>
			<div className="registerContainer">
				<span>Sing up</span>
				<form className="registerForm" onSubmit={submitForm}>
					<fieldset>
						<label>First name</label>
						<input
							data-index="1"
							type="text"
							name="firstName"
							className="registerFormInput"
							onBlur={namesValidate}
							required
						/>
						<br />
						<label>Last Name</label>
						<input
							data-index="2"
							type="text"
							name="lastName"
							className="registerFormInput"
							onBlur={namesValidate}
							required
						/>
					</fieldset>
					<fieldset>
						<label>Email adress</label>
						<input
							data-index="3"
							type="email"
							name="email"
							className="registerFormInput"
							onBlur={emailvalidate}
							required
						/>
					</fieldset>
					<fieldset>
						<label>Password</label>
						<input
							data-index="4"
							type="password"
							name="password"
							className="registerFormInput"
							onBlur={passwordsValidate}
							required
						/>
					</fieldset>
					<fieldset>
						<label>Confirm password</label>
						<input
							data-index="5"
							type="password"
							className="registerFormInput"
							onBlur={passwordsValidate}
							required
						/>
					</fieldset>
					<fieldset className="checkboxes">
						<div className="termsAccept">
							<input type="checkbox" data-index="6" name="terms" onBlur={checkboxesUpdate} required />
							<span>Accept terms and privacy policy</span>
						</div>
						<div className="newsletterAccept">
							<input type="checkbox" data-index="7" name="newsletter" onBlur={checkboxesUpdate} />
							<span>Newsletter</span>
						</div>
					</fieldset>
					<button className="loginButton">Sing up</button>
				</form>
			</div>
		</div>
	);
}
export default Register;
