import React from 'react';// для бабеля, чтобы когда он будет трансформировать код в 
// React.createElement, он мог добавить эту зависимость

// ----------------КОМПОНЕНТЫ-----------------------------------------------------------------


//---1 вариант создания компонента--------------------------------
//---базовый реакт-компонент-------------------------------------

// он написан с большой буквы
// он принимает в себя props
// работает быстрее, чем написанный на классе
// это превратится просто в React.createElement

const Avatar = (props) => { // здесь пришедшие пропсы никогда не переопределяем!!
	props.log(); //privet
	console.log(props.title2) // true
	return (
			<div>
				<img src={props.src} />
				<h3>{props.title}</h3> // если вдруг в пропсах title не пришел, то будет пусто
									   // чтобы все равно там что-то отображать, даже если тайтл не пришел, используют defaultProps 
			</div>
		)
}

Avatar.defaultProps = { // это типа static свойства
	title: 'Avatar 2 cool cinema' //это значание попадет в h3 Аватара, если там в пропсах никакой тайтл не придет
}

//---2 вариант создания компонента---------------------------------
//---можно написать компонент при помощи класса--------------------
// он должен обязательно наследовать React.Component
// он должен обязательно иметь метод render()
// метод render() возвращает ту верстку, которая в нем будет лежать
// constructor необязателен (даже в js)
// так как есть наследование от React.Component, то есть доп функционал, кот лежит в прототипах
// это превратится в нечто юолее сложное, чем просто React.createElement

// export class Header extends React.Component { // - если хотим экспортировать класс в Апп, например, 
// то тут пишем export, а в Апп принимаем его как import {Header} from 'путь/к/файлу'
class Header extends React.Component {
	render() {
		return (
				<header>
					<h1>User name</h1>
					<Avatar 
						src = 'http://google.com'   // в компонент можно передать все, что хочешь - строку
						log = {() => {				// функцию, объект, массив, другой компонент
							console.log('privet')	// это ф-ция придет в компонент Avatar в пропсах,там можно ее сразу и вызвать
						}}
						title = "Title from Avatar" // это прийдет в компонент Avatar в его h3
						title2 // даже так можно передать что-то, без значания. Это значит, что это свойство есть 
							   // и его нельзя перебить с помощью defaultProps
						onClickFunc = {(str) => { // так onClick придет в Аватар в составе props
								console.log(str); // 'will be shown'
							}
						}
						<button onClick={() => {console.log('qwerty')}}>Header button</button> //а так onClick повесится как обработчик события на button
					/>
				</header>
			)
	}
 
}

//--------THIS.PROPS и методы----------------------------------------------------
// Как пропсы передаются в класс? Перепишем компонент Аватар как класс:

class Avatar extends React.Component{ 
// class Avatar extends Component - можно писать так, но тогда в самом верху пишем import React, {Component} from 'react';

	static defaultProps = {
		title: 'Avatar 2 cool cinema'
	};
	/*static get defaultProps() { // такая запись по новой спеке, но пока лучше так не писать
		return {
			title: 'Avatar 2 cool cinema'
		}
	};*/

	render() {
		console.log(this.props) // тут уже не просто props, а this.props
		return (
				<div>
					<img src={this.props.src} />
					<h3>{this.props.title}</h3>
					<button onClick={this.props.onClickFunc('will be shown')}>Submit</button>//при клике на кнопку хочу отображать каунтер в компоненте Header
												   // при этом сам onClick описываем в родителе, т.е. в компоненте Header			   
				</div>
			)
	}

}
// для доступа к пропсам используем this
// defaultProps уже не пишем отдельно, а пишем прям в классе


//----SETSTATE()----------------------------------------------------------------------
import React, {Component} from 'react';

export class InputComponent extends Component {
	constructor() {
		super();

		this.state ={ // чтобы указать this.state, обязательно нужно писать constructor
			inputValue = '',
		};
		//this.inputChange = this.inputChange.bind(this) //так надо было бы биндить ф-цию
	}

	//inputChange(event) { можно было написать так, но тогда надо было бы писать в конструкторе биндинг
	inputChange = (event) => { // при вводе чего-то в инпут ф-ция меняет значение this.state.inputValue в стейте 
		this.setState({
			inputValue: event.target.value, // реклмендовано таким образом отслеживать инпуты
		})
	}

	render() {
		return {
			<div>
				<input type="text" 
				value={this.state.inputValue}
				onChange = {this.inputChange} //по onChange будет срабатывать ф-ция inputChange 
				/>
			</div>

		}
	}
}

//--ПРИМЕР С COUNTER-------------------------------------------------
// при кликена кнопочки число в теге p будет увеличиваться или умеьшаться
import React, {Component} from 'react';

export class Counter extends Component {
	constructor() {
		super();

		this.state ={ 
			counter: 0,
		};
		
	};

	incrementCounter = () => {
		this.setState({
			counter: this.state.counter + 1,
		}, () => {
			console.log('I run after setState')// setState вторым параметром принимает колбек ф-цию, 
											   // которая выполнится сразу после выполнения setState
		})
	}
	
	//state = { //можно не писать constructor и в нем this.state, а просто state = {}
	//	counter: 0,
	//};

	decrementCounter = () => {
		//this.state.counter = this.state.counter + 1 - такая запись не влечет за собой перерисовку ДОМ, только setState
		this.setState({
			counter: this.state.counter - 10,
		});

		this.setState((prevState) => { //в setState можно передать не только объект, но и функцию
			console.log(prevState);
			return {
				counter: prevState.counter + 1; //prevState - предыдущее состояние				
			} // по клику сначала сработает this.state.counter - 10, потом prevState.counter + 1, 
			// т.е если было изначально 100, то сначала станет 100-10=90, потом prevState+1, т.е. 90+1=91
			// 

		});
	}

	render() {
		console.log(this.props.children);// 'qwerty' - придет из Апп
		return {
			<div>
				<button onClick={this.incrementCounter}>Increment +</button> // по клику вызывается ф-ция incrementCounter
				<p>{this.state.counter}</p>
				<button onClick={this.decrementCounter}>Decrement -</button> // по клику вызывается ф-ция decrementCounter
			</div>

		}
	}
}




//---ЭТО ДОЛЖНО БЫТЬ НАПИСАНО В App.js, чтобы это все работало:---------
import React, {Component} from 'react';
import {Header} from 'путь к файлу где лежит компонент Header';
import {InputComponent} from 'путь к файлу где лежит компонент InputComponent';
import {Counter} from 'путь к файлу где лежит компонент Counter';

class App extends Component {
	render() {
		return {
			<main>
				<Header />
				<InputComponent />
				<Counter>
					qwerty //это qwerty придет в компонент Counter как this.props.children. Можно передать что угодно - кусок верстки, другой компонент
				</Counter>
			</main>
		}
	}
}

export default App;