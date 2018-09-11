import React, { Component } from "react";
import {
	Link,
	BrowserRouter,
	Route,
	Switch,
	withRouter
} from "react-router-dom";
import "./App.css";
import { Header } from "./components/common/header.jsx";
import { LoginPage } from "./pages/login-page.jsx";
import { ReceptsPage } from "./pages/receipts-page.jsx";
import { EditReceptPage } from "./pages/edit-receipt-page.jsx";
import { SignUpButton } from "./components/common/sign-up-button.jsx";
import { SignOutButton } from "./components/common/sign-out-button.jsx";

class App extends Component {
	constructor() {
		super();

		this.state = {
			//inputValueEmail: "",
			//inputValueConfirmPassword: "",		
			inputValuePassword: "",
			inputValueUser: "",
			activeUser: "",
			errorMsg: "",
			//secret: ''
		};
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
				console.log(data);
				return data.json();
			})
			.then(obj => {
				console.log(obj);

				let status = obj.status;
				let message = obj.message;

				if (status === "success") {
					//let secret = obj.message.token;
					//console.log(secret);
					this.setState({
						activeUser: user,
						errorMsg: ""
						//secret: secret
					});

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
		this.props.history.push("recepts"); // не работает, как правильно?????????????????????
	};

	logOut = () => {
		this.setState({
			activeUser: "",
			errorMsg: ""
		});
	};

	render() {
		const { activeUser, errorMsg, inputValuePassword, inputValueUser } = this.state;
		return (
			<BrowserRouter>
				<div className="App">
					<div className="cb__wrapper">
						<Header
							username={activeUser}
							button={activeUser ? ( <SignOutButton logout={this.logOut} /> ) : ( <SignUpButton /> ) }
						/>
						<Switch>
							<Route path="/" component={props => (
									<LoginPage
										{...props}
										logIn={this.logIn}
										inputChangeUser={this.inputChangeUser}
										inputChangePassword={this.inputChangePassword}
										errorMsg={errorMsg}
										userValue={inputValueUser}
										passwordValue={inputValuePassword}
									/>
								)}
								exact
							/>
							<Route path="/recepts" component={ReceptsPage} exact />
							<Route path="/recepts/:id" component={EditReceptPage} />
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
