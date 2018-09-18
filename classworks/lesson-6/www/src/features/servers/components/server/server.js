import React from 'react';
import './server.css';
import { TextEditor } from '../../../../shared/components/text-editor/text-editor'

// УМНЫЙ КОМПОНЕНТ
/*
если в TextEditor будет приходить isInEditMode, то он будет превращаться в инпут
*/
export class ServerComponent extends React.Component {
	state = {
		isInEditMode: false,
	};

	toggleEditMode = () => {
		this.setState( prevState => ({ //это все равно что return
			isInEditMode: !prevState.isInEditMode,
		}))
	}
	render() {
		const { isInEditMode } = this.state;
		const { name } = this.props;
		return (
				<div className="server__item">
					<TextEditor className="server__item-title" value={name} isInEditMode={isInEditMode}/>
					<button className="server__item-edit" onClick={this.toggleEditMode}>Edit server</button>	
				</div>
			)
	}
}