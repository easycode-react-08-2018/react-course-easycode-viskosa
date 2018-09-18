import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducer';

//createStore(reducer, middleware or initialState, middleware)
//export const store = createStore(reducer);

//const logMiddleware 

const middleware = store => next => action => {
	console.log('PREV STATE: ', store.getState())
	console.log('action', action);
	console.log('CURRENT STATE:', store.getState())
	next(action);
}

export const store = createStore(
	reducer, {
		counterReducer:{
			counter: 500
		},
	},applyMiddleware(middleware));