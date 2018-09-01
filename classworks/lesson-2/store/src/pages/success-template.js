import React, {Component} from 'react';

export class SuccessTemplate extends Component {
	render() {

		return (
			<React.Fragment>
				<button className="btn btn-light" disabled>Buy</button>
                <h3 className="text-success">✓✓✓✓✓</h3>
            </React.Fragment>    
            )
	}

};