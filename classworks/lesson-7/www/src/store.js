import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducer';
import ReduxThunk from 'redux-thunk';

//createStore принимает следующее:
//createStore(reducer:Function, 
//			  Middleware or initialState, 
//			  Middleware)

//export const store = createStore(reducer);


const logMiddleware = store => next => action => { // одна мидлвара
	console.log('PREV STATE: ', store.getState()) //500
	console.log('ACTION', action);				// из action.js ф-ция, которую вернет incrementAsyncCounter
	next(action); // передает управление в action, т.е. вызовется incrementAsyncCounter из actions.js
	console.log('CURRENT STATE:', store.getState())//и когда стейт обновится, управление вернется сюда
}

const asyncActionMiddleware = store => next => action => { // вторая мидлвара
	if (typeof action === 'function') { // иногда в action хочу передавать ф-цию
		action(store.dispatch, store.getState); // когда вызовем диспатч - вызовется редьюсер??
	} else {
		next(action); //если не написать некст, то все загнется, стор перестанет работать
	}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;// для редакс девтулз


export const store = createStore(
	reducer, {			 // 1- редьюсер
		counterReducer:{
			counter: 500 // 2 - initialState, придет в редьюсер
		},
	}, //composeEnhancers(applyMiddleware(logMiddleware, asyncActionMiddleware))); // 3- свой миддлвар передаем в applyMiddleware, у нас их 2
	composeEnhancers(applyMiddleware(logMiddleware, ReduxThunk))); // 3- свой миддлвар передаем в applyMiddleware, у нас их 2

//--REDUX THUNK----------------------------------------------
// Мидлвару asyncActionMiddleware заменим на редакс санки:s

//1. Ставим npm i redux-thunk
//2. Импортим в store.js import ReduxThunk from 'redux-thunk';
//3. В applyMiddleware вместо asyncActionMiddleware передаем ReduxThunk
