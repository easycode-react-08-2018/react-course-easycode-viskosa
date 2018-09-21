import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './reducers/root-reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const store = createStore(rootReducer, composeEnhancer(applyMiddleware()));
