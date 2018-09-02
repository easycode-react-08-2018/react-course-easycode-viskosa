import React, {Component} from 'react';

export class PlainButton extends Component {
	render() {
		const {buyItem} = this.props;
		return (
				<a href="#" className="btn btn-primary" onClick = {buyItem}>Buy</a> 
            )
	}

};