import React from 'react';
import { ServerComponent } from './components/server/server';
import './servers.css';
import { connect } from 'react-redux';

export class ServersComponent extends React.Component {
	render() {
		return (
			 <React.Fragment>
				<ul className="servers-list">
					<li className="servers-list-item">
						<ServerComponent />
					</li>
					<li className="servers-list-item">
						<ServerComponent />
					</li>
				</ul>

				<button> ADD SERVER</button>
			 </React.Fragment>
			)
	}
}

export const Servers = connect()(ServersComponent); //компонент коннектится к стору