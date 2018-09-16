
//---имплементация REDUX - паттерн PUBLISH/SUBSCRIBE------------------------------
// 1. Есть ф-ция обработчик
// 2. и есть ф-ция, которая его принимает и возвращает:
// - ф-цию, которая возвращает стейт getState
// - ф-цию, каторая умеет добавлять ф-цию в массив listeners
// - ф-цию, которая меняет стейт и запускает все ф-ции из массива listeners

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
		const newState = reducer(state, action); // при первом заходе state == 0, action == 'INCREMENT'
												 // в newState попадает 1
		if (newState != state) {
			state = newState;					// state становится равен 1
			listeners.forEach(listener => {
				listener();
			})
		}
	}

	return { 
		getState,
		subscribe,
		dispatch // отправка

	}
};
//------------------------------------------------------------------
const incButton = document.getElementById('inc');
const decButton = document.getElementById('dec');
const counter = document.getElementById('counter');

const reducer = (state = 0, action) => { //1 - пишем ф-цию обработчик. Если стейт не пришел, пусть стейт будет равен 0
	/*if ( action == 'INCREMENT' ) {
		return state + 1;
	}
	if ( action == 'DECREMENT') {
		return state - 1;
	}*/
	switch (action) {			// в редаксе предполагается писать свитч-кейсами
		case 'INCREMENT': {
			return state + 1;
		}
		case 'DECREMENT': {
			return state - 1;
		}
		default: {
			return state;
		}
	}
}

const store = createStore(reducer); // 2 - создаем экземпляр ф-ции createStore и передаем в нее наш обработчик reducer

function updateCounter() { // 3 - создаем ф-цию, которая должна срабатывать по клику - т.е. менять сожержимое в каунтере
	counter.innerHTML = store.getState();
}

store.subscribe(updateCounter); // 4 - подписываемся на ф-цию updateCounter, т.е. ф-ция subscribe добавит ф-цию updateCounter
								// в массив listeners

incButton.addEventListener('click', () => { // 5 - при клике на кнопку должно измениться состояние каунтера
	store.dispatch('INCREMENT');    // тут сначала поменяется стейт, а потом запустятся все ф-ции 
									// в массиве listeners(у нас там только updateCounter)
	//console.log(store.getState());	// при каждом клике будет увеличиваться на 1
})

decButton.addEventListener('click', () => { 
	store.dispatch('DECREMENT');    
})

// 47 минута видео 1 часть - как подключить redux из cdn 

//Основные концепции:
//Reducer:
//  - всегда возвращает state
//  - всегда новый стейт (иммутабельность) - нельзя мутировать стейт!!
//  - всегда чистая функция (side-effects free), т.е. в reducer не пишут вещи, которые непонятно вернут ли что-то,
// т.е. запросы на сервер(fetch) или обращение к чему-то в локалсторедж, там может лежать что-то, а может и нет

// ---- иммутабельность: --------
// как нужно писать правильно, чтобы не мутировать стейт, если в стейте приходит объект:
const reducer2 = (state = {counter: 0}, action) => {
	switch (action) {			
		case 'INCREMENT': {
			return {		// тут возвращаем новый объект
				...state,
				counter: state.counter + 1			
			}
		}
		case 'DECREMENT': {
			return state - 1;
		}
		default: {
			return state;
		}
	}
}