import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppWithStore } from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'; //дружит реакт с редаксом
import { createStore } from 'redux';


const initialState = {counter: 0};

const reducer = (state = initialState, action) => { // action - это объект, который
	switch (action.type) {							//  приходит из какого-то файла в папке actions
		case 'INCREMENT': {
			return {
				counter: state.counter + 1
			}
		}
		case 'INCREMENTPLUS': {
			return {
				counter: state.counter += action.payload // по контрактам редакса название payload 
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

const store = createStore(reducer);// тут хранится стейт
//стор создаем один раз и в него передаем главаря редьюсеров

ReactDOM.render(
	<Provider store = {store}>
		<AppWithStore />
	</Provider>,
	document.getElementById('root')
);

//