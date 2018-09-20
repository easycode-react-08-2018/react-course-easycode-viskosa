import { combineReducers } from 'redux';
import { authReducer } from './auth/auth.rd';
import { historyReducer } from './history/history'

//это главарь редьюсеров, будет собирать все редьюсеры

export const rootReducer = combineReducers ({
	authReducer: authReducer,
	history: historyReducer,
	//ui: combineReducers({})// тут может быть разный уровень вложености
})