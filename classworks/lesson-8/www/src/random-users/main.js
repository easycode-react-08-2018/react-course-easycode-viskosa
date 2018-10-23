import React from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import {rootReducer} from './features/random-users/reducers/root-reducer';
import {RandomUsers} from './features/random-users';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const middlewares = compose(composeEnhancer, applyMiddleware)(ReduxThunk); // тут ReduxThunk придет 
// в applyMiddleware, а результат, который отдаст applyMiddleware, придет потом в composeEnhancer

const store = createStore(rootReducer, middlewares); // стор создался со всеми редьюсерами и мидлварами

export const RandomUsersApp = () => (
  <Provider store={store}>
    <RandomUsers />
  </Provider>
);