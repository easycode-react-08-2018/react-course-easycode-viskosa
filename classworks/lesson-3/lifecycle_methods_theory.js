import React, { Component } from "react";
import { YoutubeSearch } from "путь к компоненту YoutubeSearch";
const API_KEY = 'some long key';//ключ для апи ютуба

class App extends Component {
	state = {
		appName: 'Title',
	}

	constructor(props) {
		super(props);

	}

	// componentDidMount вызывается, когда компонент отрендерился.
	// Хорошее место для обращений к ДОМ и запросов на сервер
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				appName: 'Hello from componentWillReceiveProps'
			}, 10000)
		})
	}

	render() {
		return (
				<main>
					<YoutubeSearch 
						title={this.state.appName} //после 10 секунд здесь вместо изначального 'Title' появится 'Hello from componentWillReceiveProps'
						onBlurFunc={term => {
						//console.log('something')// тут лучше делать запрос на сервер
						YTSearch({ key: API_KEY, term }, data => { // при онблуре с инпута происходит запрос к апи
							console.log(data);
						})
					}/>
				</main>
			)
	}
}

//---YoutubeSearch class ----------------------------------
import React, { Component } from "react";

export class YoutubeSearch extends Component {
	constructor(props) { // если собираемся где-то использовать пропсы, нужно писать так
		super(props);

		this.state = {
			inputValue: '',
			title: props.title,// изначально 'Title'
			isActive: false
		}

	}


	//WillReceiveProps вызывается, когда пропсы уже пришли, но компонент еще не отрендерился
	// при изначальном рендере не вызывается
	componentWillReceiveProps(nextProps){
		console.log('props', this.props); // те пропсы, которые еще не изменились из-за сеттаймаута,
										  // т.е. здесь title="Title", onBlur=function(){...}
		console.log('nextProps', nextProps); // те пропсы, которые пришли после сеттаймаута, 
											// т.е. title="Hello from componentWillReceiveProps", onBlur=function(){...}
											//функцию мы не меняли, она в обоих случаях одинаковая
	// это используется, если стейт зависит от пропсов. Тут обычно проверяют, изменилось что-то или нет.
	// типа значение в новых пропсах больше предыдущего или что-то такое
	// или если в пропсах ничего не изменилось, компонент не нужно перереднеривать
	// тут принимается решение, нужно ли эти новые пропсы куда-то дальше передавать
		if (nextProps.title != this.state.title) { // "Hello from componentWillReceiveProps" != "Title"
			this.setState({
				inputValue: nextProps.title
			})
		}

	}

	//shouldComponentUpdate вызывается после того, как сработал componentWillReceiveProps, мы там сделали setState
	// и теперь принимаем решение, перерендеривать компонент или нет
	// при изначальном рендере не вызывается
	shouldComponentUpdate(nextProps, nextState) { 
		// возвращает true or false. Если true - компонент перерендерится, если false - то нет
		// все оптимизации производят здесь
	}

	//conponentWillUpdate вызывается после shouldComponentUpdate
	conponentWillUpdate(){

	}

	//conponentDidUpdate вызывается после conponentWillUpdate тогда, когда компонент был обновлен
	conponentDidUpdate(){

	}

	//conponentWillUnmount вызывается перед тем, как компонент будет удален
	conponentWillUnmount(){

	}

	onChange = event => {
		this.setState({
			inputValue: event.target.value
		})
	};

	onBlur = () => {
		this.props.onBlurFunc(this.state.inputValue);//вызываем ф-цию onBlur, которая пришла в пропсах из Апп 
		//и передаем в нее велью из инпута, т.е. по сути происходит запрос к Апи ютуба с тем значением, которое ввели в инпуте
		this.setState({isActive: false})
	};

	render() {
		const { inputValue } = this.state;
		return (
				<div>
					<h3>{this.state.title}</h3>
					<input 
						value={inputValue} 
						onBlur={this.onBlur}
						onChange={this.onChange}
						onFocus={() => {
							this.setState({isActive: true})
						}}
					/>
				</div>
			)
	}
}