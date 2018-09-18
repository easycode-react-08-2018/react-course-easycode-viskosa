//action---------------------------
/*{
	type: 'ADD_SERVER',
	payload: {
		server: '...'
	}
}*/

//action creator-------------------

export const ADD_SERVER = 'ADD_SERVER';// это чтобы случайно не сделать ошибку в названии
// если потом переименуем в 'add_server', то это сразу изменится и в редьюсере, и в экшене

export const addServer = (server) => { //сюда придет объект из servers.js {name: `Server #${this.props.servers.length}`}
	return {
		type: ADD_SERVER,
		payload: {
			server,
		}
	}
}