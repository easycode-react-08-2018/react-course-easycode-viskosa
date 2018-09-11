import React, { Component } from "react";

export class SignOutButton extends Component {
  render() {
  	const { logout } = this.props;
    return (
        <button 
        	className="cb-main-text cb-button"
        	onClick={logout}
        >
        	Sign-out
        </button>
    );
  }
}