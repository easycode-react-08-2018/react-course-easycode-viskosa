import React, { Component } from 'react';
import logo from '../../logo.svg';

export class Header extends Component {

  render() {
  	console.log('props from header', this.props);
  	const { username, button} = this.props;
  	//const button = this.props.username && <button className="cb-main-text cb-button">Sign-out</button>
    return (
        <header className="cb-header fl fl-justify-b fl-align-c">

	        <div className="cb__header-user">
	          <p className="cb-main-text">{username}</p>
	        </div>

			<div className="cb-header__sign-and-logo fl fl-align-c">

	          <div className="cb-header__sign">
	          	{button}
	          </div>

	          <div className="cb-header__logo-wrap">
	          	<img className="cb-header__logo-img" src={logo} alt="logo"/>
	          </div>

			</div>

        </header>
    );
  }
}