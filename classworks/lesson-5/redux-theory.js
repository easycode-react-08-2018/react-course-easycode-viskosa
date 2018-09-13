
//---имплементация REDUX------------------------------

//const reducer = (state, action) => { //ф-ция обработчик, принимает стейт и экшен 

//}

const createStore = (reducer) => { // создает стор, принимает редьюсер
	let state;
	let listeners = []; // то, что потом станет вью-частью

	const getState = () => state; // берет стейт
	const subscribe = (listener) => {
		listeners.push(listener);
	};

	const dispatch = (action) => {
		const newState = reducer(state, action);

		if (newState != state) {
			state = newState;
			listeners.forEach(listener => {
				listener();
			})
		}

	}

	return { 
		getState,
		dispatch, // отправка
		subscribe
	}
};
//------------------------------------------------------------------
const reducer = (state = 0, action) => { //ф-ция обработчик. Если стейт не пришел, пусть стейт будет равен 0
	if ( action == 'INCREMENT') {
		return state + 1;
	}
}

const store = createStore(reducer);

const incButton = document.getElementById('inc');
const decButton = document.getElementById('dec');

const counter = document.getElementById('counter');

incButton.addEventListener('click', () => { // при клике на кнопку должно измениться состояние каунтера
	store.dispatch('INCREMENT');
	console.log(store.getState());

})

//40 имнута 1 видео ))