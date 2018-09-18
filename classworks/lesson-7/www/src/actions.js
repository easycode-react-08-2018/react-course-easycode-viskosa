export const incrementCounter = (payload) => {
	return {
		type: 'INCREMENT',
		payload,
	};
} ;

const goToServer = () => {
	new Promise(resolve => {
		setTimeout (() => {
			resolve();
		}, 1000)
	})
}

export const incrementAsyncCounter = (payload) => {
	goToServer().then (() => {
		return {
			type: 'INCREMENT'
		}
	})
}