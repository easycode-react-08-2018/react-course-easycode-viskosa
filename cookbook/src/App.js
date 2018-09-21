import React, {Component} from 'react';
import {Link, Route, Switch, withRouter} from 'react-router-dom';
import './App.css';
import {Header} from './components/common/header.jsx';
import {LoginPage} from './pages/login-page/login-page.jsx';
import {RecipesPage} from './pages/recipes-page/recipes-page.jsx';
import {EditRecipePage} from './pages/edit-recipe-page/edit-recipe-page.jsx';
//import { SignUpButton } from "./components/common/sign-up-button.jsx";
//import { SignOutButton } from "./components/common/sign-out-button.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      activeUser: '',
    };
  }

  logOut = () => {
    this.setState({
      activeUser: '',
      errorMsg: '',
    });
  };

  render() {
    const {activeUser} = this.state;
    return (
      <div className="App">
        <div className="cb__wrapper">
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              component={(props) => <LoginPage {...props} />}
            />
            //так делаем, чтобы работало history
            <Route exact path="/recepts" component={RecipesPage} />
            <Route path="/recepts/:id" component={EditRecipePage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

//-------------------------------------------------
/*import React, { Component } from "react";
import {
	Link,
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
		console.log('props from historyHandler', this.props);
		//this.props.history.push("/recepts"); // не работает, как правильно?????????????????????
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

				<div className="App">
					<div className="cb__wrapper">
						<Header
							username={activeUser}
							button={activeUser ? ( <SignOutButton logout={this.logOut} /> ) : ( <SignUpButton /> ) }
						/>
						<Switch>
							<Route exact path="/" component={props => (
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
							/>
							<Route exact path="/recepts" component={ReceptsPage} />
							<Route path="/recepts/:id" component={EditReceptPage} />
						</Switch>
					</div>
				</div>

		);
	}
}

export default App;*/
