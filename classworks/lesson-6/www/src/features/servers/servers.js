import React from 'react';
import { ServerComponent } from './components/server/server';
import './servers.css';
import { connect } from 'react-redux';
import { addServer } from '../../store/actions/servers-actions/add-server';

export class ServersComponent extends React.Component {

	addNewServer = () => {
		const { addServer, servers } = this.props; //addServer - это фция, пришла из actions/...add-server.js
		addServer({
			name: `Server #${servers.length + 1}`
		})
	} 

	render() {
		const { servers } = this.props; 
		console.log('this.props', this.props); //{server: Array(2), qwerty: "qwerty", dispatch: ƒ}
		console.log('servers from props', servers);  //[{name: "Server #1"}, {name: "Server #2"}]

		return (
			 <React.Fragment>
			 	<ul className="servers-list">
			 		{servers.map((item, i) => {
			 			return (
							<li key = {i} className="servers-list-item">
								<ServerComponent name={item.name}/>
							</li>
			 				)
			 		})}
			 	</ul>
				{/*<ul className="servers-list">
					<li className="servers-list-item">
						<ServerComponent />
					</li>
					<li className="servers-list-item">
						<ServerComponent />
					</li>
				</ul>*/}

				<button onClick={this.addNewServer}> ADD SERVER</button>
			 </React.Fragment>
			)
	}
}
// ф-ция mapStateToProps принимает стейт и возвращает пропсы для нужного компонента
// очень похоже на subscribe 
const mapStateToProps = (state) => { // state приходит из servers-reducer.js - КАК???
	console.log('state', state); // {servers: Array(2), history: Array(0)}
	return {
		servers: state.servers, //придет выше в компонент ServersComponent в виде пропсов
		qwerty: 'qwerty'
	}
}

const mapDispatchToProps = { // название говорит о том, что я хочу замапить ф-цию диспатч к пропсам в моем компоненте
	addServer 				 // когда я ее запамлю, у меня в компоненте ServersComponent появится такая ф-ция
}

export const Servers = connect(mapStateToProps, mapDispatchToProps)(ServersComponent); //компонент коннектится к стору