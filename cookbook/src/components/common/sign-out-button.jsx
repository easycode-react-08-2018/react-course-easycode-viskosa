import React, { Component } from "react";
import {connect} from 'react-redux';
import {logOut} from '../../store/actions/auth/auth.action.js';

export class SignOutButtonComponent extends Component {

	loggingOut = () => {
		console.log('this.props from button component', this.props)
		const { logOut, history } = this.props;
		logOut();
		history.push('/');
	}

	render() {
		const { logOut } = this.props;
		return (
			<button className="cb-main-text cb-button" onClick={this.loggingOut}>
				Sign-out
			</button>
		);
	}
}

const mapStateToProps = (state) => {
	console.log("from buttons mapStateToProps", state);
	return {
		login: state.authReducer.login,
		history: state.history
	}
}

const mapDispatchToProps = {
	logOut,
}

export const SignOutButton = connect(mapStateToProps, mapDispatchToProps)(SignOutButtonComponent);	
