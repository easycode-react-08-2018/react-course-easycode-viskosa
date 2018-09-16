import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'; //дружит реакт с редаксом
import { createStore } from 'redux';
import { store } from './store/store';
//если а провайдер не передать стор, то ничего не будет работать, редакс в приложении не появится
ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>, 
	document.getElementById('root'));
