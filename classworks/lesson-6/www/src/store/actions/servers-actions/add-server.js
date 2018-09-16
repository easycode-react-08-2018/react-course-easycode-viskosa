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

const addServer = (server) => {
	return {
		type: ADD_SERVER,
		payload: {
			server,
		}
	}
}