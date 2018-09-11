import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppWithStore } from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const initialState = {counter: 0};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT': {
			return {
				counter: state.counter + 1
			}
		}
		case 'INCREMENTPLUS': {
			return {
				counter: state.counter += action.value
			}
		}
		case 'DECREMENT': {
			return {
				counter: state.counter - 1
			}
		}
		default: {
			return state;
		}
	}
}

const store = createStore(reducer);

ReactDOM.render(
	<Provider store = {store}>
		<AppWithStore />
	</Provider>,
	document.getElementById('root')
);

