import React, { Component } from "react";
//import { withRouter } from "react-router-dom";
//import { Header } from "../components/common/header.jsx";
//import { Form } from "../components/login-page/form.jsx";
//import { SignUpButton } from "../components/common/sign-up-button.jsx";
//import { SignOutButton } from "../components/common/sign-out-button.jsx";

export class LoginPage extends Component {

	render() {
		console.log(this.props);
		const { inputChangeUser, inputChangePassword, logIn, errorMsg, userValue, passwordValue } = this.props;
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
								<label
									htmlFor="username"
									className="cb-form__label"
								>
									Username
								</label>
								<input
									id="username"
									type="text"
									name="username"
									placeholder="Enter User Name"
									className="cb-input"
									onChange={inputChangeUser}
									value={userValue}
								/>
							</p>
							<p className="fl fl-justify-b">
								<label
									htmlFor="password"
									className="cb-form__label"
								>
									Password
								</label>
								<input
									id="password"
									type="password"
									name="password"
									placeholder="Password"
									className="cb-input"
									onChange={inputChangePassword} //теряется фокус после каждого нажатия!!!!!!!!!!!!!!!!
									value={passwordValue} 
								/>
							</p>

							<div className="cb-form__buttons-wrapper fl fl-justify-c fl-align-c">
								<p>
									<input
										type="submit"
										value="Sign in!"
										className="cb-button"
										onClick={logIn}
									/>
								</p>

								<p className="cb-form__checkbox">
									<input
										type="checkbox"
										id="remember"
										/*onClick={this.logIn}*/
									/>
									<label
										htmlFor="remember"
										className="cb-form__label-remember cb-form__label"
									>
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


//inputChangeUser = { this.inputChangeUser }
//inputChangePassword = { this.inputChangePassword }
//logIn = { this.logIn }
//errorMsg = {errorMsg}