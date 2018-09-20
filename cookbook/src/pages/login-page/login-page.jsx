import React, { Component } from "react";
import { doAuth } from '../../store/actions/auth/auth.action.js';
import { connect } from 'react-redux';

export class LoginPageComponent extends Component {
	constructor() {
		super();

		this.state = {
			//inputValueEmail: "",
			//inputValueConfirmPassword: "",		
			inputValuePassword: "",
			inputValueUser: "",
			//activeUser: "",
			errorMsg: "",
			//secret: ''
		}
	}
	putUserInGlobalState = (user) => {
		console.log('from putUserInGlobalState', user)//Nataly
		doAuth({
			login: user
		})
	}

	inputChangeUser = event => {
		console.log(this.state.inputValueUser);
		this.setState({
			inputValueUser: event.target.value
		});
	};

	inputChangePassword = event => {
		this.setState({
			inputValuePassword: event.target.value
		});
	};

	logIn = event => {
		event.preventDefault();

		const user = {
			user: this.state.inputValueUser,
			password: this.state.inputValuePassword
		};

		this.fetchFunction(user, "login");
	};

	fetchFunction = (newUser, path) => {
		const { user, email, password } = newUser;
		const url = `https://flatearth-api.herokuapp.com/api/v1/auth/${path}`;

		const response = fetch(url, {
			method: "POST",
			headers: {
				"Content-type": "application/json"
			},
			body: JSON.stringify({
				user: user,
				email: email,
				password: password
			})
		});

		response
			.then(data => {
				//console.log(data);
				return data.json();
			})
			.then(obj => {
				//console.log(obj);

				let status = obj.status;
				let message = obj.message;

				if (status === "success") {
					//let secret = obj.message.token;
					//console.log(secret);
					this.setState({
						//activeUser: user,
						errorMsg: ""
						//secret: secret
					});

					this.putUserInGlobalState(user);
					this.historyHandler();
				}

				if (status === "error") {
					this.setState({
						errorMsg: message
					});
				}
				console.log(status);
			});
	};

	historyHandler = () => {
		//console.log('props from historyHandler', this.props);
		this.props.history.push("/recepts"); 
	}
	
	render() {
		//console.log('this.props from login page', this.props);
		//const { /*inputChangeUser, inputChangePassword,/ logIn,* /*errorMsg, userValue, passwordValue*/ } = this.props;
		const { inputValueUser, inputValuePassword, errorMsg } = this.state;
		return (
			<div className="cb-form__wrapper fl fl-dir-col">
				<form action="#" method="post" name="signup">
					<fieldset>
						<h2 className="cb-form__welcome">
							Welcome to Cook Book!
						</h2>
						<div className="cb-form__inner">
							<p className="error">{errorMsg}</p>
							<p className="fl fl-justify-b">
								<label htmlFor="username" className="cb-form__label">
									Username
								</label>
								<input
									id="username"
									type="text"
									name="username"
									placeholder="Enter User Name"
									className="cb-input"
									onChange={this.inputChangeUser}
									value={inputValueUser}
								/>
							</p>
							<p className="fl fl-justify-b">
								<label htmlFor="password" className="cb-form__label">
									Password
								</label>
								<input
									id="password"
									type="password"
									name="password"
									placeholder="Password"
									className="cb-input"
									onChange={this.inputChangePassword}
									value={inputValuePassword} 
								/>
							</p>

							<div className="cb-form__buttons-wrapper fl fl-justify-c fl-align-c">
								<p>
									<input
										type="submit"
										value="Sign in!"
										className="cb-button"
										onClick={this.logIn}
									/>
								</p>

								<p className="cb-form__checkbox">
									<input
										type="checkbox"
										id="remember"
										/*onClick={this.logIn}*/
									/>
									<label htmlFor="remember" className="cb-form__label-remember cb-form__label">
										Remember me!
									</label>
								</p>
							</div>
						</div>
					</fieldset>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log('state from login-page component', state);
	return {
		login: state.authReducer.login,
		qwerty: 'qwerty'
	}
}

const mapDispatchToProps = {
	doAuth
}

export const LoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPageComponent); //компонент коннектится к стору