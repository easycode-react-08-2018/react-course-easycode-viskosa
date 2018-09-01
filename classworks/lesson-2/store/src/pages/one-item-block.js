import React, {Component} from 'react';


export class OneItemBlock extends Component {
	render() {

		const {value} = this.props;

		return (
	        	<li className="list-group-item">
                    <img src="#" alt=""/>
                    <a href="#" className="admin-orders__link">
                      {value}
                    </a>
                    <h2 className="float-right btn-link">✎</h2>
                 </li>

			)
	}

}; 