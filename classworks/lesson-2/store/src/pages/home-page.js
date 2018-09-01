import React, {Component} from 'react';


export class HomePage extends Component {
	render() {

		const {changePageToAdmin, changePageToUser} = this.props;

		return (
	        <div className="container">
	          <h1>Main Page</h1>
	          <div className="row">
	            <button 
	            	className="btn btn-primary"
	            	onClick = {changePageToAdmin}
	            	>
	            	Login as Admin
	            </button>
	            <button className="btn btn-outline-primary"
	            	onClick = {changePageToUser}
	            >
	            	Login as User
	            </button>
	          </div>
	        </div>

			)
	}

} 