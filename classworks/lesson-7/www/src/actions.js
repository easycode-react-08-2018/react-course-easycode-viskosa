export const incrementCounter = (payload) => {
	return {
		type: 'INCREMENT',
		payload,
	};
} ;

//--async--------------------------------------------------

const goToServer = (payload) => {
	return new Promise(resolve => {
		setTimeout (() => {
			resolve();
		}, 2000)
	})
}

export const incrementAsyncCounter = (payload) => {
	/*тут нужно сходить на сервер и как только он отдал нам данные - выполнить какой-то action*/
	return (dispatch, getState) => { // пришли из редакса
		console.log('HELLO FROM ASYNC ACTION');

		goToServer().then (() => { // вызываем goToServer, он вернет промис, у промиса есть резолв,
								   // который зарезолвится за 1 секунду. Когда пришел ответ, нужно 
								   // как-то обработать сценарий return {type:'INCREMENT'}
			dispatch({
				type: 'ASYNC_INCREMENT', 
				payload,
			});
		});

	}
}